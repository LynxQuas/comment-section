/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { data } from "../../public/data";

const CommentContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "comment/addComment":
            const newComment = action.payload.comment;
            console.log(newComment);
            const updatedComments = [newComment, ...state.comments];

            return { ...state, comments: updatedComments };

        case "comment/addReply":
            const newReply = action.payload.reply;
            const allComments = [...state.comments];
            const updatedReplies = allComments.map((comment) => {
                if (comment.user.username === newReply.replyTo) {
                    return {
                        ...comment,
                        replies: [newReply, ...comment.replies],
                    };
                }
                if (comment.id === newReply.commentId) {
                    return {
                        ...comment,
                        replies: [newReply, ...comment.replies],
                    };
                } else {
                    return comment;
                }
            });

            return { ...state, comments: updatedReplies };

        case "comment/delete":
            const toDeleteComment = action.payload.id;
            const commentDeleted = state.comments.map((comment) => {
                if (comment.id === toDeleteComment) {
                    return null;
                } else {
                    const deletedFromReplies = comment.replies.filter(
                        (reply) => reply.id !== toDeleteComment
                    );

                    return { ...comment, replies: deletedFromReplies };
                }
            });

            const updatedComment = commentDeleted.filter(
                (comment) => comment !== null
            );
            return { ...state, comments: updatedComment };

        case "comment/edit":
            const editedComment = action.editedComment;
            const updateComment = state.comments.map((comment) => {
                if (comment.id === editedComment.id) {
                    return { ...comment, content: editedComment.content };
                }

                const replies = comment.replies;

                const updatedReplies = replies.map((reply) =>
                    reply.id === editedComment.id
                        ? { ...reply, content: editedComment.content }
                        : reply
                );

                const newComment = { ...comment, replies: updatedReplies };

                return newComment;
            });

            return { ...state, comments: updateComment };

        default:
            return state;
    }
};

const CommentContextProvider = ({ children }) => {
    const [{ comments, currentUser }, dispatch] = useReducer(reducer, data);

    return (
        <CommentContext.Provider value={{ comments, currentUser, dispatch }}>
            {children}
        </CommentContext.Provider>
    );
};

export const useComment = () => {
    const ctxValue = useContext(CommentContext);

    return ctxValue;
};

export default CommentContextProvider;

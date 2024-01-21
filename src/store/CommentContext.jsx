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
            const updatedComments = [newComment, ...state.comments];

            return { ...state, comments: updatedComments };

        case "comment/addReply":
            // new reply
            const newReply = action.payload.reply;

            // get the current comment's replies.
            const currentCommentReplies = state.comments.map((comment) =>
                comment.replies.some(
                    (reply) => reply.replyingTo === newReply.replyTo
                )
                    ? {
                          ...comment,
                          replies: [...comment.replies, newReply],
                      }
                    : comment
            );

            return { ...state, comments: currentCommentReplies };
        // add the new reply to current comment's replies.

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

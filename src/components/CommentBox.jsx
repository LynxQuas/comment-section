/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useComment } from "../store/CommentContext";

const CommentBox = ({
    replyTo,
    commentId,
    onReply,
    comment,
    isEditing,
    onEdit,
}) => {
    const { currentUser, dispatch } = useComment();
    const commentText = useRef();

    const addCommentHandler = () => {
        const newComment = {
            id: (Math.random() * 10).toString(),
            createdAt: new Date().getTime(),
            content: commentText.current.value,
            replies: [],
            score: 0,
            user: { ...currentUser },
        };

        dispatch({
            type: "comment/addComment",
            payload: { comment: newComment },
        });
    };

    const replyCommentHandler = () => {
        const newReply = {
            id: (Math.random() * 10).toString(),
            createdAt: new Date().getTime(),
            content: commentText.current.value,
            replyTo: replyTo,
            commentId: commentId,
            score: 0,
            user: { ...currentUser },
        };

        dispatch({
            type: "comment/addReply",
            payload: { reply: newReply },
        });

        onReply(false);
    };

    const editCommentHandler = () => {
        const editedComment = {
            ...comment,
            content: commentText.current.value,
        };

        dispatch({ type: "comment/edit", editedComment });
        onEdit(false);
    };

    if (isEditing) {
        return (
            <div className="bg-white p-5 flex flex-col gap-4 m-4 rounded-md ">
                <textarea
                    ref={commentText}
                    defaultValue={comment.content}
                    className="w-[100%] h-[8rem] p-2 outline-none border-2 border-gray-300 rounded-lg"
                    placeholder="add new comment"
                ></textarea>
                <div className="flex justify-between items-center">
                    <img
                        src={currentUser?.image?.png}
                        alt="user"
                        className="w-12"
                    />
                    <button
                        className="bg-[#5457b6] text-white py-2 px-4 rounded-md"
                        onClick={editCommentHandler}
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-5 flex flex-col gap-4 m-4 rounded-md md:flex-row">
            <img
                src={currentUser?.image?.png}
                alt="user"
                className="w-12 h-12  hidden md:block"
            />
            <textarea
                ref={commentText}
                defaultValue={replyTo ? `@${replyTo}` : ""}
                className="w-[100%] h-[8rem]  resize-none p-2 outline-none border-2 border-gray-300 rounded-lg"
                placeholder="add new comment"
            ></textarea>
            <div className="flex justify-between items-center md:items-start">
                <img
                    src={currentUser?.image?.png}
                    alt="user"
                    className="w-12 h-12 self-center md:hidden"
                />
                {replyTo ? (
                    <button
                        className="bg-[#5457b6] text-white py-2 px-4 rounded-md"
                        onClick={replyCommentHandler}
                    >
                        REPLY
                    </button>
                ) : (
                    <button
                        className="bg-[#5457b6] text-white py-2 px-4 rounded-md"
                        onClick={addCommentHandler}
                    >
                        SEND
                    </button>
                )}
            </div>
        </div>
    );
};

export default CommentBox;

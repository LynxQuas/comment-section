import { useRef } from "react";
import { useComment } from "../store/CommentContext";

const CommentBox = ({ replyTo }) => {
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
            score: 0,
            user: { ...currentUser },
        };

        dispatch({
            type: "comment/addReply",
            payload: { reply: newReply },
        });
    };

    return (
        <div className="bg-white p-5 flex flex-col gap-4 m-4 rounded-md">
            <textarea
                ref={commentText}
                defaultValue={replyTo ? `@${replyTo}` : ""}
                className="w-[100%] h-[8rem] p-2 outline-none border-2 border-gray-300 rounded-lg"
                placeholder="add new comment"
            ></textarea>
            <div className="flex justify-between items-center">
                <img
                    src={currentUser?.image?.png}
                    alt="user"
                    className="w-12"
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

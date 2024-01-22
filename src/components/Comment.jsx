/* eslint-disable react/prop-types */
import User from "./User";
import CommentContent from "./CommentContent";
import CommentAction from "./CommentAction";
import { useState } from "react";
import CommentBox from "./CommentBox";
import Replies from "./Replies";
import Scores from "../ui/Scores";

import { useComment } from "../store/CommentContext";
import Model from "../ui/Model";

const Comment = ({ comment }) => {
    const { dispatch } = useComment();
    const [replyingOnComment, setReplyingOnComment] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [score, setScore] = useState(comment.score);
    const [openModel, setOpenModel] = useState(false);

    const openModelHandler = () => {
        setOpenModel(true);
    };

    const deleteCommentHandler = () => {
        dispatch({ type: "comment/delete", payload: { id: comment.id } });
    };

    const addScoreHandler = () => {
        setScore((prev) => prev + 1);
    };

    const minuScoreHandler = () => {
        setScore((prev) => prev - 1);
    };

    const replyOnCommentHandler = () => {
        setReplyingOnComment((prev) => !prev);
    };

    return (
        <>
            {openModel && (
                <Model
                    onDelete={deleteCommentHandler}
                    onCancel={openModelHandler}
                />
            )}
            <section className="bg-white p-5 flex md:gap-2 flex-col m-4 rounde w-full d-md md:flex-row md:justify-between">
                <Scores
                    score={score}
                    onAddScore={addScoreHandler}
                    onMinusScore={minuScoreHandler}
                    className="md:flex items-center gap-3 p-2 bg-[#eaecf1] rounded-md min-w-14 md:flex-col md:gap-5 justify-center md:mr-6 hidden"
                />
                <div className="md:flex md:flex-col md:gap-4 flex-grow">
                    <User
                        user={comment.user}
                        createdAt={comment.createdAt}
                        onReply={replyOnCommentHandler}
                        onEdit={setIsEditing}
                        onDelete={openModelHandler}
                    />
                    <CommentContent content={comment.content} />
                </div>
                <CommentAction
                    score={score}
                    user={comment.user}
                    id={comment.id}
                    onAddScore={addScoreHandler}
                    onMinusScore={minuScoreHandler}
                    onEdit={setIsEditing}
                    onReply={replyOnCommentHandler}
                />
            </section>
            {replyingOnComment && (
                <CommentBox
                    replyTo={comment.user.username}
                    commentId={comment.commentId}
                    onReply={setReplyingOnComment}
                    onEdit={setIsEditing}
                />
            )}

            {isEditing && (
                <CommentBox
                    comment={comment}
                    onEdit={setIsEditing}
                    isEditing={isEditing}
                />
            )}

            {comment.replies?.length > 0 && (
                <Replies replies={comment.replies} />
            )}
        </>
    );
};

export default Comment;

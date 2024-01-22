/* eslint-disable react/prop-types */

import { useComment } from "../store/CommentContext";
import EditButton from "../ui/EditButton";
import DeleteButton from "../ui/DeleteButton";
import ReplyButton from "../ui/ReplyButton";
import Scores from "../ui/Scores";
import { useState } from "react";
import Model from "../ui/Model";

const CommentAction = ({
    score,
    user,
    onReply,
    id,
    onEdit,
    onAddScore,
    onMinusScore,
}) => {
    const [openModel, setOpenModel] = useState(false);
    const { currentUser, dispatch } = useComment();

    const openModelHandler = () => {
        setOpenModel((prev) => !prev);
    };

    const deleteCommentHandler = () => {
        dispatch({ type: "comment/delete", payload: { id: id } });
    };

    return (
        <>
            {openModel && (
                <Model
                    onDelete={deleteCommentHandler}
                    onCancel={openModelHandler}
                />
            )}

            <div className="flex justify-between items-center p-2 text-[#5457b6]">
                <Scores
                    score={score}
                    onAddScore={onAddScore}
                    onMinusScore={onMinusScore}
                    className="flex items-center gap-3 p-2 bg-[#eaecf1] rounded-md md:w-16 md:flex-col md:gap-5 justify-center md:hidden"
                />

                {user.username !== currentUser.username ? (
                    <ReplyButton
                        onReply={onReply}
                        user={user}
                        className="flex items-center gap-2 md:hidden"
                    />
                ) : (
                    user.username === currentUser.username && (
                        <div className="flex items-center gap-2 md:hidden">
                            <DeleteButton onClick={() => openModelHandler()} />
                            <EditButton onEdit={onEdit} />
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default CommentAction;

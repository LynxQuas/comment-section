/* eslint-disable react/prop-types */

import { useComment } from "../store/CommentContext";
import EditButton from "../ui/EditButton";
import DeleteButton from "../ui/DeleteButton";
import ReplyButton from "../ui/ReplyButton";
import Scores from "../ui/Scores";

const CommentAction = ({ score, user, onReply }) => {
    const { currentUser } = useComment();

    return (
        <div className="flex justify-between items-center p-2 text-[#5457b6]">
            <Scores score={score} />
            {user.username !== currentUser.username && (
                <ReplyButton onReply={onReply} user={user} />
            )}

            {user.username === currentUser.username && (
                <div className="flex items-center gap-2">
                    <DeleteButton />
                    <EditButton />
                </div>
            )}
        </div>
    );
};

export default CommentAction;

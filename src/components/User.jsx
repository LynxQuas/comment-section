import { useComment } from "../store/CommentContext";
import DeleteButton from "../ui/DeleteButton";
import EditButton from "../ui/EditButton";
import ReplyButton from "../ui/ReplyButton";
import { timeAgo } from "../utils/helpers";

/* eslint-disable react/prop-types */
const User = ({ user, createdAt, onReply, onEdit, onDelete }) => {
    const { currentUser } = useComment();

    const time = Number(createdAt);
    console.log(time);

    return (
        <div className="flex gap-4 items-center justify-between flex-wrap ">
            <div className="flex gap-4 items-center">
                <img src={user.image.png} alt="user" className="w-12" />
                <span className="font-bold">{user.username}</span>
                {currentUser.username === user.username && (
                    <span className="bg-[#5457b6] text-white py-1 px-2 rounded-md">
                        YOU
                    </span>
                )}
                <span className="text-[#67727e]">
                    {isNaN(time) ? createdAt : timeAgo(time)}
                </span>
            </div>

            {user.username === currentUser.username ? (
                <div className="md:flex items-center gap-2 hidden">
                    <DeleteButton onClick={onDelete} />
                    <EditButton onEdit={onEdit} />
                </div>
            ) : (
                <ReplyButton
                    user={user}
                    onReply={onReply}
                    className="hidden md:flex items-center gap-2"
                />
            )}
        </div>
    );
};

export default User;

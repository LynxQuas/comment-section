import { useComment } from "../store/CommentContext";

/* eslint-disable react/prop-types */
const User = ({ user, createdAt }) => {
    const { currentUser } = useComment();

    return (
        <div className="flex gap-4 items-center">
            <img src={user.image.png} alt="user" className="w-12" />
            <span className="font-bold">{user.username}</span>
            {currentUser.username === user.username && (
                <span className="bg-[#5457b6] text-white py-1 px-2 rounded-md">
                    YOU
                </span>
            )}

            <span className="text-[#67727e]">{createdAt}</span>
        </div>
    );
};

export default User;

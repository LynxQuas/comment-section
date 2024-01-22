/* eslint-disable react/prop-types */
import replyIcon from "../assets/images/icon-reply.svg";
const ReplyButton = ({ onReply, user, className }) => {
    return (
        <div className={className} onClick={() => onReply(user.username)}>
            <img src={replyIcon} alt="reply icon" className="w-6" />
            <button className="font-bold">Reply</button>
        </div>
    );
};

export default ReplyButton;

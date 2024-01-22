/* eslint-disable react/prop-types */
import ReplyContainer from "../ui/ReplyContainer";

import Comment from "./Comment";

const Replies = ({ replies }) => {
    return (
        <ReplyContainer>
            {replies.map((reply) => (
                <Comment key={reply.id} comment={reply} />
            ))}
        </ReplyContainer>
    );
};

export default Replies;

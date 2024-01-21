/* eslint-disable react/prop-types */
import User from "./User";
import CommentContent from "./CommentContent";
import CommentAction from "./CommentAction";
import ReplyContainer from "../ui/ReplyContainer";
import { useState } from "react";
import CommentBox from "./CommentBox";

const Comment = ({ comment }) => {
    const [replyingOnComment, setReplyingOnComment] = useState(false);
    const [replyingOnReplies, setReplyingOnReplies] = useState(false);

    const replyOnCommentHandler = () => {
        setReplyingOnComment((prev) => !prev);
    };

    const replyOnRepliesHandler = (username) => {
        const replies = comment.replies.find(
            (reply) => reply?.user?.username === username
        );

        setReplyingOnReplies(replies);
    };

    return (
        <>
            <div className="bg-white p-5 flex flex-col gap-4 m-4 rounded-md">
                <User user={comment.user} createdAt={comment.createdAt} />
                <CommentContent content={comment.content} />
                <CommentAction
                    score={comment.score}
                    user={comment.user}
                    onReply={replyOnCommentHandler}
                />
            </div>
            {replyingOnComment && (
                <CommentBox replyTo={comment.user.username} />
            )}

            {comment.replies.length > 0 && (
                <ReplyContainer>
                    {comment.replies.map((reply) => (
                        <div key={reply.id}>
                            <div className="bg-white p-5 flex flex-col gap-4 m-4 rounded-md">
                                <User
                                    user={reply.user}
                                    createdAt={reply.createdAt}
                                />
                                <CommentContent content={reply.content} />
                                <CommentAction
                                    score={reply.score}
                                    user={reply.user}
                                    onReply={(username) =>
                                        replyOnRepliesHandler(username)
                                    }
                                />
                            </div>

                            {replyingOnReplies && (
                                <CommentBox replyTo={reply.user.username} />
                            )}
                        </div>
                    ))}
                </ReplyContainer>
            )}
        </>
    );
};

export default Comment;

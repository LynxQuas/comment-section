import { useComment } from "../store/CommentContext";
import Comment from "./Comment";

const Comments = () => {
    const { comments } = useComment();

    return (
        <div>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    replies={comment.replies}
                />
            ))}
        </div>
    );
};

export default Comments;

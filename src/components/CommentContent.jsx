/* eslint-disable react/prop-types */
const CommentContent = ({ content }) => {
    return (
        <div className="my-4 md:my-0">
            <p className="text-[#67727e]">{content}</p>
        </div>
    );
};

export default CommentContent;

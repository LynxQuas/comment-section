import CommentBox from "./components/CommentBox";
import Comment from "./components/Comments";
import CommentContextProvider from "./store/CommentContext";
const App = () => {
    return (
        <>
            <CommentContextProvider>
                <Comment />
                <CommentBox />
            </CommentContextProvider>
        </>
    );
};

export default App;

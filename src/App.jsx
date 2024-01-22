import CommentBox from "./components/CommentBox";
import Comments from "./components/Comments";
import CommentContextProvider from "./store/CommentContext";
const App = () => {
    return (
        <CommentContextProvider>
            <main className="md:w-2/3 md:mx-auto md:p-10">
                <Comments />
                <CommentBox />
            </main>
        </CommentContextProvider>
    );
};

export default App;

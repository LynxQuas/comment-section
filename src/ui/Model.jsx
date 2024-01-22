/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";

const Model = ({ onDelete, onCancel }) => {
    return createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/40">
            <div className="text-stone-600 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[90%] md:w-[25rem] flex flex-col px-4 py-8 gap-4 rounded-lg">
                <h1 className="font-bold text-xl">Delete comment</h1>
                <p>
                    Are you sure you want to delete this comment? This will
                    remove the comment and can't be undone.
                </p>
                <div className="flex gap-7 items-center">
                    <button
                        className="bg-[#324152] text-stone-300 py-2 px-4 font-semibold rounded-lg"
                        onClick={onCancel}
                    >
                        NO, CANCEL
                    </button>
                    <button
                        className="bg-[#ed6468] text-stone-100 py-2 px-4 font-semibold rounded-lg"
                        onClick={onDelete}
                    >
                        YES, DELETE
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
};
export default Model;

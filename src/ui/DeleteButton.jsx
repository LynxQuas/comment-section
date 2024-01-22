/* eslint-disable react/prop-types */
import deleteIcon from "../assets/images/icon-delete.svg";
const DeleteButton = ({ onClick }) => {
    return (
        <button
            className="text-[#ed6468] font-bold flex items-center gap-2"
            onClick={onClick}
        >
            <img src={deleteIcon} alt="delete icon" />
            <span> Delete</span>
        </button>
    );
};

export default DeleteButton;

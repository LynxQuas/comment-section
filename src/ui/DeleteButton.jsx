import deleteIcon from "../assets/images/icon-delete.svg";
const DeleteButton = () => {
    return (
        <button className="text-[#ed6468] font-bold flex items-center gap-2">
            <img src={deleteIcon} alt="delete icon" />
            <span> Delete</span>
        </button>
    );
};

export default DeleteButton;

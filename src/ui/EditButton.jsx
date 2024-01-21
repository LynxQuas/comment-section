import editIcon from "../assets/images/icon-edit.svg";
const EditButton = () => {
    return (
        <div className="flex items-center gap-2">
            <button className="text-[#5457b6] font-bold flex items-center gap-2">
                <img src={editIcon} alt="delete icon" />
                <span> Edit</span>
            </button>
        </div>
    );
};

export default EditButton;

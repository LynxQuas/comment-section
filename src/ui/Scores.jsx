/* eslint-disable react/prop-types */
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

const Scores = ({ score }) => {
    return (
        <div className="flex items-center gap-3 p-2 bg-[#eaecf1] rounded-md">
            <img src={plus} alt="plus" />
            <span className="font-bold">{score}</span>
            <img src={minus} alt="minus" />
        </div>
    );
};

export default Scores;

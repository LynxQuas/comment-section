/* eslint-disable react/prop-types */
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

const Scores = ({ score, onAddScore, onMinusScore, className }) => {
    return (
        <div className={className}>
            <img
                src={plus}
                alt="plus"
                onClick={onAddScore}
                className="cursor-pointer"
            />
            <span className="font-bold">{score}</span>
            <img
                src={minus}
                alt="minus"
                onClick={onMinusScore}
                className="cursor-pointer"
            />
        </div>
    );
};

export default Scores;

import "./Rating.css";
import PropTypes from "prop-types";
import star from "/icon-star.svg";

function Rating({ selectedRating, handleRatingClick, handleSubmit }) {
    return (
        <div className="rating">
            <div
                className="rating__star"
                style={{ backgroundImage: `url(${star})` }}
            />
            <h1 className="rating__title">How did we do?</h1>
            <p className="rating__description">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>
            <div className="rating__notes">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <div
                        key={rating}
                        className={`rating__note ${
                            selectedRating === rating
                                ? "rating__note--selected"
                                : ""
                        }`}
                        onClick={() => handleRatingClick(rating)}
                    >
                        {rating}
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} className="rating__button">
                Submit
            </button>
        </div>
    );
}

Rating.propTypes = {
    selectedRating: PropTypes.number.isRequired,
    handleRatingClick: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Rating;

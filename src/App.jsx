import { useState } from "react";
import "./App.css";
import Note from "./components/Note";
import Rating from "./components/Rating";

function App() {
    const [selectedRating, setSelectedRating] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleRatingClick = (rating) => {
        if (selectedRating === rating) {
            setSelectedRating(null);
        } else {
            setSelectedRating(rating);
        }
    };

    const handleSubmit = () => {
        if (selectedRating !== null) {
            setIsSubmitted(true);
        }
    };

    return (
        <>
            <div className="container">
                {isSubmitted ? (
                    <Note selectedRating={selectedRating} />
                ) : (
                    <Rating
                        selectedRating={selectedRating}
                        handleRatingClick={handleRatingClick}
                        handleSubmit={handleSubmit}
                    />
                )}
            </div>
        </>
    );
}

export default App;

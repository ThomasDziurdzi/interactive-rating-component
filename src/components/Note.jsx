import "./Note.css";
import illustration from "/illustration-thank-you.svg"

function Note({selectedRating}) {
    return (
       <div className="note">
        <img src={illustration} alt="" />
        <div className="note__choice">
            <p>You selected {selectedRating} out of 5</p>
        </div>
        <h1>Thank you!</h1>
        <p className="note__thanks">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
       </div>
    );
}

export default Note;

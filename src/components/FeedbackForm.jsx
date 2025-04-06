import RatingSelect from "./RatingSelect";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function FeedbackForm() {
  const { addFeedback } = useContext(UserContext);
  const { rating } = useContext(UserContext);
  const [review, setReview] = useState("");

  const handleInputChange = (e) => {
    setReview(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(review.trim().replace(/\s+/g, "").length < 10) {
      alert('You need at least 10 characters!');
    } else {
      addFeedback(rating, review);
      setReview("");
    }
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <RatingSelect />
        <div className="feedbackText">
            <input type="text" id="userReview" value={review} onChange={handleInputChange}/>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FeedbackForm

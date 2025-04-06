import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(UserContext);
  
  return (
    <div className="feedback-container removable" data-id={item.id}>
      <div className="feedback-rating">{item.rating}</div>
      <p>{item.review}</p>
      <button onClick={deleteFeedback}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  )
}

export default FeedbackItem

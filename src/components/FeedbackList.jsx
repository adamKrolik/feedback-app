import UserContext from "../context/UserContext";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const { feedback } = useContext(UserContext);

  return (
    <div>
      {
        feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default FeedbackList

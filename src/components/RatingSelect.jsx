import { useContext } from "react";
import UserContext from "../context/UserContext";

function RatingSelect() {
  const { rating, setRating } = useContext(UserContext);

  const handleChange = (e) => {
    setRating(+e.currentTarget.value);
  }
  
  return (        

      <ul className="rating">
        {
          Array.from({ length: 10 }, (_,i) => (
          <li key={i+1}>
            <input
              type="radio"
              name="rating" 
              className="rating-num" 
              value={i+1}
              id={`num${i+1}`}
              checked={rating === i+1}
              onChange={handleChange}
            />
            <label htmlFor={`num${i+1}`}>{i+1}</label>
          </li>
          ))
        }
      </ul>     
    
  )
}

export default RatingSelect

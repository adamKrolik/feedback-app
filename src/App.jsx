import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import UserContext from "./context/UserContext";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [rating, setRating] = useState(10);
  const [feedback, setFeedback] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedFeedback = localStorage.getItem('feedbacks');
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      
      localStorage.setItem('feedbacks', JSON.stringify(feedback));
    }
  }, [feedback, isInitialized]);

  const addFeedback = (newRating, newReview) => {
    const newFeedback = {
      id: uuidv4(),
      rating: newRating,
      review: newReview,
    };

    setFeedback([newFeedback, ...feedback]);
  }

  const deleteFeedback = (e) => {
    if(e.currentTarget.parentElement.classList.contains('removable')) {
      const feedbackId = e.currentTarget.parentElement.getAttribute('data-id');

      setFeedback((feedback) => feedback.filter((item) => item.id !== feedbackId))
    }
  }
  
  return (
    <div className="main">
      <UserContext.Provider value={{ rating, setRating, addFeedback, feedback, deleteFeedback }}>
        <Header />
        <FeedbackForm />
        <FeedbackList />
      </UserContext.Provider>
    </div>
  )
}

export default App

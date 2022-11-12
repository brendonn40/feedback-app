import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData.js";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
    </>
  );
};

export default App;

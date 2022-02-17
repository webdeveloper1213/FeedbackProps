import "./index.css";
import {useState} from 'react';
import FeedbackList from './FeedbackList';
import FeedbackForm from './FeedbackForm';
const FeedbackData = [
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
]
 function App() {
  const [feedback , setFeedback] = useState(FeedbackData);
  const [feedbackEdit , setFeedbackEdit] = useState({
    item : {},
    edit : false
  })

  const addItemHandler = (newFeedback) => {
    setFeedback((prevFeed) => {
      return [newFeedback , ...prevFeed];
    });

    //Update logic

    const updateFeedback = (id , updateItem) => {
setFeedback(feedback.map((item) => 
  (item.id === id ? [...updateItem , id] : item)
))
    }
  }

  //delete a feedback

  const deleteFeedbackHandler = (id) => {
setFeedback(feedback.filter((feed) => {
  return feed.id !== id
}))
  }

  //edit feedback

  const editFeedback = (item) => {
   console.log(item);
    setFeedbackEdit({
      item,
      edit : true
  })

  }
  return (
    <>
    <div className="App">
      <FeedbackForm onSubmitHandler = {addItemHandler} />
     <FeedbackList feedback = {feedback} deleteFeedbackItem = {deleteFeedbackHandler} editFeedbackItem = {editFeedback} />
    </div>
    </>
  );
}
export default App;
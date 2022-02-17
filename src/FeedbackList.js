import FeedbackItem from "./FeedbackItem";
const FeedbackList = ({ feedback , deleteFeedbackItem , editFeedbackItem }) => {
  return (
    <ul className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} deleteFeedbackItem = {deleteFeedbackItem} editFeedbackItem = {editFeedbackItem} />
      ))}
    </ul>
  );
};
export default FeedbackList;

import Card from "./Card";
import {FaTimes ,FaEdit} from 'react-icons/fa';
const FeedbackItem = ({ item, deleteFeedbackItem, editFeedbackItem }) => {

    const deleteHandler = () => {
        deleteFeedbackItem(item.id);
    }
    const editHandler = () => {
        editFeedbackItem(item)
    }
  return (
    <Card>
      <li className="feedback-list">
        <div className="rating">{item.rating}</div>
        <div className="text">{item.text} </div>
       
        <button className="close">
    <FaTimes color='purple' onClick = {deleteHandler}/>
</button>
<button className="edit">
    <FaEdit color="purple" onClick={editHandler} />
</button>
    

      </li>
    </Card>
  );
};
export default FeedbackItem;

import Card from "./Card";
import RatingSelect from "./RatingSelect";
import {useState} from 'react';
import Button from './Button';

const FeebackForm = ({onSubmitHandler}) => {

  const [rating , setRating] = useState('');
  const [text , setText] = useState('');
  const [ btnDisabled , setButtonDisabled] = useState(true);
const[message , setMessage] = useState('');

// select the rating
  const selectRatingHandler = (rating) => {
    console.log(rating);
setRating(rating);
  }

// when something is entered into the text box

const inputChangeHandler = ({target : {value}}) => {
    console.log(value);
    if(value === '') {
        setButtonDisabled(true);
        setMessage(null);
    }else if (/\d/.test(value)) { //check if numbers in input
    setMessage('Text must not include numbers!');
    setButtonDisabled(true);
    }else if(value.trim().length < 10) { // text < 10 characters
    setMessage('Text must be at least 10 characters long!');
    setButtonDisabled(true);
    }else {
        setMessage(null);
        setButtonDisabled(false);
    }
    setText(value);    
        }

  const submitHandler = (e) => {
    e.preventDefault();

    const newFeedback = {
      text,
      rating,
      id: Math.random().toString()
    }
    console.log(newFeedback);
    onSubmitHandler(newFeedback);
    setText('');
  }
  return (
    <Card>
      <form className='feedback-form'onSubmit = {submitHandler}>
      <h3>How would you rate your service with us ? </h3>
      <div className="ratingSelect">
        <RatingSelect onSelect = {selectRatingHandler} selected = {rating}/>
      </div>
      <div className='input-group'>
        <input type = "text" placeholder = 'Write a review' onChange = {inputChangeHandler} value = {text} />
     
        <Button type = "submit" isDisabled={btnDisabled} >Send</Button> 
        </div>
        {message && <p className="message">{message}</p>}
        </form>
    
    </Card>
  );
};
export default FeebackForm;

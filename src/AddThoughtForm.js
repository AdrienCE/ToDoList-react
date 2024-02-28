import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {

const [text, setText] = useState('');

const handleTextChange = (event) => {
  setText(event.target.value);
};

const handleSubmit = (event) => {
  if (text.length) {
  event.preventDefault();
  const thought = {
    id: generateId(),
    text: text,
    expiresAt: getNewExpirationTime()
  };
  props.addThought(thought);
  setText('');
  };
};

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        onChange = {handleTextChange}
        value = {text}
        type="text"
        aria-label="Write your task"
        placeholder="Write your task"
      />
      <input type="submit" value="Add" />
    </form>
  );
}

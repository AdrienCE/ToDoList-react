import React, { useState, useEffect } from 'react';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import './App.css';

export default function App() {
  const [thoughts, setThoughts] = useState([]);

  const addThought = (thought) => {
    setThoughts((prevThoughts) => [thought, ...prevThoughts]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((prevThoughts) =>
      prevThoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };

  useEffect(() => {
    const storedThoughts = JSON.parse(localStorage.getItem('thoughts'));
    if (storedThoughts) {
      setThoughts(storedThoughts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('thoughts', JSON.stringify(thoughts));
  }, [thoughts]);

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

import React from "react";

const Add = function ({postWord, getWord}) {

  const handleClick = function() {
    let word = document.getElementById('add-word').value;
    let definition = document.getElementById('add-def').value;
    document.getElementById('add-word').value = '';
    document.getElementById('add-def').value = '';

    postWord(word, definition)
    .then(() => {
      getWord();
    })
  };

  return (
    <div>
      <h2>Add word</h2>
      <input type='text' id='add-word' placeholder='Add word'></input>
      <input type='text' id='add-def' placeholder='Definition'></input>
      <button id='click-button' onClick={handleClick}>Click meh</button>
    </div>
  )
}

export default Add;
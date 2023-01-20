import React from "react"

const List = function ({words, delWord, getWord}) {



  const handleClick = function (e) {
    delWord(e.target.value)
    .then(() => {
      getWord();
    })
  }

  return (
    words.map((x) => (
      <div>
        <li>{x.word}</li>
          <ol>
            <li>{x.definition}</li>
          </ol>
        <button id='delete-button' value={x._id} onClick={handleClick}>delete</button>
        <button id='edit-button'>edit</button>
      </div>
      )
    )
  )
}

export default List;
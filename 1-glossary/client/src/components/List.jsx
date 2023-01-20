import React from "react"

const List = function ({words}) {

  return (
    words.map((x) => (
      <div>
        <p>word: {x.word} definition:{x.definition}</p>
        <button id='delete-button'>delete</button>
        <button id='edit-button'>edit</button>
      </div>
      )
    )
  )
}

export default List;
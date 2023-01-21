import React,{useState} from 'react';

const ListChild = function ({x, delWord, getWord, updateWord}) {

  const [showInput, setShowInput] = useState(false);
  const [editInput, setEditInput] = useState();

  const handleDelete = function (e) {
    delWord(e.target.value)
    .then(() => {
      getWord();
    })
  }

  const trackInput = function(e) {
    setEditInput(e.target.value);
  }

  const handleEdit = function (id) {
    console.log('editInput', editInput)
    updateWord(id, editInput)
    .then(setShowInput(!showInput))
    .then(getWord());

  }

  const handleShowInput = function () {
    setShowInput(!showInput);
  }

  return (
    <div>
      <li><b>{x.word}</b></li>
          <ol>
            {showInput ? <input className='edit-field'  onChange={(e) => trackInput(e)} defaultValue={x.definition}></input> : <li>{x.definition}</li>}
          </ol>
        <button id='delete-button' value={x._id} onClick={handleDelete}>delete</button>
        {showInput ? <button id='save-button' onClick={() => {handleShowInput()}} onClick={() => {handleEdit(x._id)}}>save</button> : <button id='edit-button' onClick={() => {handleShowInput()}}>edit</button>}
        <br></br>
    </div>
  )

}


export default ListChild;
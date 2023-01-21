import React,{useState} from "react";
import ListChild from './ListChild.jsx';

const List = function ({words, delWord, search, getWord, updateWord}) {



  return (
    words.filter((x) => (x.word.toLowerCase().includes(search.toLowerCase())))
    .reverse()
    .map((x) => (
        <ListChild x={x} delWord={delWord} getWord={getWord} updateWord={updateWord}/>
      )
    )
  )
}

export default List;
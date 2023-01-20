import React, {useState, useEffect} from "react";
import List from "./List.jsx";
import Add from "./Add.jsx";
const axios = require('axios');

const App = function() {

  const [words, setWords] = useState([]);

  useEffect(() => {
    getWord();
  }, [])

  const postWord = function(word, definition) {
    return axios.post('http://localhost:3003/words', {
      word: word,
      definition: definition
    })
  }

  const getWord = function() {
  return axios.get('http://localhost:3003/words')
    .then((res) => {
      setWords(res.data);
    })
  }

  const delWord = function(id) {
    return axios.delete('http://localhost:3003/words/del', {
      data: {
        '_id': id
      }
    })
  }

  return (
    <div>
      <Add postWord={postWord} getWord={getWord}/>
      <ul>
        <List words={words} delWord={delWord} getWord={getWord}/>
      </ul>
    </div>
  )
}



export default App;
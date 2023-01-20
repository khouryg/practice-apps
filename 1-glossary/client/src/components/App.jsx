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
    return axios.post('http://localhost:3001/words', {
      word: word,
      definition: definition
    })
  }

  const getWord = function() {
  return axios.get('http://localhost:3001/words')
    .then((res) => {
      setWords(res.data);
    })
  }

  const delWord = function() {
    return axios.post('http://localhost:3001/words', {})
  }

  return (
    <div>
      <Add postWord={postWord} getWord={getWord}/>
      <List words={words}/>
    </div>
  )
}



export default App;
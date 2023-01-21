import React, {useState, useEffect} from "react";
import List from "./List.jsx";
import Add from "./Add.jsx";
import Search from "./Search.jsx";
const axios = require('axios');

const App = function() {

  const [words, setWords] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getWord();
  }, [])

  const postWord = function(word, definition) {
    return axios.post('/words', {
      word: word,
      definition: definition
    }).then(() => {
      getWord();
    })
  }

  const getWord = function() {
    return axios.get('/words')
      .then((res) => {
        setWords(res.data);
      })
  }

  const delWord = function(id) {
    return axios.delete('/words', {
      data: {
        '_id': id
      }
    })
  }

  const updateWord = function(id, definition) {
    return axios.patch('/words', {
        '_id': id,
        'definition': definition
      }
    ).then(() => {
      getWord();
    })
  }

  return (
    <div>
      <h1>Glossary App</h1>
      <Search setSearch={setSearch}/>
      <br></br>
      <Add postWord={postWord} getWord={getWord}/>
      <br></br>
      <ul>
        <List words={words} delWord={delWord} search={search} getWord={getWord} updateWord={updateWord}/>
      </ul>
    </div>
  )
}



export default App;
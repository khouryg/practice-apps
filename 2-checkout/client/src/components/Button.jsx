import React from 'react';
import axios from 'axios';

const Button = function ({showButton,setShowButton, form, setForm, formData, setFormData}) {

  console.log(JSON.stringify(document.cookie, undefined, "\t"))
  const handleCheckoutClick = function () {

    setShowButton({"checkout": false, "back": true, "next": true});
    setForm(1);
  }

  const submitForm = function () {
    console.log(formData);
    axios.post('http://localhost:3000/', formData)
    .then((res) => {
      setForm(0);
      setFormData({"session_id": JSON.stringify(document.cookie, undefined, "\t")});
      setShowButton({"checkout": true, "back": false, "next": false})
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      {showButton.checkout && <button onClick={handleCheckoutClick}>checkout</button>}
      {showButton.back && form > 1 && <button onClick={() => {setForm(form - 1)}}>back</button>}
      {showButton.next && form < 3 && <button onClick={() => {setForm(form + 1)}}>next</button>}
      {form === 3 && <button onClick={submitForm}>Submit</button>}
    </div>
  )
}

export default Button;
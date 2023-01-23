import React, {useState} from 'react';
import Button from './Button.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import axios from 'axios';

const App = function () {

  const [form, setForm] = useState(0);
  const [formData, setFormData] = useState({"session_id": JSON.stringify(document.cookie, undefined, "\t")});
  const [showButton, setShowButton] = useState({'checkout': true, 'back': false, 'next': false});


  let currForm;
  if(form === 1) {
    currForm = (<Form1 setForm={setForm} formData={formData} setFormData={setFormData}/>)
  } else if (form === 2) {
    currForm = (<Form2 setForm={setForm} formData={formData} setFormData={setFormData}/>)
  } else if (form === 3) {
    currForm = (<Form3 setForm={setForm} formData={formData} setFormData={setFormData}/>)
  }

  return (

    <div>
      {currForm}
      <Button form={form} setForm={setForm} showButton={showButton} setShowButton={setShowButton} setFormData={setFormData} formData={formData}/>
    </div>
  )
}

export default App;
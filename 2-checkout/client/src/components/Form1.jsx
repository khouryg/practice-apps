import React from 'react';

const Form1 = function ({setForm, formData, setFormData}) {

  const handleNameChange = function (e) {
    setFormData({...formData, "name": e.target.value})
  }
  const handleEmailChange = function (e) {
    setFormData({...formData, "email": e.target.value})
  }
  const handlePasswordChange = function (e) {
    setFormData({...formData, "password": e.target.value})
  }

  return (
    <div>
      <form id='form-1'>
        <input type="text" placeholder="Name" value={formData.name} onChange={(e)=>{handleNameChange(e)}}></input>
        <input type="text" placeholder="Email" value={formData.email} onChange={(e)=>{handleEmailChange(e)}}></input>
        <input type="text" placeholder="Password" value={formData.password} onChange={(e)=>{handlePasswordChange(e)}}></input>
      </form>
    </div>
  )
}


export default Form1;
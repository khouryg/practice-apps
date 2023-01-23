import React from 'react';

const Form3  = function ({setForm, formData, setFormData}) {

  const handleCcChange = function (e) {
    setFormData({...formData, "cc_num": e.target.value})
  }
  const handleExpChange = function (e) {
    setFormData({...formData, "cc_exp": e.target.value})
  }
  const handleCvvChange = function (e) {
    setFormData({...formData, "zip": e.target.value})
  }
  const handleZipChange = function (e) {
    setFormData({...formData, "cvv": e.target.value})
  }

  return (
    <div>
      <form id='form-3'>
        <input type="text" placeholder="Credit Card Number" value={formData.cc_num} onChange={(e)=>{handleCcChange(e)}}></input>
        <input type="text" placeholder="Exp MM/YY" value={formData.cc_exp} onChange={(e)=>{handleExpChange(e)}}></input>
        <input type="text" placeholder="CVV" value={formData.zip} onChange={(e)=>{handleCvvChange(e)}}></input>
        <input type="text" placeholder="ZIP" value={formData.cvv} onChange={(e)=>{handleZipChange(e)}}></input>
      </form>
    </div>
  )
}


export default Form3;
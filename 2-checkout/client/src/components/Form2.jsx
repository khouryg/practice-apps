import React from 'react';

const Form2 = function ({setForm, setFormData, formData}) {

  const handleAddressChange = function (e) {
    setFormData({...formData, "address": e.target.value})
  }
  const handlePhoneChange = function (e) {
    setFormData({...formData, "phone": e.target.value})
  }

  return (
    <div>
      <form id='form-2'>
        <input type="text" placeholder="Address" value={formData.address} onChange={(e)=>{handleAddressChange(e)}}></input>
        <input type="text" placeholder="Phone Number" value={formData.phone} onChange={(e)=>{handlePhoneChange(e)}}></input>
      </form>
    </div>
  )
}


export default Form2;
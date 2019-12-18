import React, { useState } from 'react'

const MemberForm = props => {
  const [memb, setMemb] = useState({ name: "", email: "", role: "" });

const handleChanges = e => {
  setMemb({...memb, [e.target.name]: e.target.value})
}

const submitForm = e => {
  e.preventDefault();
  props.addNewMember(memb);
  setMemb({ name: "", email: "", role: "" })
}

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input id='name 'type="text" name='name' value={memb.name} onChange={handleChanges}/>

      <label htmlFor="email">Email</label>
      <input id='email' type="email" name='email' value={memb.email} onChange={handleChanges}/>

      <label htmlFor="role">What is your role?</label>
      <select id='role' name="role" id="" value={memb.role} onChange={handleChanges}>
        <option value="Frontend">Front-End Engineer</option>
        <option value="Backend">Back-End Engineer</option>
        <option default value="Janitor">Janitor</option>
        <option value="CEO">CEO</option>
      </select>
      
      <button type="submit">Add Member</button>

    </form>
  )
}

export default MemberForm
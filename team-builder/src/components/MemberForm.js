import React, { useState } from 'react'

const MemberForm = props => {
  // memb = { memb } submitForm = { submitForm } handleChanges = { handleChanges }

  return (
    <form onSubmit={props.submitForm}>
      <label htmlFor="name">Name</label>
      <input id='name 'type="text" name='name' value={props.memb.name} onChange={props.handleChanges}/>

      <label htmlFor="email">Email</label>
      <input id='email' type="email" name='email' value={props.memb.email} onChange={props.handleChanges}/>

      <label htmlFor="role">What is your role?</label>
      <select id='role' name="role" id="" value={props.memb.role} onChange={props.handleChanges}>
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
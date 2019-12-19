import React from "react";

const Member = props => {
  return (
    <>
      {props.member.map(mem => (
        <div key={mem.id}>
          <h2>{mem.name}</h2>
          <p>{mem.email}</p>
          <p>{mem.role}</p>
          <button className='edit-btn' aria-label='edit button' onClick={() => props.handleEdit(mem.id)}>Edit</button>
        </div>
      ))}
    </>
  );
};

export default Member;



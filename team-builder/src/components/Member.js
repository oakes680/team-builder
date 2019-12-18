import React from "react";

const Member = props => {
  return (
    <>
      {props.member.map(mem => (
        <div key={mem.id}>
          <h2>{mem.name}</h2>
          <p>{mem.email}</p>
          <p>{mem.role}</p>
        </div>
      ))}
    </>
  );
};

export default Member;
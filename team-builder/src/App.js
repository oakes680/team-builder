import React, {useState} from 'react';
import './App.css';
import MemberForm from './components/MemberForm'
import Member from './components/Member'


function App() {

  const [member, setMember] = useState([{
    id: 1,
    name: '',
    email: '',
    role: ''
  }])

  const addNewMember = x => {
    const newMember = {
      id: Date.now(),
      name:  x.name,
      email: x.email,
      role: x.role
    }
    setMember([...member, newMember]);
  }

  

  return (
    <div> 
      <MemberForm addNewMember={addNewMember}/>
      <Member member={member}/>
    </div>
  );
}

export default App;

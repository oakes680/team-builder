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

  // edit
  const [edit, setEdit] = useState(false)
  //console.log(edit)
  // edit item
  const [id, setId] = useState(0)
  //console.log(id)

  const addNewMember = x => {
    const newMember = {
      id: Date.now(),
      name:  x.name,
      email: x.email,
      role: x.role
    }
    setMember([...member, newMember]);
  }


  const [memb, setMemb] = useState({ name: "", email: "", role: "" });

  const handleChanges = e => {
    setMemb({ ...memb, [e.target.name]: e.target.value })
  }

  // const submitForm = e => {
  //   e.preventDefault();
  //   addNewMember(memb);
  //   setMemb({ name: "", email: "", role: "" })
  // }


  const submitForm = e => {
    e.preventDefault();
  if (edit === true) {
    let tempMemb = member.map(item => {
      return item.id === id ? { ...item, ...memb } : item
    });
    setMember(tempMemb)
    setEdit(false)


  } else {
    addNewMember(memb);
  }

  setMemb('')
  }


  //handle edit
  //handle edit
  const handleEdit = (id) => {
    let dog = member.find(item => item.id === id)
    setMemb(dog)
    setEdit(true)
    setId(id)
  }
  

  return (
    <div> 
      <MemberForm addNewMember={addNewMember} memb={memb} submitForm={submitForm} handleChanges={handleChanges}/>
      <Member member={member} handleEdit={handleEdit} />
    </div>
  );
}

export default App;

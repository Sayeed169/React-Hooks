import React, { useState } from 'react';
import UserTable from './tables/UserTables';
import AddUserForm from './tables/AddUserForm';
import EditUserForm from './forms/EditUserForm';

// import logo from './logo.svg';
// import './App.css';

const App = () => {
  const usersData = [
    {id:1, name:"One", username:"one1"},
    {id:2, name:"Two", username:"two2"},
    {id:3, name:"Three", username:"three3"},
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  const updateUser = (id, updatedUser) =>{
    setEditing(false);
    setUsers(users.map(user => (user.id == id ? updatedUser : user)));
  }

  const editRow = (user) =>{
    setEditing(true);
    setCurrentUser(user)
  }

  const initialFormState = {id:'', name:'', username:''}
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  return (
    <div className="container">
      <h1>App with hooks</h1>
      <div className="flex-row">
        {editing ? (
          <div className="flex-large">
            <h2>Update User</h2>
            <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
          </div>
        ) : (
          <div className="flex-large">
            <h2>Add User</h2>
            <AddUserForm addUser={addUser}/>
          </div>
        )}
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editRow}/>
        </div>
      </div>
    </div>
  );

}

export default App;

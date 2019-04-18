import React, { useState } from "react";

const AddUserForm = (props) => {
    const initialFormState = {id:null, name:'', username:''}
    const [user, setUser] = useState(initialFormState);

    const [message, setMsg] = useState({errorMsg:''});
    
    const handleInputChanges = event =>{
        const {name, value} = event.target
        setUser({...user, [name]:value})
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        if(user.username && user.name){
            props.addUser(user);
            setMsg({errorMsg:''})
            setUser(initialFormState);
        }else if(user.name){
            setMsg({errorMsg:'Username cannot be empty'});
        }else if(user.username){
            setMsg({errorMsg:'Name cannot be empty'});
        }else{
            setMsg({errorMsg:'Name or Username cannot be empty'});
        }
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={user.name} onChange={handleInputChanges}/>
                <label>Username</label>
                <input type="text" name="username" value={user.username} onChange={handleInputChanges} />
                <button>Add new user</button>
            </form>
            <label style={{color:'red'}}>{message.errorMsg}</label>
        </div>
    );
}

export default AddUserForm
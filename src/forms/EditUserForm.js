import React, {useState,useEffect} from 'react';
import { userInfo } from 'os';

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser);

    const handleChange = (event) => {
        const {name, value} = event.target
        setUser({...user,[name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
    }

    useEffect(() => {
        setUser(props.currentUser)
    });

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} />
                <label>Username</label>
                <input type="text" name="username" value={user.username} onChange={handleChange} />
                <button>Update User</button>
            </form>
        </div>
    );
}

export default EditUserForm 
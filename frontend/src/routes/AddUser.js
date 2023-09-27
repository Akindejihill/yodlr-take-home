import {useNavigate, Link} from "react-router-dom"
import {useState} from 'react';
import { Api } from '../api';

function AddUser() {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email : "",
        firstName : "",
        lastName : "",
        state : ""
    });


    function handleChange(evt){
        const {name , value} = evt.target;
        setFormData(data => ({
            ...data, //include all object properties
            [name]: value //overide the target that was event triggered
        }));
    }

    async function handleSubmit(evt){
        evt.preventDefault();        
        const [user, error] = await Api.register(formData.email, formData.firstName, formData.lastName);
        if (!error) navigate(`/edituser/${user.id}`);
        else alert(error);
    }

    return (

        <div class="container mt-5 d-flex flex-column align-items-center justify-content-center">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    
    );
}

export default AddUser;

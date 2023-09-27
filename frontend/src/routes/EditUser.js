import {useNavigate, Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import { Api } from '../api';

function EditUser() {

    const navigate = useNavigate();
    const { userid } = useParams();

    const [formData, setFormData] = useState({
        id : "",
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
        const [user, error] = await Api.editUser(formData.id, formData.email, formData.firstName, formData.lastName, formData.state);
        if (!error) alert("updated!");
        else alert(error);
    }

    useEffect( () => {

        async function getData(){
            const [user, error] = await Api.getUser(userid);
            if (error) alert(error);
            else{
                setFormData({id : user.id, email : user.email, firstName : user.firstName, lastName : user.lastName});
            }
        }

        getData();

    }, []);



    return (

        <div class="container mt-5 d-flex flex-column align-items-center justify-content-center">
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <input type="hidden" class="form-control" id="id" name="id" value={formData.id} onChange={handleChange}/>
                </div>
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
                <div class="form-group">
                    <label for="state">State</label>
                    <select class="form-control" id="state">
                    <option value="active" selected>Active</option>
                    <option value="pending">Pending</option>
                    </select>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    
    );
}

export default EditUser;

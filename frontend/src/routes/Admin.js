import {useNavigate, Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import { Api } from '../api';

function Admin() {

    const navigate = useNavigate();
    const { userid } = useParams();

    const [userData, setUserData] = useState([]);


    useEffect( () => {

        async function getData(){
            const [users, error] = await Api.listUsers();
            if (error) alert(error);
            else{
                console.log("Got the data!");
                console.log(users);                
                setUserData(users);
            }
        }

        getData();

    }, []);

    if (userData.length === 0) {
        return (
            <div class="container mt-5 d-flex flex-column align-items-center justify-content-center">
            <h1>Select a user to edit</h1>
            <p>Loading...</p>
        </div>
        )
      }
    
    console.log("user data");  
    console.log(userData);  

    return (

        <div class="container mt-5 d-flex flex-column align-items-center justify-content-center">
            <h1>Select a user to edit</h1>
            {
                
                userData.map( user => {
                    return <p><Link to={`/edituser/${user.id}`}><button>{user.firstName} {user.lastName}</button></Link></p>
                })
                
            }

        </div>
    
    );
}

export default Admin;

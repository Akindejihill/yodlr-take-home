import {useNavigate, Link} from "react-router-dom"

function Home() {

    const navigate = useNavigate();

    return (
        <section class="d-flex flex-column align-items-center justify-content-center">
        <h1>Yodlr Design Challenge</h1>
        <p>
            <Link to="/adduser" ><span class="btn btn-primary">Registration Page</span></Link><br/>
            <Link to="/admin" ><span class="btn btn-primary">Admin Page</span></Link>
        </p>
        </section>
    
    );
}

export default Home;

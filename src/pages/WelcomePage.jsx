import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function WelcomePage(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const loggedUser = JSON.parse(sessionStorage.getItem("currentUser"));
        if(!loggedUser){
            navigate("/");
        }
        else{
            setUser(loggedUser);
        }
    }, []);
    const logout =() => {
        sessionStorage.removeItem("currentUser");
        navigate("/");
    };

    return user ? (
        <div>
            <h2>Welcome ,{user.name}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    ) : null;
}

export default WelcomePage
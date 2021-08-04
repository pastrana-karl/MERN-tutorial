import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './TopBar.css'

export default function TopBar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className = "Top">
            <div className="topLeft"> <i className="topIcon fab fa-facebook-square"></i> <i className="topIcon fab fa-twitter-square"></i> <i className="topIcon fab fa-pinterest-square"></i> <i className="topIcon fab fa-instagram-square"></i> </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to = "/" className = "link" >HOME</Link></li>
                    <li className="topListItem"><Link to = "/" className = "link" >ABOUT</Link></li>
                    <li className="topListItem"><Link to = "/" className = "link" >CONTACT</Link></li>
                    <li className="topListItem"><Link to = "/write" className = "link" >WRITE</Link></li>
                    <li className="topListItem" onClick = {handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? <img className = "topImg" src = { user.profilePic } alt = ""></img>
                : (
                    <ul className = "topList" >
                        <li className = "topListItem" ><Link to = "/Login" className = "link" >LOGIN</Link></li>
                        <li className = "topListItem" ><Link to = "/Register" className = "link" >REGISTER</Link></li>
                    </ul>
                )}
                <i className ="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

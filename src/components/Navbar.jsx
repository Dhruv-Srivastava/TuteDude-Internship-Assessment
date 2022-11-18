// This component represents the navbar of our application

import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src="../public/logo.png" alt="TechDude Logo" />
            </div>
            <div className="link-container">
                <Link to="/"><h2>My Assignment</h2></Link>
                <Link to="/"><h2>Chat with Mentor</h2></Link>
                <div className="profile-link-container">
                    <img src="../public/profile.svg" alt="" className="profile-pic"/>
                    <h2>ProfileName</h2>
                    <img src="../public/down-arrow.svg" alt="" />
                </div>
            </div>
        </nav>
    )
}
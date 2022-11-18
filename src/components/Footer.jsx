import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <section id="footer">
            <Link to="/friends-referred"><h3>Friends Who Enrolled</h3></Link>
            <h3>Terms & Conditions</h3>
        </section>
    )
}
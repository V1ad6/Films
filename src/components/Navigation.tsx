import { FC } from "react";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
    return (  
        <nav>
            <ul>
                <li><Link to='/' className="routingLink">Main</Link></li>
                <li>Log in</li>
                <li><Link to='/about' className="routingLink">About us</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navigation;
import { FC } from "react";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
    return (  
        <nav>
            <ul>
                <li><Link to='/' className="tomain">Main</Link></li>
                <li>Log in</li>
                <li>About us</li>
            </ul>
        </nav>
    );
}
 
export default Navigation;
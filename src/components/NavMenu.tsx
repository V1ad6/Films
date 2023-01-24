import { FC } from 'react';
import Navigation from "./Navigation";
import '../scss/NavMenu.scss';

interface NavMenuProps {
    toggleMenu: () => void;
    opened: boolean;
}

const NavMenu: FC<NavMenuProps> = ({ toggleMenu, opened }) => {
    return (  
        <div className={opened ? 'overlay overlay_visible' : 'overlay'}>
            <div className={opened ? 'menu menu_visible' : 'menu'}>
                <div className='menu__body'>
                    <h1>Navigation</h1>
                    <Navigation/>
                </div>   
                <button className="menu__close" onClick={toggleMenu}>
                    <img src="/img/Arrow.png" alt="close"/> 
                </button>
            </div>
        </div>
    );
}
 
export default NavMenu;
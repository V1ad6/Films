import { FC, LegacyRef } from 'react';
import Search from './Search';
import '../scss/Header.scss'
import Navigation from './Navigation';

interface HeaderProps {
    toggleMenu: () => void;
    references: {
        head: LegacyRef<HTMLDivElement> | undefined,
        box: LegacyRef<HTMLDivElement> | undefined
    };
}

const Header: FC<HeaderProps> = ({ toggleMenu, references }) => {
    return (  
        <>
            <div className="hat" ref={references.head}>
                <div className="container">
                    <header className='header'>
                        <h1>Logo</h1>
                        <Search/>
                        <Navigation/>
                        <img src="/img/pfp.png" alt="pfp"/>
                        <button className='header_open-menu' onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </header>    
                </div>
            </div>
            <div className="box" ref={references.box}></div>
        </>
    );
}

export default Header;
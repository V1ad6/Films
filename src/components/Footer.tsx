import '../scss/Footer.scss';
import FooterColumn from './FooterColumn';
import LeafButton from './LeafButton';
import { leafBack, leafAhead } from '../utils';
import { useRef } from 'react';

const Footer = () => {
    const list = useRef<HTMLUListElement | null>(null);

    return (  
        <footer className="footer">
            <div className="container">
                <div className="footer__body">
                    <LeafButton cl='back' method={leafBack} list={list} scroll={1000}/>
                    <ul className="footer__columns" ref={list}>
                        <li>
                            <FooterColumn/>
                        </li>
                        <li>
                            <FooterColumn/>
                        </li>
                        <li>
                            <FooterColumn/>
                        </li>
                        <li>
                            <FooterColumn/>
                        </li>
                    </ul>
                    <LeafButton cl='ahead' method={leafAhead} list={list} scroll={1000}/>
                    <div className="footer__end">
                        <p>2023</p>
                        <a href="https://github.com/V1ad6/React-Pizza" target='_blank'>View my previous project</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
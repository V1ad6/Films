import { FC } from 'react';
import '../scss/Preloader.scss';

const Preloader: FC = () => {
    return (  
        <div className='preloader'>
            <img src="/img/loader.png" alt="Loading"/>
            <h2>Please, wait a second</h2>
            <h1>The website is loading</h1>
        </div>
    );
}
 
export default Preloader;
import { FC } from 'react';
import UpcomingList from '../components/UpcomingList';
import RecomendedList from '../components/RecomendedList';

const MainPage: FC = () => {
    return (  
        <div className="main">
            <UpcomingList/>
            <RecomendedList/>
        </div>
    );
}
 
export default MainPage;
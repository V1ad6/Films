import { FC, useRef } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import '../scss/MainPage/UpcomingList.scss';
import LeafButton from './LeafButton';
import UpcomingFilmCard from './UpcomingFilmCard';
import { leafBack, leafAhead } from '../utils';

const UpcomingList: FC = () => {
    const {films, loading, error} = useTypedSelector(state => state.upcoming);
    const list = useRef<HTMLUListElement | null>(null);

    return (  
        <div className="upcoming">
            <div className="container">
                <h2>COMING SOON</h2>
            </div>
            {
                loading 
                ? 
                <h1>Loading...</h1>
                : 
                <div className='upcoming__list'>
                    <LeafButton cl='back' method={leafBack} list={list} scroll={500}/>
                    <ul ref={list}>
                        {films.map(film => <UpcomingFilmCard key={film.id} film={film} />)}
                    </ul> 
                    <LeafButton cl='ahead' method={leafAhead} list={list} scroll={500}/>
                </div>
                
            }
            {error && <h1>{error}</h1>}
        </div>
    );
}
 
export default UpcomingList;
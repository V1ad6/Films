import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchFilm } from '../store/actionCreators/film';
import { filmAction } from '../types/film';
import '../scss/FilmPage/FilmPage.scss';

const FilmPage: FC = () => {
    const dispatch = useDispatch<Dispatch<filmAction>>();
    const {id, film, loading, error} = useTypedSelector(state => state.film);

    useEffect(() => {
        if (id === '') {
            dispatch(fetchFilm(sessionStorage.getItem('id')) as any);
        } else {
            dispatch(fetchFilm(id) as any);
            sessionStorage.setItem('id', id);
        }
    }, []);

    const actorsToStr = (): string => {
        const actors: string = film.actorList
                                    .slice(0, 7)
                                    .reduce((acc: string, curr: any) => acc + curr.name + ', ', '');
        return actors.slice(0, -2);
    }

    return (  
        <div className="filmPage">
            <div className="container">
                <div className="film-info">
                    <img src={film.image} alt="poster"/>
                    <div className='film-info__facts'>
                        <h1>{film.title}</h1>
                        <p>Release date: {film.releaseDate}</p>
                        <p>Runtime: {film.runtimeStr}</p>
                        <p>Genres: {film.genres}</p>
                        <p>Rating (imDb): {film.imDbRating}</p>
                        <p>Awards: {film.awards}</p>
                        <p>Languages: {film.languages}</p>
                        <p>Directors: {film.directors}</p>
                        <p>Writers: {film.writers}</p>
                        <p>Plot: {film.plot}</p>
                        <p>Actors: {actorsToStr()}</p>
                    </div>
                </div> 
            </div>
        </div>
    );
}
 
export default FilmPage;
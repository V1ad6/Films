import { FC } from 'react';
import { RecomendedFilm } from '../types/recomended';
import { cutStr } from "../utils";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFilmTypes } from '../types/film';

interface RecomendedFilmProps {
    film: RecomendedFilm;
}

const RecomendedFilmCard: FC<RecomendedFilmProps> = ({ film }) => {
    const dispatch = useDispatch();

    return (  
        <li>
            <Link 
                to='/film' 
                className='link' 
                onClick={() => dispatch({type: fetchFilmTypes.FETCH_FILM, payload: film.id})}
            >
                <img src={film.image} alt="film" className='recomended__poster'/>
                <h4 className='recomended__card-title recomended__card-title_1'>{cutStr(film.title, 20)}</h4>
                <h4 className='recomended__card-title recomended__card-title_2'>{cutStr(film.title, 40)}</h4>
                <h4 className='recomended__card-title recomended__card-title_3'>{film.title}</h4>
                <div className='recomended__card-info'>
                    <span>{film.year}</span>  
                    <span>
                        <img src="/img/star.png" alt="stars"/>
                        {film.imDbRating}
                    </span>
                </div>
            </Link>
        </li>
    );
}
 
export default RecomendedFilmCard;
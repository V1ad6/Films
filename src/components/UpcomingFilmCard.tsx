import { FC, useRef } from "react";
import { UpcomingFilm } from "../types/upcoming";
import { cutStr } from "../utils";

interface UpcomingFilmCardProps {
    film: UpcomingFilm,
}

const UpcomingFilmCard: FC<UpcomingFilmCardProps> = ({ film }) => {
    const card = useRef<HTMLLIElement | null>(null); 

    return (  
        <li ref={card}>
            <img src={film.image} alt="film" className="upcoming__image"/>
            <h3 className="upcoming__title upcoming__title_short">{cutStr(film.title, 23)}</h3>
            <h3 className="upcoming__title upcoming__title_long">{cutStr(film.title, 50)}</h3>
        </li>
    );
}
 
export default UpcomingFilmCard;
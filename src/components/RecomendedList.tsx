import { FC, useState, useRef, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import RecomendedFilmCard from './RecomendedFilmCard';
import '../scss/MainPage/RecomendedList.scss';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { FilmFilter, sortFilterAction, sortFilterTypes } from '../types/sortFilter';
import { RecomendedFilm } from '../types/recomended';
import FilterFrame from './FilterFrame';
import Search from './Search';

const RecomendedList: FC = () => {
    const dispatch = useDispatch<Dispatch<sortFilterAction>>();
    const [filmsAmount, setFilmsAmount] = useState<number>(25);
    const moreButton = useRef<HTMLButtonElement | null>(null);
    const sortList = useRef<HTMLUListElement | null>(null);
    const {list, loading, error} = useTypedSelector(state => state.recomended);
    const {query} = useTypedSelector(state => state.search);
    const {sort, filter} = useTypedSelector(state => state.sortFilter);
    const [filterFrameParams, setFilterFrameParams] = useState({ addClass: '', filter: 'none'});

    useEffect(() => {
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            
            if (!target.closest('.recomended__parameters')) {
                sortList.current?.classList.remove('recomended__sort-params_opened');
                setFilterFrameParams({addClass: '', filter: 'none'});
            }
        });
    }, []);

    const openSortList = (): void => {
        sortList.current?.classList.toggle('recomended__sort-params_opened');
        console.log('clicked!')
    }

    const callSortFilter = (e: React.MouseEvent): void => {
        const list = e.currentTarget as HTMLElement;
        const target = e.target as HTMLElement;
        const type = target.textContent?.toLowerCase();

        if (target.tagName !== 'LI' || !type) return;

        if (list.classList.contains('recomended__sort-params')) {
            list.classList.remove('recomended__sort-params_opened');

            dispatch({
                type: sortFilterTypes.SORT_LIST, 
                payload: type,
            });
        } else {
            if (type === 'none') {
                setFilterFrameParams({addClass: '', filter: ''});
                dispatch({
                    type: sortFilterTypes.FILTER_LIST, 
                    payload: {type: type, value: ''}
                })
            } else {
                setFilterFrameParams({addClass: 'set-filter_visible', filter: type});
            }
        }
    }
 
    const sortFilms = (itemA: RecomendedFilm, itemB: RecomendedFilm): number => {
        switch (sort) {
            case 'year':
                return (+itemB.year) - (+itemA.year);
            case 'title':
                return itemA.title > itemB.title ? 1 : -1;
            case 'rating':
            default: 
                return (+itemB.imDbRating) - (+itemA.imDbRating);
        }
    }

    const filterFilms = (item: RecomendedFilm): boolean => {
        switch ((filter as FilmFilter).type) {
            case 'year':
                return item.year === filter.value;
            case 'rating': 
                return +item.imDbRating >= +filter.value;
            case 'none':
            default:
                return true; 
        }
    } 

    const showMore = (): void => {
        const diff: number = list.length - filmsAmount;

        if (diff > 25) {
            setFilmsAmount(p => p + 25);
        } else {
            setFilmsAmount(p => p + diff);
            moreButton.current?.classList.add('nomofilms');
        } 
    }

    return ( 
        <div className='recomended-wrap'>
           <div className="container">
                <div className="recomended">
                    <h2 className='recomended__title'>RECOMENDED</h2>
                    <div className="recomended__parameters">
                        <button onClick={openSortList}>
                            <p>Sort</p>
                        </button>
                        <ul ref={sortList} onClick={callSortFilter} className="recomended__sort-params">
                            <li>Rating</li>
                            <li>Year</li>
                            <li>Title</li>
                        </ul> 
                        <Search cl='search_mob'/>
                        <div className="recomended__filter-params">
                            <h3>Filters: </h3>
                            <ul onClick={callSortFilter}>
                                <li>None</li>
                                <li>Rating</li>
                                <li>Year</li>
                            </ul>
                            <FilterFrame frameParams={filterFrameParams}/>
                        </div>
                    </div>
                    <ul className='recomended__list'>
                        {
                            list
                            .filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
                            .filter(filterFilms)
                            .sort(sortFilms)
                            .slice(0, filmsAmount)
                            .map(film => 
                                <RecomendedFilmCard key={film.id} film={film}/>
                            )
                        }
                    </ul> 
                    <button 
                        onClick={showMore} 
                        ref={moreButton} 
                        className='recomended__more-btn'
                    >Show more...</button>
                </div>
            </div> 
        </div> 
        
    );
}
 
export default RecomendedList;
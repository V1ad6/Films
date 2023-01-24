import { FC, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { searchAction } from '../store/reducers/search';
import '../scss/Search.scss';

const Search: FC<{cl?: string}> = ({ cl }) => {
    const dispatch = useDispatch<Dispatch<searchAction>>();
    const [focused, setFocused] = useState<boolean>(false);
    const input = useRef<HTMLInputElement | null>(null);

    const focus = (): void => input.current?.focus();
    const highlight = (): void => setFocused(prev => !prev);

    return (  
        <div className={(focused ? 'search white' : 'search') + ' ' + (cl || '')} onClick={focus}>
            <img src="/img/search.png" alt="search"/>
            <input 
                type="text" 
                placeholder='Search...' 
                ref={input} 
                onFocus={highlight} 
                onBlur={highlight}
                onChange={(e: React.ChangeEvent) => 
                    dispatch({
                        type: 'SEARCH_FILM', 
                        payload: (e.target as HTMLInputElement).value,
                    })
                }
            />
        </div>
    );
}
 
export default Search;
import '../scss/SetFilterFrame.scss';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { sortFilterAction, sortFilterTypes } from '../types/sortFilter';

interface FilterFrameParamsProps {
    frameParams: {
        addClass: string,
        filter: string
    }
}

const FilterFrame: FC<FilterFrameParamsProps> = ({ frameParams }) => {
    const dispatch = useDispatch<Dispatch<sortFilterAction>>();

    return (  
        <div className={'set-filter ' + frameParams.addClass}>
            <input 
                type="text" 
                placeholder={'Enter needed ' + frameParams.filter}
                onChange={(e) => {
                    dispatch({
                        type: sortFilterTypes.FILTER_LIST, 
                        payload: {type: frameParams.filter, value: e.target.value}
                    })}
                }
            />
        </div>
    );
}
 
export default FilterFrame;
import { FC } from 'react';

interface LeafButtonProps {
    cl: string;
    method: (list: HTMLElement, scroll: number) => void;
    list: any;
    scroll: number;
}

const LeafButton: FC<LeafButtonProps> = ({ cl, method, list, scroll }) => {
    return (  
        <button className={cl} onClick={() => method(list, scroll)}>
            <img src="/img/Arrow.png" alt={cl}/>
        </button>
    );
}
 
export default LeafButton;
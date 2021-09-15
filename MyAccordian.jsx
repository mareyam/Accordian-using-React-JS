import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const MyAccordian = ({Question, Answer}) => {
    const [state, setState] = useState(false);
    return (
        <div>
            <p className="MyAccordianp1" onClick={() => setState(!state)}>
            {
                state? <RemoveIcon/> : <AddIcon/> 
            }

            </p>
            <p className="MyAccordianp2">{Question}</p>
            
            {
                state && <p className="MyAccordianp3">{Answer}</p>
            }
            <hr/>

            
        </div>
    )
}

export default MyAccordian;

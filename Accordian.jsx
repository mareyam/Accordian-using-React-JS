import React,{useState} from 'react'
import AccordianQuestions from "./AccordianQuestions";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
    const[data, setData] = useState(AccordianQuestions)
    return (
        <div className="MyAccordianMainDiv">
              
            <h1 className="MyAccordianh1">My Accordian</h1> 
            <div className="MyAccordianSubDiv"> 
            {
                data.map((curElem) =>
                {
                const {id} = curElem;
                return <MyAccordian key={id} {...curElem} />
                })
            }
            </div>
        </div>
    )
}

export default Accordian;


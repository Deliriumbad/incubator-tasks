import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";



function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       items={[
                           {title:'Bob', value:'1'},
                           {title:'Fred', value:'2'},
                           {title:'Nick', value:'3'},
                           {title:'Alex', value:'5'}
                       ]}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       onClick={()=>{
                           console.log('!!!')}}
            />
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

export default App;

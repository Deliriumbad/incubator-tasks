import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "../Accordion/reducer";

type AccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion: React.FC<AccordionPropsType> = (props) => {

    const {titleValue} = props;

    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, { collapsed: false })

    return (
            <div>
               {/* <AccordionTitle title={titleValue} onClick = { ()=> setCollapsed(!collapsed)}/>*/}
                <AccordionTitle title={titleValue} onClick = { ()=> { dispatch( {type: TOGGLE_COLLAPSED} ) }}/>
                {!state.collapsed && <AccordionBody/>}
            </div>
        );
    }

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = (props) => {
    const {title, onClick} = props;
    return (
        <h3 onClick={()=>onClick()}>{title}</h3>
    );
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

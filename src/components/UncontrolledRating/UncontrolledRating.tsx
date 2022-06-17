import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

export type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value:RatingValueType)=> void
}


export const UncontrolledRating = (props:RatingPropsType) => {

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(value = 1); props.onChange(1)}}/>
            <Star selected={value > 1} setValue={() => {setValue(value = 2); props.onChange(2)}}/>
            <Star selected={value > 2} setValue={() => {setValue(value = 3); props.onChange(3)}}/>
            <Star selected={value > 3} setValue={() => {setValue(value = 4); props.onChange(4)}}/>
            <Star selected={value > 4} setValue={() => {setValue(value = 5); props.onChange(5)}}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void

}

function Star(props: StarPropsType) {
    return <span onClick={() => props.setValue()}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}

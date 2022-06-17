import React, {useState} from "react";


type OnOffPropsType = {
    on: boolean
    onChange: (on:boolean)=> void
}

export const OnOff = (props:OnOffPropsType) => {



    const onStyle = {
        width: '30px',
        height: '30px',
        border: 'solid black 1px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: 'solid black 1px',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: 'solid black 1px',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : "red"
    }


    return <div>
        <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
        <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}
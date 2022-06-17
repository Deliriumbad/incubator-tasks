import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion
    titleValue={'menu'}
    onChange={callback}
    collapsed={true}
    items={[]}
    onClick={onClickCallback}
/>
export const UsersUncollapsedMode = () => <Accordion
    titleValue={'users'}
    onChange={callback}
    collapsed={false}
    items={[
        {title:'Bob', value:'1'},
        {title:'Fred', value:'2'},
        {title:'Nick', value:'3'},
        {title:'Alex', value:'5'}
    ]}
    onClick={onClickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return < Accordion titleValue={'users'}
                       onChange={ ()=> setValue(!value) }
                       collapsed={value}
                       items={[
                           {title:'Bob', value:'1'},
                           {title:'Fred', value:'2'},
                           {title:'Nick', value:'3'},
                           {title:'Alex', value:'5'}
                       ]}
                       onClick={onClickCallback}
    />
}




import { useState } from 'react';
import './Interface.css'
import {Height, HeightVal} from './Height'
import {Lighting, BackLight, UnderLight, DeskLight} from './Lighting';
import Home from './Home';

function Interface(){
    const [tabIndex, tabSet] = useState(0);
    return <div id='main-container'>
        <div class='flex-container'>
            <button 
            class='home-tabs'
            onClick={() => {tabSet(0)}}
            >
                Home</button>
            <button 
            class='content-tabs'
            onClick={()=>{tabSet(1)}}
            >
                Desk Height</button>
            <button 
            class='content-tabs'
            onClick={()=>{tabSet(2)}}
            >
                Desk Lighting</button>
        </div>
        {tabIndex == 0 && <Home 
        HV={HeightVal}
        BL={BackLight}
        UL={UnderLight}
        DL={DeskLight}
        ></Home>}
        {tabIndex == 1 && <Height></Height>}
        {tabIndex == 2 && <Lighting></Lighting>}
    </div>;
}
export default Interface;
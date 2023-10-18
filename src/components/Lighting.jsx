import './Tabs.css'
import { useState } from 'react';
export let BackLight = [50, false];
export let UnderLight = [50, false];
export let DeskLight = [50, false];
function Lighting(){
    const [backlightValue, backlightUpdate] = useState(BackLight[0]);
    BackLight[0] = backlightValue;
    const [underlightValue, underlightUpdate] = useState(UnderLight[0]);
    UnderLight[0] = underlightValue;
    const [desklightValue, desklightUpdate] = useState(DeskLight[0]);
    DeskLight[0] = desklightValue;
    const [backActive, setbackActive] = useState(BackLight[1]);
    BackLight[1] = backActive;
    const [underActive, setunderActive] = useState(UnderLight[1]);
    UnderLight[1] = underActive;
    const [deskActive, setdeskActive] = useState(DeskLight[1]);
    DeskLight[1] = deskActive;
    const [currentLight, updateCurrentLight] = useState('Backlight')
    
    function lightContext(){
        if (currentLight == 'Backlight'){
            return [backlightValue, backlightUpdate];
        }
        else if (currentLight == 'Underlight'){
            return [underlightValue, underlightUpdate];
        }
        else if (currentLight == 'Desklight'){
            return [desklightValue, desklightUpdate];
        }
    }
    
    return (
        <div class='grid-container'>
            <input type='range' class='range' onChange={
                    (event) => {
                        lightContext()[1](event.target.value);
                    }
                }
                value={lightContext()[0]}
                ></input>
            <p class='range-label'>Desk Lights</p>
            <select 
                name='options' class='options'
                onChange={(event)=>updateCurrentLight(event.target.value)}
            >
                <option value="Backlight">Backlight</option>
                <option value="Underlight">Underlight</option>
                <option value="Desklight">Desklight</option>
            </select>
            <div class="item-3-1 grid-container">
                <label class="switch item-1-1">
                    <input type="checkbox"
                    onChange={
                        (event) =>
                        {
                            setbackActive(event.target.checked);
                        }
                    }></input>
                    <span class="slider round"></span>
                </label>
                <p class="item-1-2">Backlight</p>
                <label class="switch item-1-3">
                    <input 
                    type="checkbox"
                    onChange={
                        (event) =>
                        {
                            setunderActive(event.target.checked);
                        }
                    }
                    ></input>
                    <span class="slider round "></span>
                </label>
                <p class="item-1-4">Underlight</p>
                <label class="switch item-1-5">
                    <input type="checkbox"
                    onChange={
                        (event) =>
                        {
                            setdeskActive(event.target.checked);
                        }
                    }></input>
                    <span class="slider round"></span>
                </label>
                <p class="item-1-6">Desklight</p>
            </div>
            <div class='item-4-1 grid-container'>
                <p class={'info-label item-1-1'+(backActive ? ' active' :'')}>Backlight: {backlightValue}%</p>
                <p class={'info-label item-1-2'+(underActive ? ' active' :'')}>Underlight: {underlightValue}%</p>
                <p class={'info-label item-1-3'+(deskActive ? ' active' :'')}>Desklight: {desklightValue}%</p>
            </div>
        </div>
    )
}

export {Lighting};
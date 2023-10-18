import { useState } from 'react';
import './Tabs.css'

export let HeightVal = 20;
function Height(){
    const [height, updateHeight] = useState(HeightVal);
    const [freeMoving, setFreeMoving] = useState("locked");
    HeightVal = height;
    return (
        <div class='grid-container'>
            <input type='range' class='range' min={0} max={50} defaultValue={height} value={height}
            onChange={(event)=>updateHeight(event.target.value)}></input>
            <p class='range-label'>Desk Height</p>
            <select name='options' class='options' defaultValue="Sitting"
            onChange={
                (event)=>{
                    if (event.target.value == "Standing"){
                        updateHeight(30);
                    }
                    else if (event.target.value == "Sitting") {
                        updateHeight(20);
                    }
                    else if (event.target.value == "Lower") {
                        updateHeight(10);
                    }
                    else if (event.target.value == "Ground") {
                        updateHeight(0);
                    }
                }
            }
            >
                <option value="Standing">Standing</option>
                <option value="Sitting">Sitting</option>
                <option value="Lower">Lower</option>
                <option value="Ground">Ground</option>
            </select>
            <div class="item-3-1 grid-container">
                <button class="item-1-1" onClick={()=>updateHeight(20)}>Reset Height</button>
                <button class={"item-1-2"+(freeMoving == "moving" && " active")} onClick={()=>setFreeMoving("moving")}>Free Move</button>
                <button class="item-1-3" onClick={()=>setFreeMoving("locked")}>Lock</button>
            </div>
            <p class='info-label'>Current Height: {height}in</p>
        </div>
    )
}

export {Height};

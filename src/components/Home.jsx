import { BackLight, DeskLight, UnderLight } from './Lighting';
import './Tabs.css'
function Home({HV, BL, UL, DL}){
    return <div class='grid-container'>
        <h2 class='item-1'>Select Above Tabs to Change Settings</h2>
        <p class='info-label item-2'>Height: {HV}in</p>
        <div class='grid-container item-3'>
            <p class={'info-label item-1-1'+(BackLight[1] ? ' active' :'')}>Back Light: {BL[0]}%</p>
            <p class={'info-label item-1-2'+(UnderLight[1] ? ' active' :'')}>Under Light: {UL[0]}%</p>
            <p class={'info-label item-1-3'+(DeskLight[1] ? ' active' :'')}>Desk Light: {DL[0]}%</p>
        </div>
    </div>
}
export default Home;
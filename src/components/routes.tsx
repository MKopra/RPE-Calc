import LandingPageElement from "./landingpage"
import OneRepLanding from "./onereplanding"
import OneRepMenu from "./onerepmenu"
import EraseButton from "./erasebutton"
import Menu from "./menu"
import CalLanding from "./callanding"
import CalMenu from "./calmenu"
import { BrowserRouter, Route } from "react-router-dom"

function RoutesApp() {

return (

<div>

    <Route path='/' element={LandingPageElement}/>
    <Route path='/onerepmax-landing' element={<OneRepLanding OneRepMenu={<OneRepMenu />} />}/>
    <Route path='/onerepmax-calc' element={<OneRepMenu/>}/>
    <Route path='/rpe-landing' element={<EraseButton menu={<Menu/>}/>}/>
    <Route path='/rpe-calc' element={<Menu/>}/>
    <Route path='/cal-landing' element={<CalLanding CalMenu={<CalMenu/>} />}/>
    <Route path='/cal-calc' element={<CalMenu/>}/>

</div>

)
}

export default RoutesApp
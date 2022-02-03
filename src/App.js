import Bottomcurvedbg from "./components/Bottomcurvedbg";
import Curvedbg from "./components/Curvedbg";
import Description from "./components/Description";
import Mobileillustration from "./components/Mobileillustration";

const App =()=>{
  return(
    <div>
      <Curvedbg/>
      <div className="center">
        <Mobileillustration/>
        <Description/>
      </div>
      <Bottomcurvedbg/>
      <div className='attribute'>Challenge by Frontend Mentor. Coded by <a href="https://www.linkedin.com/in/praise-oyeniyi"> Praise_Oyeniyi</a></div>
    </div>
  )
}

export default App;

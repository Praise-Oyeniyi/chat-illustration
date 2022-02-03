import Mobilebody from "./Mobilebody"
import Mobileheader from "./Mobileheader"
// import Mobileinput from "./Mobileinput"

const Mobileillustration = () => {
    return (
        <div className="mobile-outer-outer">
            <div className="mobile-outer">
                <div className="mobile-inner">
                    <Mobileheader/>
                    <Mobilebody/>
                </div>
            </div>
        </div>
    )
}

export default Mobileillustration

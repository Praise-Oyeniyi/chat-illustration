import avatar from '../images/avatar.jpg'

const Mobileheader = () => {    
    return (
        <div className="mobile-header">
            <div className="mobile-header-outer">
                <div className="notch"></div>
                <div className="header-info-holder">
                    <div className="header-info-outer">
                        <i className="fas fa-chevron-left back"></i>
                        <div className="header-info">
                            <img src={avatar} alt="avatar"/>
                            <div className="profile-info">
                                <h4 className="name">Samuel Green</h4>
                                <p className="status">Available to Walk</p>
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobileheader;

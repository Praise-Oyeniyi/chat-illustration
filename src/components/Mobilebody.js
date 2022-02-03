import dog1 from '../images/dog-image-1.jpg'
import dog2 from '../images/dog-image-2.jpg'
import dog3 from '../images/dog-image-3.jpg'
import Mobileinput from './Mobileinput'

const Mobilebody = () => {
    return (
        <div className="mobile-body">
            <div className="body-container">
                <div className="chat-1">
                    <p>That sounds great. I’d be happy with that.</p>
                </div>
                <div className="chat-2">
                    <p>
                    Could you send over some pictures of your dog, please? 
                    </p>
                </div>
                <img src={dog1} className="img-1"/>
                <img src={dog2} className="img-2"/>
                <img src={dog3} className="img-3"/>
                <div className="chat-3">
                    <p>
                    Here are a few pictures. She’s a happy girl!
                    </p>
                </div>
                <div className="chat-4">
                    <p>
                    Can you make it?
                    </p>
                </div>
                <div className="chat-5">
                    <p>
                    She looks so happy! The time we discussed works. How long shall I take her out for?
                    </p>
                </div>
                <div className="chat-6">
                    <div className="chat-6-outer">
                        <div className="check-circle"></div>
                        <p>30 minute walk </p>
                    </div>
                    <p className='price'>$29</p>
                </div>
                <div className="chat-7">
                    <div className="chat-7-outer">
                        <div className="check-circle"></div>
                        <p>1 hour walk</p>
                    </div>
                    <p className='price'>$49</p>
                </div>
            </div>
            <Mobileinput/>
        </div>
    )
}

export default Mobilebody

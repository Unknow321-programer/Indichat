import { faPhone, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import './RightNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RightNavBar = () => {
    return (
            <nav className='nav-view'>
                <div className='user-profile'>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
                    <a href='#'>
                        <span >Saurabh Gade</span>
                        <span >select for contact info</span>
                    </a>
                </div>
                <div className='other-function'>
                        <button className="video-call"><FontAwesomeIcon icon={faVideo} /> </button>
                        <button className="call"><FontAwesomeIcon icon={faPhone} /></button>
                        <input className='search' type="text" placeholder="Search..." />
                </div>
            </nav>
    );
}

export default RightNavBar;
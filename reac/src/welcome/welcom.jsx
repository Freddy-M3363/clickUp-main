import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/welcom.css';
import { Button } from 'react-bootstrap'
// import {collaborate} from '../../public/clickup/collaborate.jpg'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import Click from '../../public/clickup/click.png'
// import '../App.css'

function Interfaces() {
    return(
        <div className="interface">
            <div className='first'>
            <div className='header'>
               <ul className='header'>
                    <li className="logo"><a href='#'><img src="https://logosandtypes.com/wp-content/uploads/2023/03/ClickUp.png" alt="Logo" />ClickUp<span className="brd" > the everything <br/> app for work</span></a></li>
                    <div className="dropdown-menu">
                        {/* <button className="dropbtn">Features</button> */}
                        <div className="dropdown-content">
                            <a href="#">Product <FontAwesomeIcon icon={faCaretDown} /></a>
                            <a href="#">Solutions <FontAwesomeIcon icon={faCaretDown} /></a>
                            <a href="#">Resources <FontAwesomeIcon icon={faCaretDown} /></a>
                            <a href="#">Pricing</a>
                            <a href="#">Enterprise</a>
                        </div> 
    
                    </div>
                    <li className="signUp"><p className='auth'>login &nbsp;<button className='signup'>SignUp</button></p></li>
                </ul>
            </div>

       
            <div className="interface-content">
                <p className='motto'>The everything app, <br/> for work</p>
                <p className="intro"><span>Get everyone working in a single platform</span> designed to manage any type of work.</p>
                <Button className='starter' type="button" class="btn btn-primary">Get started for free <FontAwesomeIcon icon={faArrowRight} size="1x" color="green" className='align-middle' />

</Button>
                <p className="font-black italic">Free Forever. No Credit Card.</p>
            </div>
                <div className="sponsors">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
        </div>
            <div>
                <img className='home' src="/clickup/home.png" alt="Home Display"/>
            </div>

            <div className="tent">
                <p className='save'>Save time and get<br/> more done</p><br/>
                <p>
Supercharge productivity. <br/> Streamline work by doing it, and seeing it, in one place.</p>
            </div>

            <div className="collaborate">

                <img className="float" src="https://shorturl.at/mH2LZ" alt="collaborate"/>
                <div className="collaborate">
                    <p className="save"> Improve collaboration</p>
                    <p> Get your teams working together more closely, even if they’re far apart. Centralize
                        project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans
                        together with collaborative Docs.</p>
                    <ul>
                        <li> comments</li>
                        <li> Docs</li>
                        <li> WhiteBoard</li>
                        <li> Clips</li>
                    </ul>
                    <p className="auto">Enhance visibility <br/>
                        Automate work</p>
                </div>
            </div>
            <div>
                <img className="Click" src={Click} alt="lockin"/>
            </div>

        </div>
    )
}

export default Interfaces;
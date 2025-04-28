import './Header_All.scss'
import Header from '../Header/Header'
import icon from './Header_All_assets/Icon.png'
import icon2 from './Header_All_assets/Icon2.png'
import Facebook from './Header_All_assets/Facebook.png'
import Instagram from './Header_All_assets/Instagram.png'
import Link from './Header_All_assets/Linked-In.png'
import Twitter from './Header_All_assets/Twitter.png'

export default function Header_All(){
    return(
        <>
            <div className='Header_All'>
                <div>
                    <div>
                        <div>
                            <img src={icon} alt="" />
                            <p>Monday - Friday8AM - 9PM</p>
                        </div>
                        <div>
                            <img src={icon2} alt="" />
                            <p>725 Park Ave, New York</p>
                        </div>
                        <div>
                            <img src={Facebook} alt="" />
                            <img src={Instagram} alt="" />
                            <img src={Link} alt="" />
                            <img src={Twitter} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <Header/>
                </div>
            </div>
        </>
    )
}
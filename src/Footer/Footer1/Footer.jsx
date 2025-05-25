import './Footer.scss'
import Logo from '../../Header/Header/Header_assets/Logo.png'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <>
            <footer className='fone'>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src={Logo} alt="" />
                                <h2>AskExperts</h2>
                            </div>
                            <p>Fb./Ig. /Tw. /Be.</p>
                        </div>
                        <hr />
                        <div>
                            <div>
                                <h3>Product</h3>
                                <hr />
                                <ul>
                                    <li>Service</li>
                                    <li>FAQ</li>
                                    <li><Link to='/Service_Single'>Service Single</Link></li>
                                    <li>Get Quote</li>
                                    <li><Link to='/Blog'>Blog</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3>Company</h3>
                                <hr />
                                <ul>
                                    <li><Link to='/About'>About</Link></li>
                                    <li>News</li>
                                    <li>Contacts</li>
                                    <li>Testimonials</li>
                                    <li><Link to='/Team'>Our team</Link></li>
                                    <li>Our approach</li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <h3>Address</h3>
                                    <hr />
                                </div>
                                <p>1700 W Blancke St, kiyev port south USA, America</p>
                                <div>
                                    <p>Book an Appoinment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr />
                        <p>©2022 Consultalk. All rights reserved | Terms of Service | Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
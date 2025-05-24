import './About.scss'
import Header_All from '../../Header/Header_All/Header_All'
import img from './About_assets/Image.png'
import ok from './About_assets/ok.png'
import Strelochki from './About_assets/Strelochki.png'
import icon1 from './About_assets/icon1.png'
import icon2 from './About_assets/icon2.png'
import icon3 from './About_assets/icon3.png'
import icon4 from './About_assets/icon4.png'
import Footer from '../../Footer/Footer1/Footer'
import { Black } from '../Home/Home'
import Instagram from './About_assets/Instagram.png'
import Facebook from './About_assets/Facebook.png'
import Twitter from './About_assets/Twitter.png'
import { Link } from 'react-router-dom'

export default function About(){
    return(
        <>
            <Header_All/>
            <main className="about">
                <section className='background1'>
                    <div>
                        <div>
                            <div>
                                <p>Services</p>
                            </div>
                            <h2>Creative Services For Boost Your Business Growth</h2>
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>OUR VISION</p>
                                </div>
                                <h3>Turn your ideas into reality.</h3>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
                                <div>
                                    <img src={ok} alt="" />
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</p>
                                </div>
                                <div>
                                    <img src={ok} alt="" />
                                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital.</p>
                                </div>
                            </div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <div>
                                <h3>1128+</h3>
                                <p>Successful Work</p>
                            </div>
                            <div>
                                <h3>908+</h3>
                                <p>Team member</p>
                            </div>
                            <div>
                                <h3>258+</h3>
                                <p>Happy Customers</p>
                            </div>
                            <div>
                                <h3>564+</h3>
                                <p>Creative Idea</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background3'>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>Growing with our Clients</p>
                                </div>
                                <h2>Our core values & principles</h2>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
                            </div>
                            <div>
                                <p>Get in touch</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src={icon1} alt="" />
                                    <h3>Creative Ideas</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
                                    <div>
                                        <h4>Read More</h4>
                                        <img src={Strelochki} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon2} alt="" />
                                    <h3>Best Features</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <div>
                                        <h4>Read More</h4>
                                        <img src={Strelochki} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon3} alt="" />
                                    <h3>Experience</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
                                    <div>
                                        <h4>Read More</h4>
                                        <img src={Strelochki} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon4} alt="" />
                                    <h3>Easy Solutions</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <div>
                                        <h4>Read More</h4>
                                        <img src={Strelochki} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background4'>
                    <div>
                        <div>
                            <div>
                                <p>Our History</p>
                            </div>
                            <h2>Better Website Means A User Experience</h2>
                            <p>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.</p>
                        </div>
                        <div>
                            <iframe width="962" height="369" src="https://rutube.ru/play/embed/014c0a61abd96a831f91621f9e5d4af3/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>
                </section>
                <section className='background5'>
                    <div>
                        <div>
                            <div>
                                <p>Our team</p>
                            </div>
                            <h2>We champion the bold to achieve the extraordinary</h2>
                            <p>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team.</p>
                        </div>
                        <div>
                            <Link to="/Team_Single_one">
                                <div>
                                    <div>
                                        <p>CEO at Company</p>
                                    </div>
                                </div>
                                <h3>Sarah Jasmine</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                                <div>
                                    <img src={Instagram} alt="" />
                                    <img src={Facebook} alt="" />
                                    <img src={Twitter} alt="" />
                                </div>
                            </Link>
                            <Link to="/Team_Single_two">
                                <div>
                                    <div>
                                        <p>Manager</p>
                                    </div>
                                </div>
                                <h3>Sarah Jasmine</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                                <div>
                                    <img src={Instagram} alt="" />
                                    <img src={Facebook} alt="" />
                                    <img src={Twitter} alt="" />
                                </div>
                            </Link>
                            <Link to="/Team_Single_three">
                                <div>
                                    <div>
                                        <p>CEO at Company</p>
                                    </div>
                                </div>
                                <h3>Sarah Jasmine</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                                <div>
                                    <img src={Instagram} alt="" />
                                    <img src={Facebook} alt="" />
                                    <img src={Twitter} alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <Black/>
            </main>
            <Footer/>
        </>
    )
}
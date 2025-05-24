import './Team.scss'
import Header_all from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'
import Instagram from './Team_assets/Instagram.png'
import Facebook from './Team_assets/Facebook.png'
import Twitter from './Team_assets/Twitter.png'
import ruki from './Team_assets/ruki.png'
import { Link } from 'react-router-dom'

export default function Team(){
    return(
        <>
            <Header_all/>
            <main className='Team'>
                <section className='background1'>
                    <div>
                        <div>
                            <div>
                                <p>Team</p>
                            </div>
                            <h2>The Consultors</h2>
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <div>
                            <div>
                                <h2>Meet Our Great Team</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                            <div>
                                <p>Join our team</p>
                            </div>
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
                                <h3>John Carter</h3>
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
                                <h3>Daisy Stella</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                                <div>
                                    <img src={Instagram} alt="" />
                                    <img src={Facebook} alt="" />
                                    <img src={Twitter} alt="" />
                                </div>
                            </Link>
                            <Link to="/Team_Single_four">
                                <div>
                                    <div>
                                        <p>CEO at Company</p>
                                    </div>
                                </div>
                                <h3>Maya Elizabeth</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                                <div>
                                    <img src={Instagram} alt="" />
                                    <img src={Facebook} alt="" />
                                    <img src={Twitter} alt="" />
                                </div>
                            </Link>
                            <Link to="/Team_Single_five">
                                <div>
                                    <div>
                                        <p>CEO at Company</p>
                                    </div>
                                </div>
                                <h3>Ryan Jackson</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                                <div>
                                    <img src={Instagram} alt="" />
                                    <img src={Facebook} alt="" />
                                    <img src={Twitter} alt="" />
                                </div>
                            </Link>
                            <Link to="/Team_Single_six">
                                <div>
                                    <div>
                                        <p>CEO at Company</p>
                                    </div>
                                </div>
                                <h3>Lilly Victoria</h3>
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
                <section className='background3'>
                    <div>
                        <div>
                            <div>
                                <p>Contact</p>
                            </div>
                            <h2>Ready To Talk?</h2>
                            <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque  pellentesque habitant morbi tristique.</p>
                            <div>
                                <input type="text" placeholder='your mail address'/>
                                <button type="button">
                                    <p>Send Message</p>
                                </button>
                            </div>
                        </div>
                        <img src={ruki} alt="" />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
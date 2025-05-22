import './Team.scss'
import Header_all from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'
import Instagram from './Team_assets/Instagram.png'
import Facebook from './Team_assets/Facebook.png'
import Twitter from './Team_assets/Twitter.png'

export default function Team(){
    return(
        <>
            <Header_all/>
            <main className='Team'>
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
                                <h2>Meet Our Great Team</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                            <div>
                                <p>Join our team</p>
                            </div>
                        </div>
                        <div>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
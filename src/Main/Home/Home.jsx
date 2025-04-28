import './Home.scss'
import icon from './Home_assets/Icon.png'
import img from './Home_assets/Image.png'
import star from './Home_assets/Star.png'
import smile from './Home_assets/Vector.png'
import img1 from './Home_assets/1.png'
import img2 from './Home_assets/2.png'
import img3 from './Home_assets/3.png'
import img4 from './Home_assets/4.png'
import img5 from './Home_assets/5.png'
import img6 from './Home_assets/6.png'
import icon1 from './Home_assets/Icon1.png'
import icon2 from './Home_assets/Icon2.png'
import icon3 from './Home_assets/Icon3.png'
import icon4 from './Home_assets/Icon4.png'
import icon5 from './Home_assets/Icon5.png'
import icon6 from './Home_assets/Icon6.png'

export default function Home(){
    return(
        <>
            <main className='home'>
                <section className='background1'>
                    <div>
                        <div>
                            <h2>Your small business growth advisors</h2>
                            <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                            <div>
                                <button type="button">Our Services</button>
                                <button type="button">
                                    <div>
                                        <img src={icon} alt="" />
                                        <p>Book a Meeting</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                </section>
                <section className='background3'>
                    <div>
                        <div>
                            <div>
                                <p>About Us</p>
                            </div>
                            <h2>About our Consuting Agency Team</h2>
                            <h3>We create experiences and build products that make business grow</h3>
                            <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                            <div>
                                <hr />
                                <div>
                                    <div>
                                        <div>
                                            <img src={star} alt="" />
                                            <h5>400+</h5>
                                        </div>
                                        <p>Business Services</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <div>
                                            <img src={smile} alt="" />
                                            <h5>100+</h5>
                                        </div>
                                        <p>Happy Customer</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <img src={img} alt="" />
                    </div>
                </section>
                <section className='background4'>
                    <div>
                        <div>
                            <p>Services</p>
                        </div>
                        <h2>Get Control Over Your Business I take your finance to next level</h2>
                        <div>
                            <div>
                                <div>
                                    <img src={icon1} alt="" />
                                    <h3>Audit & Evaluation</h3>
                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon2} alt="" />
                                    <h3>Financial Projections</h3>
                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon3} alt="" />
                                    <h3>Funds and investments</h3>
                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon4} alt="" />
                                    <h3>Finance & Restructuring</h3>
                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon5} alt="" />
                                    <h3>Taxes & Efficiency</h3>
                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon6} alt="" />
                                    <h3>Investment banking</h3>
                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background5'>
                    <div>
                        <div>
                            <div>
                                <p>Proccess</p>
                            </div>
                            <h2>There have some easy steps to join with us!</h2>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                            <div>
                                <hr />
                                <div>
                                    <div>
                                        <h4>1</h4>
                                    </div>
                                    <div>
                                        <h3>Setup Account</h3>
                                        <p>We understand the importance of approaching each work integrally.</p>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div>
                                        <h4>2</h4>
                                    </div>
                                    <div>
                                        <h3>Consult with us</h3>
                                        <p>Increase social reach and productivity with our App Directory, a collection.</p>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div>
                                        <h4>3</h4>
                                    </div>
                                    <div>
                                        <h3>Payment & Boost</h3>
                                        <p>We encourage every team member to be a whole person. We have a flexible.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </section>
                <section className='background6'>
                    <div></div>
                    <div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}
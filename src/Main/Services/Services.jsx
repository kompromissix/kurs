import './Services.scss'
import Header_All from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'
import { Grid } from '../Home/Home'
import img from './Services_assets/Image.png'
import kashelek from './Services_assets/kashelek.png'
import shesterenki from './Services_assets/shesterenki.png'
import Vector from './Services_assets/Vector.png'
import strelochki from './Services_assets/strelochki.png'
export default function Services(){
    return(
        <>
            <Header_All/>
            <main className='services'>
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
                <Grid/>
                <section className='background2'>
                    <div>
                        <img src={img} alt="" />
                        <div>
                            <div>
                                <p>Process</p>
                            </div>
                            <h2>Our Consuting Service Development</h2>
                            <div>
                                <div>
                                    <img src={kashelek} alt="" />
                                    <div>
                                        <h3>Banking and Finance</h3>
                                        <p>Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas.</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={shesterenki} alt="" />
                                    <div>
                                        <h3>Logistic and Transportation</h3>
                                        <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes.</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={Vector} alt="" />
                                    <div>
                                        <h3>Trading</h3>
                                        <p>Uniquely matrix economically sound value through cooperative technology parallel task fully researched data and enterprise.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background3'>
                    <div>
                        <div>
                            <p>Pricing</p>
                        </div>
                        <h2>Our Pricing Plan</h2>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <h3>Basic Plan</h3>
                                                <p>The argument in favor of using to filler text goes something.</p>
                                            </div>
                                            <div>
                                                <p>$35</p>
                                                <div>
                                                    <p>Monthly</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>24/7 system monitoring</p>
                                        </div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>Security management</p>
                                        </div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>Secure finance backup</p>
                                        </div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>Remote support</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Get This Plan</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <h3>Standard Plan</h3>
                                                <p>The argument in favor of using to filler text goes something.</p>
                                            </div>
                                            <div>
                                                <p>$56</p>
                                                <div>
                                                    <p>Monthly</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>24/7 system monitoring</p>
                                        </div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>Security management</p>
                                        </div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>Secure finance backup</p>
                                        </div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>Remote support</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Get This Plan</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <h3>Standard Plan</h3>
                                                <p>The argument in favor of using to filler text goes something.</p>
                                            </div>
                                            <div>
                                                <p>$75</p>
                                                <div>
                                                    <p>Monthly</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>24/7 system monitoring</p>
                                        </div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>Security management</p>
                                        </div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>Secure finance backup</p>
                                        </div>
                                        <div>
                                            <img src={strelochki} alt="" />
                                            <p>Remote support</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Get This Plan</p>
                                    </div>
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
import './Home2.scss'
import Header from '../../Header/Header/Header'
import icon from './Home_assets/Icon.png'
import img from './Home_assets/Image.png'

export default function Home2(){
    return(
        <>
            <Header/>
            <main className='home2'>
                <section className='background1'>
                    <div>
                        <div>
                            <div>
                                <p>Hello’ i Am</p>
                            </div>
                            <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                            <div>
                                <img src={icon} alt="" />
                                <p>Book a Meeting</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h3>Finance & Restructuring</h3>
                                        <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                        <div>
                                            <p>Our Services</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>Our Approach</h3>
                                        <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                        <div>
                                            <p>More About</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>Consultalk Result</h3>
                                        <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                        <div>
                                            <p>Explore Our Solution</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
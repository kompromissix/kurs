import './Team_Single.scss'
import Header_All from '../../../Header/Header_All/Header_All'
import Footer from '../../../Footer/Footer1/Footer'
import m2 from '../Team_assets/m2.png'
import Twitter from '../Team_assets/Twitter2.png'
import Instagram from '../Team_assets/Instagram2.png'
import In from '../Team_assets/In.png'
import Facebook from '../Team_assets/Facebook2.png'

export default function Team_Single_five(){
    return(
        <>
            <Header_All/>
            <main className='Team_Single'>
                <section className='background1'>
                    <div>
                        <div>
                            <img src={m2} alt="" />
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h2>Ryan Jackson</h2>
                                        <h3>CEO at Company</h3>
                                    </div>
                                    <hr />
                                    <div>
                                        <img src={Facebook} alt="" />
                                        <img src={Instagram} alt="" />
                                        <img src={Twitter} alt="" />
                                        <img src={In} alt="" />
                                    </div>
                                </div>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</p>
                            </div>
                            <hr />
                            <div>
                                <h2>Past experience</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <div>
                            <h3>Subscribe Our Newsletter</h3>
                            <p>Build stronger Customer Relationships with Consultalk</p>
                        </div>
                        <div>
                            <input type="text" placeholder='your mail address'/>
                            <button type="button">
                                <p>Subscribe</p>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
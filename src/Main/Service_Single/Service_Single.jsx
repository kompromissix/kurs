import './Service_Single.scss'
import left from './Service_Single_assets/left.png'
import right from './Service_Single_assets/right.png'
import Icon1 from './Service_Single_assets/Icon1.png'
import Icon2 from './Service_Single_assets/Icon2.png'
import Icon3 from './Service_Single_assets/Icon3.png'
import Icon4 from './Service_Single_assets/Icon4.png'
import Icon5 from './Service_Single_assets/Icon5.png'
import Image from './Service_Single_assets/Image.png'
import Image2 from './Service_Single_assets/Image2.png'
import img1 from './Service_Single_assets/1.png'
import img2 from './Service_Single_assets/2.png'
import img3 from './Service_Single_assets/3.png'
import img4 from './Service_Single_assets/4.png'
import img5 from './Service_Single_assets/5.png'
import img6 from './Service_Single_assets/6.png'
import phone from './Service_Single_assets/phone.png'
import clock from './Service_Single_assets/clock.png'
import kart from './Service_Single_assets/kart.png'
import galochka from './Service_Single_assets/galochka.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header_All from '../../Header/Header_All/Header_All';
import Footer from '../../Footer/Footer1/Footer';
import { useState } from 'react'
import { ans } from './data'

function Question(answer){
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = () => {
        setIsExpanded(!isExpanded); // Меняем состояние на противоположное
    };
    return(
        <>
            <div>
                <div>
                    <h3>{answer.why}</h3>
                    <button onClick={handleClick}>{isExpanded ? <p>-</p> : <p>+</p>}</button>
                </div>
                <div>
                    {isExpanded && <p>{answer.tway}</p>}
                </div>
            </div>
            <hr />
        </>
    )
}

export default function Service_Single(){
    return(
        <>
            <Header_All/>
            <main className='Service_Single'>
                <section className='background1'>
                    <div>
                        <div>
                            <div>
                                <p>Service sINGLE</p>
                            </div>
                            <h2>Services Details</h2>
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <div>
                            <div>
                                <img src={Icon1} alt="" />
                                <h2>Financial Projections</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div>
                                <button type="button" className='custom-prev'>
                                    <img src={left} alt="" />
                                </button>
                                <button type="button" className='custom-next'>
                                    <img src={right} alt="" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={4} navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev', }} onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}>
                                <SwiperSlide>
                                    <div className='card_slide_Service_Single'>
                                        <div>
                                            <img src={Icon2} alt="" />
                                            <h3>The Balance Sheet</h3>
                                            <p>The Balance Sheet is a summary of the assets and liabilities and equity of a business at a specific point of time.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card_slide_Service_Single'>
                                        <div>
                                            <img src={Icon3} alt="" />
                                            <h3>The Balance Sheet</h3>
                                            <p>The Balance Sheet is a summary of the assets and liabilities and equity of a business at a specific point of time.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card_slide_Service_Single'>
                                        <div>
                                            <img src={Icon4} alt="" />
                                            <h3>The Balance Sheet</h3>
                                            <p>The Balance Sheet is a summary of the assets and liabilities and equity of a business at a specific point of time.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card_slide_Service_Single'>
                                        <div>
                                            <img src={Icon5} alt="" />
                                            <h3>The Balance Sheet</h3>
                                            <p>The Balance Sheet is a summary of the assets and liabilities and equity of a business at a specific point of time.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card_slide_Service_Single'>
                                        <div>
                                            <img src={Icon4} alt="" />
                                            <h3>The Balance Sheet</h3>
                                            <p>The Balance Sheet is a summary of the assets and liabilities and equity of a business at a specific point of time.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card_slide_Service_Single'>
                                        <div>
                                            <img src={Icon5} alt="" />
                                            <h3>The Balance Sheet</h3>
                                            <p>The Balance Sheet is a summary of the assets and liabilities and equity of a business at a specific point of time.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className='background3'>
                    <div>
                        <img src={Image} alt="" />
                        <div>
                            <div>
                                <p>WE'LL WORK WITH YOU</p>
                            </div>
                            <h2>What To Expect</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div>
                                <div>
                                    <img src={galochka} alt="" />
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</p>
                                </div>
                                <div>
                                    <img src={galochka} alt="" />
                                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background4'>
                    <div>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                </section>
                <section className='background5'>
                    <div>
                        <div>
                            <div>
                                <p>Our History</p>
                            </div>
                            <h2>Strategy for Every Stage in the Client's Journey</h2>
                        </div>
                        <div>
                            <iframe width="832" height="319" src="https://rutube.ru/play/embed/d62dd0bb04605e0921cde020dbc8373f/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>
                </section>
                <section className='background6'>
                    <div>
                        <div>
                            <div>
                                <p>Proccess</p>
                            </div>
                            <h2>Contact Us. It’s Easy.</h2>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
                            <div>
                                <div>
                                    <img src={phone} alt="" />
                                    <div>
                                        <p>Call Today</p>
                                        <h3>+1 800 100 900</h3>
                                    </div>
                                </div>
                                <div>
                                    <img src={clock} alt="" />
                                    <div>
                                        <p>Monday To Friday</p>
                                        <h3>9AM - 5PM</h3>
                                    </div>
                                </div>
                                <div>
                                    <img src={kart} alt="" />
                                    <div>
                                        <p>USA Office</p>
                                        <h3>195 Devonshire St Boston, MA 02110</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={Image2} alt="" />
                    </div>
                </section>
                <section className='background7'>
                    <div>
                        <div>
                            <div>
                                <p>FAQ</p>
                            </div>
                            <h2>Customer Questions</h2>
                            <div>
                                {ans.map((way) =>(
                                    <Question {...way}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
import './Home2.scss'
import Header from '../../Header/Header/Header'
import icon from './Home_assets/Icon.png'
import img from './Home_assets/Image.png'
import photo from './Home_assets/Photka.png'
import icon1 from './Home_assets/Icon1.png'
import icon2 from './Home_assets/Icon2.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Left from './Home_assets/left.png'
import Right from './Home_assets/Right.png'
import Sphoto1 from './Home_assets/sphoto1.png'
import Sphoto2 from './Home_assets/sphoto2.png'
import Sphoto3 from './Home_assets/sphoto3.png'
import Sphoto4 from './Home_assets/sphoto4.png'
import Cgart1 from './Home_assets/Cgart.png'
import Cgart2 from './Home_assets/Cgart2.png'
import Cgart3 from './Home_assets/Cgart3.png'
import green from './Home_assets/1.png'
import orange from './Home_assets/2.png'
import Iconb1 from './Home_assets/Iconb1.png'
import Iconb2 from './Home_assets/Iconb2.png'
import Iconb3 from './Home_assets/Iconb3.png'
import Iconb4 from './Home_assets/Iconb4.png'
import Mushik1 from './Home_assets/Mushik1.png'
import Mushik2 from './Home_assets/Mushik2.png'
import Mushik3 from './Home_assets/Mushik3.png'
import kav from './Home_assets/kav.png'

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
                                    <img src={img} alt="" />
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
                <section className='background2'>
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
                                    <img src={icon1} alt="" />
                                    <p>Buschemia@gmailcom</p>
                                </div>
                                <hr />
                                <div>
                                    <img src={icon2} alt="" />
                                    <p>(001) 5648 6584</p>
                                </div>
                            </div>
                            <div>
                                <p>Make An Appointment</p>
                            </div>
                        </div>
                        <img src={photo} alt="" />
                    </div>
                </section>
                <section className='background3'>
                    <div>
                        <div>
                            <p>Services</p>
                        </div>
                        <h2>Get Control Over Your Business I take your finance to next level</h2>
                        <div>
                            <div>
                                <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={3.8} navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev', }} onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}>
                                    <SwiperSlide>
                                        <div className='card'>
                                            <div>
                                                <img src={Sphoto1} alt="" />
                                                <div>
                                                    <h3>Audit & Evaluation</h3>
                                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                                    <div>
                                                        <p>Learn More</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className='card'>
                                            <div>
                                                <img src={Sphoto2} alt="" />
                                                <div>
                                                    <h3>Audit & Evaluation</h3>
                                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                                    <div>
                                                        <p>Learn More</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className='card'>
                                            <div>
                                                <img src={Sphoto3} alt="" />
                                                <div>
                                                    <h3>Audit & Evaluation</h3>
                                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                                    <div>
                                                        <p>Learn More</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className='card'>
                                            <div>
                                                <img src={Sphoto4} alt="" />
                                                <div>
                                                    <h3>Audit & Evaluation</h3>
                                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                                    <div>
                                                        <p>Learn More</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='card'>
                                            <div>
                                                <img src={Sphoto1} alt="" />
                                                <div>
                                                    <h3>Audit & Evaluation</h3>
                                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                                    <div>
                                                        <p>Learn More</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className='card'>
                                            <div>
                                                <img src={Sphoto2} alt="" />
                                                <div>
                                                    <h3>Audit & Evaluation</h3>
                                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                                    <div>
                                                        <p>Learn More</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className='card'>
                                            <div>
                                                <img src={Sphoto3} alt="" />
                                                <div>
                                                    <h3>Audit & Evaluation</h3>
                                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                                    <div>
                                                        <p>Learn More</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       <div className='card'>
                                            <div>
                                                <img src={Sphoto4} alt="" />
                                                <div>
                                                    <h3>Audit & Evaluation</h3>
                                                    <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                                                    <div>
                                                        <p>Learn More</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div>
                                <div>
                                    <button type="button" className='custom-prev'>
                                        <img src={Left} alt="" />
                                    </button>
                                </div>
                                <div>
                                    <button type="button" className='custom-next'>
                                        <img src={Right} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background4'>
                    <div>
                        <div>
                            <div>
                                <p>Experiance</p>
                            </div>
                            <h2>More than 25 years of experience</h2>
                            <p>3000+ our clients are insured around the World</p>
                        </div>
                        <div>
                            <div>
                                <img src={Cgart1} alt="" />
                                <h3>Consistency</h3>
                            </div>
                            <div>
                                <img src={Cgart2} alt="" />
                                <h3>Improvement</h3>
                            </div>
                            <div>
                                <img src={Cgart3} alt="" />
                                <h3>Branching</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background5'>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>Work</p>
                                </div>
                                <h2>My latest project</h2>
                            </div>
                            <div>
                                <p>More Work</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Taxes & Efficiency</h3>
                                            <p>Business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Taxes & Efficiency</h3>
                                            <p>Business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Taxes & Efficiency</h3>
                                            <p>Business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Taxes & Efficiency</h3>
                                            <p>Business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Taxes & Efficiency</h3>
                                            <p>Business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Taxes & Efficiency</h3>
                                            <p>Business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Taxes & Efficiency</h3>
                                            <p>Business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background6'>
                    <div>
                        <div>
                            <div>
                                <p>Information</p>
                            </div>
                            <h2>My Resume</h2>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <p>Education</p>
                                </div>
                                <div>
                                    <img src={green} alt="" />
                                    <div>
                                        <h4>Finance Сourse - New York (2018 - 2019)</h4>
                                        <h3>Financial Projections</h3>
                                        <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={green} alt="" />
                                    <div>
                                        <h4>Finance Сourse - New York (2018 - 2019)</h4>
                                        <h3>Financial Projections</h3>
                                        <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Education</p>
                                </div>
                                <div>
                                    <div>
                                        <h4>Finance Сourse - New York (2018 - 2019)</h4>
                                        <h3>Financial Projections</h3>
                                        <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                                    </div>
                                    <img src={orange} alt="" />
                                </div>
                                <div>
                                    <div>
                                        <h4>Finance Сourse - New York (2018 - 2019)</h4>
                                        <h3>Financial Projections</h3>
                                        <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                                    </div>
                                    <img src={orange} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background7'>
                    <div>
                        <div>
                            <div>
                                <img src={Iconb1} alt="" />
                                <div>
                                    <h3>1,542+</h3>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <img src={Iconb2} alt="" />
                                <div>
                                    <h3>182</h3>
                                    <p>Expert Team</p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <img src={Iconb3} alt="" />
                                <div>
                                    <h3>285</h3>
                                    <p>Activate Products</p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <img src={Iconb4} alt="" />
                                <div>
                                    <h3>28+</h3>
                                    <p>Awards Winning</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={1} navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev', }} onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}>
                                <SwiperSlide>
                                    <div>
                                        <div>
                                            <div>
                                                <img src={Mushik1} alt="" />
                                                <div>
                                                    <p>Kathleen Smith</p>
                                                    <div>
                                                        <p>Web Designer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque habitant morbil.</p>
                                            </div>
                                            <img src={kav} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <div>
                                            <div>
                                                <img src={Mushik2} alt="" />
                                                <div>
                                                    <p>John Martin</p>
                                                    <div>
                                                        <p>Web Designer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque aservices, and become a multinational firm, offering solutions Worldwide.</p>
                                            </div>
                                            <img src={kav} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <img src={Mushik3} alt="" />
                                                    <div>
                                                        <p>Natalia Duke</p>
                                                        <div>
                                                            <p>Web Designer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus  turpis.  pellentesque habitant morbil.</p>
                                                </div>
                                                <img src={kav} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div>
                                <button type="button" className='custom-prev'>
                                    <img src={Prev} alt="" />
                                    <p>Prev</p>
                                </button>
                                <button type="button" className='custom-next'>
                                    <p>Next</p>
                                    <img src={Next} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
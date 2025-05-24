import './Case_Study.scss'
import Header_All from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState, useRef } from 'react'

function Swipe(){
    return(
        <>
            <div className='swipe'>
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
                </div>
            </div>
        </>
    )
}

export default function Case_Study(){
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveIndex(index);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };
    
    return(
        <>
            <Header_All/>
            <main className='Case_Study'>
                <section className='background1'>
                    <div>
                        <div>
                            <div>
                                <p>Case Studies</p>
                            </div>
                            <h2>Case Studies</h2>
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <div className="tabs">
                            {["All", "Taxes & Efficiency", "Investment banking", "Financial Plan", "Audit & Evaluation"].map((tab, index) => (
                                <div key={index} className={`tab ${activeIndex === index ? "active" : ""}`} onClick={() => handleTabClick(index)} >
                                    <p>{tab}</p>
                                </div>
                            ))}
                        </div>
                        <div className='swiperss'>
                            <Swiper modules={[Navigation, A11y, Mousewheel]} mousewheel={false} simulateTouch={false} onSwiper={(swiper) => (swiperRef.current = swiper)} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} loop={true} spaceBetween={50} slidesPerView={1} >
                                <SwiperSlide>
                                    <Swipe/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Swipe/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Swipe/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Swipe/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Swipe/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
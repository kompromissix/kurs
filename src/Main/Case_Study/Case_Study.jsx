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
import axios from 'axios';
import phone1 from './Case_Study_assets/phone1.png'
import kart from './Case_Study_assets/kart.png'
import clock from './Case_Study_assets/clock.png'

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
        const [email, setEmail] = useState('');
    const [isLoadingSubscribe, setIsLoadingSubscribe] = useState(false);
    const [isLoadingContact, setIsLoadingContact] = useState(false);
    const [subscribeError, setSubscribeError] = useState(null);
    const [contactError, setContactError] = useState(null);
    const [successSubscribe, setSuccessSubscribe] = useState(false);
    const [successContact, setSuccessContact] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleContactSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.mail) {
            setContactError('Please enter your email');
            return;
        }

        setIsLoadingContact(true);
        setContactError(null);
        setSuccessContact(false);

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.status === 200) {
                setSuccessContact(true);
                setFormData({
                    name: '',
                    mail: '',
                    phone: '',
                    company: '',
                    message: ''
                });
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || 
                               err.response?.data?.error || 
                               err.message || 
                               'An error occurred while sending your message';
            setContactError(errorMessage);
            console.error('Contact form error:', err);
        } finally {
            setIsLoadingContact(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

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
                <section className='background3'>
                    <div className="container">
                        <div>
                            <div>
                                <p>Proccess</p>
                            </div>
                            <h2>Contact Us. It’s Easy.</h2>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
                            <div>
                                <div>
                                    <img src={phone1} alt="" />
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
                        <form onSubmit={handleContactSubmit} className="contact-form">
                            <div>
                                <div>
                                    <p>Full Name</p>
                                    <input  type="text"  id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="john david" disabled={isLoadingContact}
                                    />
                                </div>
                                <div>
                                    <p>Email*</p>
                                    <input  type="email"  id="mail" name="mail" value={formData.mail} onChange={handleInputChange} placeholder="consult@mail.com" disabled={isLoadingContact} required
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Phone</p>
                                    <input  type="tel"  id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+008 654 231" disabled={isLoadingContact}
                                    />
                                </div>
                                <div>
                                    <p>Company (optional)</p>
                                    <input  type="text"  id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="yourcompany.com" disabled={isLoadingContact}
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Message</p>
                                <input  id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Briefly tell us about your project and your current goals. How can we help you?" disabled={isLoadingContact} rows="5"/>
                            </div>
                            <button type="submit" disabled={isLoadingContact} className="submit-btn">
                                {isLoadingContact ? 'Sending...' : 'Send Message'}
                            </button>
                            {contactError && !successContact && (
                                <p className="error-message">{contactError}</p>
                            )}
                            {successContact && (
                                <p className="success-message">Your message has been sent successfully!</p>
                            )}
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
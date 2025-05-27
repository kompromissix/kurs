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
import planet from './Home_assets/planet.png'
import stat from './Home_assets/stat.png'
import stat2 from './Home_assets/stat2.png'
import pes from './Home_assets/pes.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import Prev from './Home_assets/Prev.png'
import Next from './Home_assets/Next.png'
import Mushik from './Home_assets/mushik.png'
import pic from './Home_assets/pic.png'
import Phone from './Home_assets/Phone.png'
import woman from './Home_assets/woman.png'
import alax from './Home_assets/alax.png'
import icon_m from './Home_assets/icon-m.png'
import icon_w from './Home_assets/icon-w.png'
import Header_All from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'
import axios from 'axios';
import phone1 from './Home_assets/phone1.png'
import kart from './Home_assets/kart.png'
import clock from './Home_assets/clock.png'

export function Black(){
    return(
        <>
            <section className='background9'>
                <div>
                    <div>
                        <div>
                            <p>Book Now</p>
                        </div>
                        <h2>Better Consult, <span>Better</span> Results</h2>
                        <p>Our software development agency has a growth up to 30% per each year. If you are result-oriented, not afraid to take initiative – drop us a note and join our team!</p>
                        <div>
                            <img src={Phone} alt="" />
                            <p>+800 1234 654 </p>
                        </div>
                    </div>
                    <img src={pic} alt="" />
                </div>
            </section>
        </>
    )
}
export function Grid(){
    return(
        <>
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
        </>
    )
}

export default function Home(){
    const [currentSlide, setCurrentSlide] = useState(0);
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
    return(
        <>
            <Header_All/>
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
                <Grid/>
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
                                    <div className='one'>
                                        <h4>1</h4>
                                    </div>
                                    <div>
                                        <h3>Setup Account</h3>
                                        <p>We understand the importance of approaching each work integrally.</p>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div className='two'>
                                        <h4>2</h4>
                                    </div>
                                    <div>
                                        <h3>Consult with us</h3>
                                        <p>Increase social reach and productivity with our App Directory, a collection.</p>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div className='three'>
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
                            <div>
                                <p>Growing with our clients</p>
                            </div>
                            <h2>30 Years of Experience</h2>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps. <br /> <br /> Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                            <div>
                                <div>
                                    <div>
                                        <img src={pes} alt="" />
                                        <h3>Consistency</h3>
                                        <p>Podcasting operational change management  workflow.</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={stat} alt="" />
                                        <h3>Improvement</h3>
                                        <p>Podcasting operational change management  workflow.</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={planet} alt="" />
                                        <h3>Branching</h3>
                                        <p>Podcasting operational change management  workflow.</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={stat2} alt="" />
                                        <h3>Company Growth</h3>
                                        <p>Podcasting operational change management  workflow.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background6'>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            <p>Proccess</p>
                        </div>
                        <div>
                            <h2>Our client, global analytical techno company, wanted to build market.</h2>
                            <div>
                                <p>More Gallery</p>
                            </div>
                        </div>
                        <div>
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
                    </div>
                </section>
                <section className='background7'>
                    <div>
                        <div>
                            <h3>1128+</h3>
                            <p>Successful Work</p>
                        </div>
                        <div>
                            <h3>908+</h3>
                            <p>Team member</p>
                        </div>
                        <div>
                            <h3>258+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div>
                            <h3>564+</h3>
                            <p>Creative Idea</p>
                        </div>
                    </div>
                </section>
                <section className='background8'>
                    <div>
                        <div>
                            <p>Client Feedback</p>
                        </div>
                        <h2>“Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit, sed do eiusmod</span> tempor incididunt ut labore et dolore”</h2>
                        <div>
                            <button type="button" className='custom-prev'>
                                <img src={Prev} alt="" />
                                <p>Prev</p>
                            </button>
                            <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={1} navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev', }} onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}>
                                <SwiperSlide>
                                    <img src={Mushik} alt="" />
                                    <div>
                                        <h3>Kathleen Smith</h3>
                                        <h4>Web Designer</h4>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Mushik} alt="" />
                                    <div>
                                        <h3>Kathleen Smith</h3>
                                        <h4>Web Designer</h4>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Mushik} alt="" />
                                    <div>
                                        <h3>Kathleen Smith</h3>
                                        <h4>Web Designer</h4>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <button type="button" className='custom-next'>
                                <p>Next</p>
                                <img src={Next} alt="" />
                            </button>
                        </div>
                    </div>
                </section>
                <Black/>
                <section className='background10'>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>BLOG</p>
                                </div>
                                <h2>Take a look at our latest articles & resources</h2>
                            </div>
                            <div>
                                <p>More News</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={woman} alt="" />
                                <h3>Consulting Fees Study 2019 (And How To Raise Your Rates)</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                                <div>
                                    <hr />
                                    <div>
                                        <div>
                                            <img src={icon_m} alt="" />
                                            <div>
                                                <p>John Carter</p>
                                                <hr />
                                                <p>September 1, 2022</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Read More</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div>
                                <img src={alax} alt="" />
                                <h3>What is growth hacking and how to apply it to your startup</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                                <div>
                                    <hr />
                                    <div>
                                        <div>
                                            <img src={icon_w} alt="" />
                                            <div>
                                                <p>Nayra Melson</p>
                                                <hr />
                                                <p>September 1, 2022</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Read More</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background11'>
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
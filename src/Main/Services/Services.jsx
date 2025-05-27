import './Services.scss'
import Header_All from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'
import { Grid } from '../Home/Home'
import img from './Services_assets/Image.png'
import kashelek from './Services_assets/kashelek.png'
import shesterenki from './Services_assets/shesterenki.png'
import Vector from './Services_assets/Vector.png'
import strelochki from './Services_assets/strelochki.png'
import axios from 'axios';
import phone1 from './Services_assets/phone1.png'
import kart from './Services_assets/kart.png'
import clock from './Services_assets/clock.png'
import { useState } from 'react'
export default function Services(){
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
                <section className='background5'>
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
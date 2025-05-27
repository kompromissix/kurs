import './Contact.scss'
import phone1 from './Contact_assets/phone1.png'
import mail from './Contact_assets/mail.png'
import loc from './Contact_assets/loc.png'
import phone from './Contact_assets/phone.png'
import kart from './Contact_assets/kart.png'
import clock from './Contact_assets/clock.png'
import img from './Contact_assets/Image.png'
import Header_All from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'
import axios from 'axios';
import { useState } from 'react'

export default function Contact(){
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

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!email) {
        setError('Please enter your email');
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.post('http://localhost:5000/api/subscribe', { email });
        if (response.status === 200) {
          setSuccess(true);
          setEmail('');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred while subscribing');
      } finally {
        setIsLoading(false);
      }
    };

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
            <main className='contact'>
                <section className='background1'>
                    <div>
                        <div>
                            <div>
                                <p>Blog</p>
                            </div>
                            <h2>Latest Blogs & News</h2>
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <img src={img} alt="" />
                        <div>
                            <div>
                                <p>Let’s talk</p>
                            </div>
                            <h2>Get In Touch With Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <div>
                                <div>
                                    <div>
                                        <img src={phone1} alt="" />
                                    </div>
                                    <div>
                                        <h3>Have Any Question?</h3>
                                        <h5>Free +01 238 543 987</h5>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={mail} alt="" />
                                    </div>
                                    <div>
                                        <h3>Write Email</h3>
                                        <h5>Info@consultalk.com</h5>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={loc} alt="" />
                                    </div>
                                    <div>
                                        <h3>Visit Anytime</h3>
                                        <h5>King Street, Prior Lake, New York.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='background3'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h3>Subscribe Our Newsletter</h3>
                            <p>Build stronger Customer Relationships with Consultalk</p>
                        </div>
                        <div>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your mail address"disabled={isLoading}/>
                            <button type="submit" disabled={isLoading}>
                              {isLoading ? 'Subscribing...' : 'Subscribe'}
                            </button>
                        </div>
                    </form>
                </section>
                <section className='background4'>
                    <div className="container">
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
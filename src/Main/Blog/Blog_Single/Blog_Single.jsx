import './Blog_Single.scss'
import Header_All from '../../../Header/Header_All/Header_All'
import Footer from '../../../Footer/Footer1/Footer'
import img from './Blog_Single_assets/Image.png'
import skob from './Blog_Single_assets/skob.png'
import icon from './Blog_Single_assets/icon.png'
import Facebook from './Blog_Single_assets/Facebook.png'
import Instagram from './Blog_Single_assets/Instagram.png'
import Twiter from './Blog_Single_assets/Twiter.png'

export default function Blog_Single(){
    return(
        <>
            <Header_All/>
            <main className='Blog_Single'>
                <section className='background1'>
                    <div>
                        <div>
                            <div>
                                <p>September 1, 2022    </p>
                            </div>
                            <h2>Essential Guidelines To Grow Your Corporate Business With Us</h2>
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <div>
                            <h3>Best Business Consulting Services</h3>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                        </div>
                        <img src={img} alt="" />
                        <div>
                            <div>
                                <h3>The Digital Assets For All</h3>
                                <p>Appropriately empower dynamic leadership skills after business portals. Globally my carminate interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.</p>
                            </div>
                            <ul>
                                <li>Dynamically target high-payoff intellectual capital for customized</li>
                                <li>Interactively procrastinate high-payoff content</li>
                                <li>Credibly reinter mediate backend ideas for cross-platform models</li>
                            </ul>
                        </div>
                        <div>
                            <img src={skob} alt="" />
                            <h4>“The job market of the future will consist of those jobs that robots cannot perform. Our blue-collar work is pattern recognition, making sense of what you see. Gardeners will still have jobs because every garden is different.”</h4>
                        </div>
                        <div>
                            <h3>Make real time a wireframes services</h3>
                            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                            <div>
                                <p>1.It brings the right people together with all the right information and tools to get work done</p>
                                <p>2.We provide operational efficiency, data security, and flexible scale</p>
                                <p>3.Your best work, together in one package that works seamlessly from your computer</p>
                                <p>4.Delivers the tools you need to save time Improve field performance always</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={icon} alt="" />
                                <div>
                                    <div>
                                        <h3>Nayra Melson</h3>
                                        <h5>Senior Manager</h5>
                                    </div>
                                    <p>Leads the global expansion of the designerz brand and overseas investment in solutions and innovation. Renowned coder and an authority on matters of industrial experience & interface.</p>
                                    <div>
                                        <img src={Facebook} alt="" />
                                        <img src={Instagram} alt="" />
                                        <img src={Twiter} alt="" />
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
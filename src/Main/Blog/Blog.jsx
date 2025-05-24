import './Blog.scss'
import Header_All from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'
import icon_m from './Blog_assets/icon-m.png'
import icon_w from './Blog_assets/icon-w.png'
import Image1 from './Blog_assets/Image1.png'
import Image2 from './Blog_assets/Image2.png'
import Image3 from './Blog_assets/Image3.png'
import Image4 from './Blog_assets/Image4.png'
import Image5 from './Blog_assets/Image5.png'
import Image6 from './Blog_assets/Image6.png'
import ruki from './Blog_assets/ruki.png'

export default function Blog(){
    return(
        <>
            <Header_All/>
            <main className='Blog'>
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
                                <img src={Image1} alt="" />
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
                                <img src={Image2} alt="" />
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
                            <div>
                                <img src={Image3} alt="" />
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
                                <img src={Image4} alt="" />
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
                            <div>
                                <img src={Image5} alt="" />
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
                                <img src={Image6} alt="" />
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
                <section className='background3'>
                    <div>
                        <div>
                            <div>
                                <p>Contact</p>
                            </div>
                            <h2>Ready To Talk?</h2>
                            <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque  pellentesque habitant morbi tristique.</p>
                            <div>
                                <input type="text" placeholder='your mail address'/>
                                <button type="button">
                                    <p>Send Message</p>
                                </button>
                            </div>
                        </div>
                        <img src={ruki} alt="" />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
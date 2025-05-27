import './Not_Found.scss'
import Header_All from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'

export default function Not_Found(){
    return(
        <>
            <Header_All/>
            <main className='Not_Found'>
                <section className='background1'>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h2>404</h2>
                                    <h3>Page Not Found</h3>
                                    <p>This Page Doesn't or was removed! We suggest you back to home</p>
                                </div>
                                <div>
                                    <p>Back to home</p>
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
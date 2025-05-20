import './Services.scss'
import Header_All from '../../Header/Header_All/Header_All'
import Footer from '../../Footer/Footer1/Footer'
import { Grid } from '../Home/Home'
export default function Services(){
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
            </main>
            <Footer/>
        </>
    )
}
import logo from './Footer_assets/Logo.png'
import Pattern from './Footer_assets/Pattern.png'
import './Footer.scss'

export default function Footertwo(){
    return(
        <>
            <footer className="ftwo">
                <div>
                    <div>
                        <div>
                            <img src={logo} alt="" />
                            <img src={Pattern} alt="" />
                        </div>
                        <div>
                            <h3>Help Link</h3>
                            <ul>
                                <li>Customers Services</li>
                                <li>IT Department</li>
                                <li>About Our Company</li>
                                <li>Business Growth</li>
                                <li>Make An Appointment</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Utility Pages</h3>
                            <ul>
                                <li>Styleguide</li>
                                <li>Start Here</li>
                                <li>404 Not Found</li>
                                <li>Password Protected</li>
                                <li>Licenses</li>
                                <li>Changelog</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Address</h3>
                            <div>
                                <div>
                                    <h4>Business Consulting.</h4>
                                    <p>Graaf Florisstraat 22A,3021 CH RotterdamNetherlands</p>
                                </div>
                                <hr />
                                <div>
                                    <h4>Financial Consulting.</h4>
                                    <p>365 Gran Via de CortsCatalanes, BA 08015</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Work inquiries</h3>
                            <p>Interested in working with us? <br /><span>info@consulting.com</span></p>
                            <p>Any question call <br /><span>(01) 25444 32001</span></p>
                            <h5>Fb./Ig. /Tw. /Be.</h5>
                        </div>
                    </div>
                    <div>
                        <hr />
                        <p>©2020 Consultalk. All rights reserved | Terms of Service | Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
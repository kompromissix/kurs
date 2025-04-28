import './Header.scss'
import logo from './Header_assets/Logo.png'
import phone from './Header_assets/Icon.png'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div>
                        <img src={logo} alt="" />
                        <h1>AskExperts</h1>
                    </div>
                    <ul>
                        <Link to='/Home'>
                            <li>Home</li>
                        </Link>
                        <Link to='/Services'>
                            <li>Pages</li>
                        </Link>
                        <Link to='/Pages'>
                            <li>Services</li>
                        </Link>
                        <Link to='/Work'>
                            <li>Work</li>
                        </Link>
                        <Link to='/Pages'>
                            <li>Pages</li>
                        </Link>
                        <Link to='/Contact'>
                            <li>Contact</li>
                        </Link>
                    </ul>
                    <div>
                        <div>
                            <div>
                                <img src={phone} alt="" />
                            </div>
                            <p>+ (888) 452 1505</p>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
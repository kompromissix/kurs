import './Header.scss'
import logo from './Header_assets/Logo.png'
import phone from './Header_assets/Icon.png'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        <Link to='/Home'>
                            <li>Home</li>
                        </Link>
                        <Link to='/Services'>
                            <li>Services</li>
                        </Link>
                        <Link to='/Pages'>
                            <li>Pages</li>
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
                            <a>+ (888) 452 1505</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
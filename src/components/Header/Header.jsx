import React from 'react'
import './Header.scss'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
function Header() {
    const history = useHistory()
    return (
        <div className="header flex h-24 t">
            <div className="flex">
                <img src={Logo} alt="logo" onClick={() => history.push('/')}/>
                <div className="nav-items-left text-gray-600">
                    <ul className="">
                        <li><Link to="/">Product</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                        <li><Link to="/">Enterprise</Link></li>
                        <li><Link to="/">Support</Link></li>

                    </ul>
                </div>
            </div>
        
            <div>
                <div className="nav-items-right pl-64 text-gray-600">             
                     <ul className="">
                        <li><Link to="/contact-sales">Contact Sales</Link></li>
                        <li className="pl-8 pr-10"><Link to="/signin">Login</Link></li>
                    </ul>
                     
                </div>
            </div>
            
            <button className="try-for-free">
                 Try For Free
            </button>
        </div>
    )
}

export default Header

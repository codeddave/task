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
                        <li><Link>Product</Link></li>
                        <li><Link>Pricing</Link></li>
                        <li><Link>Enterprise</Link></li>
                        <li><Link>Support</Link></li>

                    </ul>
                </div>
            </div>
        
            <div>
                <div className="nav-items-right pl-64 text-gray-600">             
                     <ul className="">
                        <li><Link to="/contact-sales">Contact Sales</Link></li>
                        <li className="pl-8 pr-10"><Link>Login</Link></li>
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

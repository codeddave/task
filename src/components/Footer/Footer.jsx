import React from 'react'
import './Footer.scss'
import Logo from '../../assets/images/logo.svg'

function Footer() {
    return (
        <div className="md:px-16 footer">
            <div>
                <div className="flex justify-between">
                    <img src={Logo} alt=""/>
                    <div className="select-language w-40 h-8 mt-8">
                        
                    </div>
                </div>

                <div className="flex md:justify-between md:flex-row flex-col">
                    <div className="flex flex-col">
                        <p>No 1 CRM solution in Africa</p>
                        <div className=" divide-x-2 divide-gray-400 flex pt-4 text-gray-600">
                            <p className="pr-2 ">Terms of use </p>
                            <p className=" pl-2"> Privacy Policy</p>
                        </div>
                    
                        <p className="pt-20">Get in touch</p>
                        <p className="pt-2">+234-80-000-0000</p>

                        <div>
                            icons
                        </div>
                    </div>

                    <div className="flex md:flex-row flex-col text-gray-600">
                        <div className="pr-16">
                            <h3 className="font-medium pb-4">PRODUCT</h3>
                            <ul>
                                <li>Features</li>
                                <li>Enterprise</li>
                                <li>Security</li>
                                <li>Trust</li>
                                <li>Customer Stories</li>
                                <li>Pricing</li>
                                <li>Integrations</li>
                                <li>Oneburner Partners</li>
                            </ul>
                        </div>

                        <div className="pr-16">
                            <h3 className="font-medium pb-4">COMPANY</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Careers</li>
                                <li>In the News</li>
                            </ul>

                        </div>
                        <div className="pr-16 ">
                            <h3 className="font-medium pb-4">ONEBURNER FOR TEAMS</h3>
                            <ul>
                                <li>Engineering</li>
                                <li>Financial Services</li>
                                <li>CRM and Sales</li>
                                <li>IT</li>
                                <li>Marketing</li>
                                 <li>Customer Support</li>
                                <li>Human Resources</li>
                                <li>Project Management</li>
                                <li>Remote Work</li>
                            </ul> 
                        </div>
                        <div>
                            <h3 className="font-medium pb-4">RESOURCES</h3>
                            <ul>
                                <li>Community</li>
                                <li>Guides</li>
                                <li>Templates</li>
                                <li>Video Tutorials</li>
                                <li>Professional Services</li>
                                <li>Knowledge Base</li>
                                <li>Blog</li>
                                <li>Webinars</li>
                                <li>Find a Partner</li>
                            </ul>
                        </div>
                    </div>




                </div>

            </div>
           
            <hr className="bg-gray-600 mt-24 mb-10"/>
            <p className="text-gray-600 pb-12 ">© 2020 Oneburner.com. All Rights Reserved. </p>
        </div>
    )
}

export default Footer

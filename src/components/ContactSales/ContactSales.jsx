import React from 'react'
import './ContactSales.scss'
function ContactSales() {
    return (
        <div className="bg-gray-100 py-40 px-18">
            <div className="flex justify-evenly" >

                <div className = "shadow-xl border  contact-form">
                    <form className="px-32 py-20">
                        <div className="flex justify-between">
                            <div>
                                <label >Last Name</label>
                                <input type="text" className="border border-gray-600 mt-2 w-44 h-10 "/>
                            </div>
                            <div className="ml-10">
                                 <label>First Name</label>
                                <input type="text"  className="border border-gray-600 mt-2 w-44 h-10 "/>
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                                 <label>Work Email</label>
                                <input type="text"  className="border border-gray-600 mt-2 w-full h-10 "/>
                        </div>
                        <div className="flex flex-col pt-4">
                                 <label>Phone Number</label>
                                <input type="text"  className="border border-gray-600 mt-2 w-full h-10 "/>
                        </div>
                        <div className="flex flex-col pt-4">
                                 <label>Product of Interest</label>
                                <input type="text"  className="border border-gray-600 mt-2 w-full h-10 "/>
                        </div>
                        <div className="flex justify-between pt-4">
                            <div>
                                <label>Company name</label>
                                <input type="text" className="border border-gray-600 mt-2 w-48 h-10 "/>
                            </div>
                            <div className="ml-10">
                                 <label>Company Size</label>
                                <input type="text"  className="border border-gray-600 mt-2 w-40 h-10 "/>
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                                 <label>How can we help you?</label>
                                 <textarea name="" id=""  rows="4" className="border border-gray-600 mt-2 rounded"></textarea>
                        </div>
                        <button className="w-full mt-8 py-6 rounded-full">
                            Contact Us
                        </button>
                    </form>
                </div>
                <div className="request-call pt-20"> 
                    <div>
                        <h3 className="text-4xl">Request a Call from an expert </h3>
                        <p className = "pt-10 text-lg text-gray-600">Having thoughts on which product works best for you?  Fill the form and our expert will reach out to you.</p>
                    </div>
                        <h3 className="pb-10 pt-20 text-4xl">Our offices around Africa </h3>
                    <div className="grid grid-cols-3  gap-x-7">

                            <div>
                                <p className="font-medium">NIGERIA</p>
                                <p className="text-base text-gray-600">33a, Adeola Odeku, Victoria 
                                Island, Lagos.
                                +234-(0)-8000000000
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">GHANA</p>
                                <p className="text-base text-gray-600">45, El-Senoussi Street, 
                                    Accra
                                    +233-(0)-277619819
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">SOUTH AFRICA</p>
                                <p className="text-base text-gray-600">474, Cheriton Drive, Port 
                                    Shepstone, Kwazulu-Natal
                                    +27-(0)-857926978
                                </p>
                            </div>
                
                    </div>
                    <div className="grid grid-cols-3  gap-x-8 pt-10">
                      
                            <div>
                                <p className="font-medium">EGYPT</p>
                                <p className="text-base text-gray-600">72, Gameat El-Dewal 
El-Arabia St., Giza.
+20-(0)-35924295
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">KENYA</p>
                                <p className="text-base text-gray-600">41, Enterprise Rd., Industrial
Area , Niarobi
+254-(0)-20536766
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">TUNISIA</p>
                                <p className="text-base text-gray-600">474, Cheriton Drive, Port 
                                    Shepstone, Kwazulu-Natal
                                    +27-(0)-857926978
                                </p>
                            </div>
                    </div>
                    <div className="grid grid-cols-3  gap-x-8 pt-10">
                      
                            <div>
                                <p className="font-medium">MALI</p>
                                <p className="text-base text-gray-600">22, Badalabougou Est.,
Bamako.
+223-(0)-78175387
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">TANZANIA</p>
                                <p className="text-base text-gray-600">Mbezi Beach, P.O.B: 70339,
Dar Salaam
+255-(0)-222120119
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">TOGO</p>
                                <p className="text-base text-gray-600" >10, E rue des Echis, 
Lome
+228-(0)-22229600
                                </p>
                            </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ContactSales

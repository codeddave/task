import React from 'react'
import LinkedIn from '../../assets/images/linkedIn.svg'
import Outlook from '../../assets/images/outlook.svg'
import Gmail from '../../assets/images/gmail.svg'
import "./SignIn.scss"

function SignIn() {
    return (
        <div className="flex text-center justify-center text-gray-700">
             <div className="pt-40 text-center  px-8 md:px-0">
                 <h1 className="text-4xl text-gray-800 ">Sign In</h1>
                    <p className="pt-4">Welcome back!</p>

                    <form className="pt-32 flex flex-col text-left">
                        <label htmlFor="">Email / Username</label>
                        <input type="text" className="border border-gray-600 mt-2 h-10 pl-2"/>

                        <label htmlFor="" className="pt-6">Password</label>
                        <input type="text" className="border border-gray-600 mt-2 h-10 pl-2"/>

                        <button className="py-6 login-btn mt-8">
                            Login
                        </button>                    
                </form>
                <p className="forgot text-center pt-8">Forgot Password?</p>
                <div className="pb-40 flex alt-signin ">
          
                       <p className="text-left ">-or sign in with : </p>
                       <div className="flex ">
                           <img src={Outlook} alt="" className="pl-4"/>
                           <img src={LinkedIn} alt="" className="w-12 h-8 pl-4"/>
                           <img src={Gmail} alt="" className="pl-4"/>
                        </div> 
                </div>
                <p className="pb-8 text-gray-500">© 2020 Oneburner.com. All Rights Reserved. </p>
            
             </div>
        </div>
    )
}

export default SignIn

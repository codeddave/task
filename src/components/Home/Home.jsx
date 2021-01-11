import React from 'react'
import LandingImage from '../../assets/images/landing.svg'
import Paystack from '../../assets/images/paystack.svg'
import Egyptair from '../../assets/images/egyptair.svg'
import Dangote from '../../assets/images/dangote.svg'
import Stanbic from '../../assets/images/stanbic.svg'
import Mtn from '../../assets/images/mtn.svg'
import Gtbank from '../../assets/images/gtbank.svg'
import Skooleo from '../../assets/images/skooleeo.svg'
import Video from '../../assets/images/video.svg'
import UpToSpeed from '../../assets/images/uptospeed.svg'
import Automated from '../../assets/images/automated.svg'
import Icons from '../../assets/images/icons.svg'
import Timeless from '../../assets/images/timeless.svg'
import Efficient from '../../assets/images/efficient.svg'
import CustomerSupport from '../../assets/images/customersupport.svg'
import './Home.scss'
function Home() {
    return (
        <div>
            <div className="s">
            <div className="flex pl-6 md:pl-20 lg:pl-44 lg:pr-48 pt-24 md:flex-row flex-col ">
                <div className="pt-20">
                    <p className="text-5xl font-medium">Collaborate with your team and get more done</p>

                    <p className="pt-10">Communicate effectively with Oneburner for easy collaboration, team work and remote work.</p>

                    <button className="start-trial mt-10">
                        Start Free Trial 
                    </button>
                </div>

                <div className=" md: pl-6 lg:pl-20 img-contain ">
                    <img src={LandingImage} alt=""/>
                </div>
            </div>
            <p className="text-center text-gray-600 pt-28">Over 500+ companies bond teams together with Oneburner</p>

            <div className="flex justify-evenly pt-8 px-12">
                <img src={Paystack} alt="" className="w-48"/>
                <img src={Egyptair} alt="" className="w-48"/>
                <img src={Dangote} alt="" className="w-40"/>
                <img src={Stanbic} alt="" className="w-20"/>
                <img src={Mtn} alt="" className="w-20"/>
                <img src={Gtbank} alt="" className="w-20"/>
                <img src={Skooleo} alt="" className="w-"/>
            </div>
            <div className=" border-2 flex mx-24 mt-52">
                <div className=" w-56 crm py-4">
                     <p className="pl-12 text-white">CRM  Sales</p>
                </div>
                <div>
                    <ul className="flex py-4 pl-0">
                        <li className="pl-20">Human Resources</li>
                        <li className="pl-24">Marketing </li>
                        <li className="pl-24">Remote Work</li>
                        <li className="pl-24">Project Management</li>
                        <li className="pl-24">Social Media</li>
                    </ul>
                </div>
            </div>

            <div className="flex lg:ml-32 lg:pt-48 lg:pb-52 md:flex-row flex-col">

                <div>
                    <p className="text-4xl pt-48">Manage team activities all in one place</p>
                    <p className="pt-4">Keep your team organized and informed with activities that are up to date.</p>
                </div>
                <div className="pr-32 pl-40">
                    <img src={Video} alt=""/>
                </div>
            </div>
          </div>

          <div className="flex lg:ml-32 md:flex-row flex-col">
              <div className="pr-32 ">
                <img src={UpToSpeed} alt=""/>
              </div>
              <div className=" pr-20">
                <p className="text-4xl pt-48">Bring your team up to speed</p>
                <p className="pt-4">Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner.</p>
              </div>
          </div>
          
          <div className="flex lg:ml-32 lg:pt-48 lg:pb-52 md:flex-row flex-col">

            <div>
                <p className="text-4xl pt-48">Manage team activities all in one place</p>
                <p className="pt-4">View dates, projects, calendar, sprint and more with reliability.</p>
            </div>
            <div className="pr-32 pl-40">
                <img src={Automated} alt=""/>
            </div>
        </div>
        <p className="text-center max-w-lg text-3xl mx-auto">Integrate with your favourite tools easily in one click</p>

        <div className="px-44 pt-28">
            <img src={Icons} alt=""/>

        </div>
        <div className="flex lg:ml-32 md:flex-row flex-col lg:pt-48 ">
              <div className="pr-32 ">
                <img src={Timeless} alt=""/>
              </div>
              <div className=" pr-20">
                <p className="text-4xl pt-48">Timeless report generator</p>
                <p className="pt-4">You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
              </div>
        </div>
          
        <div className="flex lg:ml-32 lg:pt-48  md:flex-row flex-col">

            <div>
                <p className="text-4xl pt-48">Efficient lead management</p>
                <p className="pt-4">You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
            </div>
            <div className="pr-32 pl-32">
                <img src={Efficient} alt=""/>
            </div>
        </div>
    
        <div className="flex lg:ml-60 md:flex-row flex-col lg:pt-32 ">
              <div className="pr-32  max-w-3xl">
                <img src={CustomerSupport} alt=""/>
              </div>
              <div className=" pr-20 ">
                <p className="text-4xl pt-20 ">24/7 customer support</p>
                <p className="pt-4">Our team of responsible member is always available to help you all day long and ready to meet your demand. Reach out to us and we will always be there.</p>
              </div>
        </div>

        <div className="choose text-white text-center py-24 lg:mt-40">
            <p className="text-3xl font-medium">Choose a better way to work</p>
            <p className="pt-4"> No credit card details | No additional installation | No time wasting</p>
            <button className="mt-14 purple-btn">
                 Start my free trial
            </button>
        </div>


    </div>
    )
}

export default Home

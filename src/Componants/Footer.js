import React from 'react'
import { Link } from 'react-router-dom'
import s_logo from '../Images/s_logo.png'

export default function Footer() {
    return (
        <div className=' mt-5'>
            <footer className="footer p-10 bg-base-200 text-base-content ">
                <aside>
                    <img src={s_logo} width="100px" alt="" />
                    <p>Hans Group of Education<br />Developing Students</p>
                </aside>
                <nav>
                    <header className="footer-title">Contact us</header>
                    <Link className="link link-hover" to="tel:+918432417513">Phone : (+91) 8432417513</Link>
                    <Link className="link link-hover" to="mailto:info@hanscollegeofpharmacy.org">Email : info@hanscollegeofpharmacy.org</Link>
                </nav>
                <nav>
                    <header className="footer-title">Sister Branches</header>
                    <Link className="link link-hover">Home School Kotputli</Link>
                    <Link className="link link-hover">Hans School Bansur</Link>
                </nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to="//api.whatsapp.com/send?phone=8432417513&text=I would like to take admission in Hans College of Pharmacy" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" width="36" height="36" alt="wp community"></img> </Link>
                    <Link to="" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" width="36" height="36" alt="wp community"></img> </Link>
                    
                </div>

                
            </footer>
            <div className='text-center bg-black text-white w-full'>
                    Developed by Arpit Bansal & Akanksha Bansal
                </div>           
        </div>
    )
}

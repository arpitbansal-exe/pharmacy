import React from 'react'
import { Link } from 'react-router-dom'
import s_logo from '../Assets/s_logo.png'

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
                    <Link className="link link-hover" to="https://hansinternationalschool.co.in/" target='_blank'>Home School Kotputli</Link>
                    <Link className="link link-hover">Hans School Bansur</Link>
                </nav>
                {/* <div className="grid grid-flow-col gap-4">
                    <Link to="//api.whatsapp.com/send?phone=8432417513&text=I would like to take admission in Hans College of Pharmacy" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" width="36" height="36" alt="wp community"></img> </Link>
                </div> */}
                <iframe className='border rounded' title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.021013235602!2d76.08036487617836!3d27.59287813052957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d1581cc57719b%3A0x2b9178e68325c8ba!2sHans%20College%20Paota!5e0!3m2!1sen!2sin!4v1703513740216!5m2!1sen!2sin"  ></iframe>  
            </footer>
            <div className='text-center bg-black text-white w-full'>
                    Developed by Arpit Bansal & Akanksha Bansal
                </div>           
        </div>
    )
}

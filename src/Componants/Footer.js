import React from 'react'
import { Link } from 'react-router-dom'
import s_logo from '../Assets/s_logo.png'

export default function Footer() {
    return (
        <footer className='w-full mt-auto'>
            <div className="footer p-8 md:p-10 bg-base-200 text-base-content">
                <aside>
                    <img src={s_logo} width="100px" alt="Hans College Logo" />
                    <p className="text-sm md:text-base">Hans Group of Education<br />Developing Students</p>
                </aside>
                <nav>
                    <header className="footer-title text-sm md:text-base">Contact us</header>
                    <Link className="link link-hover text-sm md:text-base" to="tel:+918432417513">Phone : (+91) 8432417513</Link>
                </nav>
                <nav>
                    <header className="footer-title text-sm md:text-base">Sister Branches</header>
                    <Link className="link link-hover text-sm md:text-base" to="https://hansinternationalschool.co.in/" target='_blank' rel="noreferrer">Home School Kotputli</Link>
                    <Link className="link link-hover text-sm md:text-base">Hans School Bansur</Link>
                </nav>
                <div className="hidden md:flex">
                    <iframe 
                        className='border rounded w-full h-48' 
                        title="Location" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.021013235602!2d76.08036487617836!3d27.59287813052957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d1581cc57719b%3A0x2b9178e68325c8ba!2sHans%20College%20Paota!5e0!3m2!1sen!2sin!4v1703513740216!5m2!1sen!2sin"
                        loading="lazy"
                    />  
                </div>
            </div>
            <div className='text-center bg-black text-white w-full py-4 px-4'>
                <p className="text-xs md:text-sm">Developed by Arpit Bansal & Akanksha Bansal</p>
            </div>           
        </footer>
    )
}

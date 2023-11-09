import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='w-screen mt-5'>
            <footer className="footer p-10 bg-base-200 text-base-content ">
                <aside>
                    <img src="https://play-lh.googleusercontent.com/1UIHtp_5o5FHts6Z48zvfv0inu_cOUzeETbtNU_62ldu0RcNT4n2UUERe1h08LSFoA=w240-h480-rw" width="100px" alt="" />
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
                    {/* <Link to="" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24" height="24" alt='@gfg_mitadt'></img> </Link> */}
                    {/* <Link to="" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt='geeksforgeeks-mitadt-student-chapter'></img> </Link> */}
                    <Link to="" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" width="36" height="36" alt="wp community"></img> </Link>
                    <Link to="" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" width="36" height="36" alt="wp community"></img> </Link>
                    
                </div>

                
            </footer>
            <div className='text-center bg-black text-white w-screen'>
                    Developed by Arpit Bansal & Akanksha Bansal
                </div>           
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='w-screen '>
            <div className="navbar bg-base-200" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/staff">Staff</Link></li>
                            <li>
                                <Link>Course</Link>
                                <ul className="p-2">
                                    <li><Link>D.Pharma</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/circular">Circular</Link></li>
                            <li><Link to="/gallery">Gallary</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case" to="/" ><img className='' src="https://webdashboard.kdtech.in/asset/images/Hans%20Kotputli%20logo_1616828675_1646899441_1666170698.png" alt="Hans Pharmacy" style={{ height: '50px', width: 'auto' }} /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home </Link></li>
                        <li><Link to="/staff">Staff</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Course</summary>
                                <ul className="p-2 z-10">
                                    <li><Link to="/courses/bpharma">D.Pharma</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/circular">Circular</Link></li>
                        <li><Link to="/gallery">Gallary</Link></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    
                </div>
            </div>
        </div>
    )
}

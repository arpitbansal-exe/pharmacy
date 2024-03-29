import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import s_logo from '../Assets/s_logo.png'
export default function Navbar() {
    return (
        <div className='max-w-full'>
            <div className="navbar bg-base-200" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/staff">Faculty</Link></li>
                            <li >
                                <Link>Course</Link>
                                <ul className="p-2">
                                    <li><Link to="/bpharma">D.Pharma</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/circular">Circular</Link></li>
                            <li><Link to="/gallery">Gallary</Link></li>
                        </ul>
                    </div>
                    <Link className='btn btn-ghost normal-case lg:hidden pl-0' to="/"><img className='' src={s_logo} alt="Hans Pharmacy" style={{ height: '50px', width: 'auto' }} /></Link>
                    <Link className="btn btn-ghost normal-case hidden lg:flex" to="/" ><img className='' src={logo} alt="Hans Pharmacy" style={{ height: '50px', width: 'auto' }} /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold" >
                        <li><Link to="/">Home </Link></li>
                        <li><Link to="/staff">Faculty</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Course</summary>
                                <ul className="p-2 z-10">
                                    <li><Link to="/bpharma">D.Pharma</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/circular">Circular</Link></li>
                        <li><Link to="/gallery">Gallary</Link></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                <div className='btn btn-primary'>
                <Link to="/applynow" >Admission Open</Link>
                </div>
                </div>
            </div >
        </div >
    )
}

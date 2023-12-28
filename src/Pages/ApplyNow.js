import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Componants/Navbar'

export default function ApplyNow() {

    return (
        <div>
            <Navbar/>
            <div className='text-6xl text-center m-10'>Hans College of Pharmacy</div>
            <div className='text-3xl text-center mb-10'>Admission Open 2023-24</div>

            <div className="flex justify-center items-center mb-20">

                <div className="card  bg-base-200 md:w-1/2  shadow-2xl  p-1 md:p-10 ">
                    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd_5d421XUv8--sOjjWiKxiJ1bR2XBh-rcWmkEoGBedHDvbkw/formResponse">
                        <div className="overflow-x-auto">
                            <div className='text-center text-3xl font-semibold mb-10 mt-5 '>Apply Now</div>

                            <table className="table text-2xl select-2xl">
                                <tbody>
                                    <tr>
                                        <td> <label htmlFor="name">Name: </label></td>
                                        <td><input type="text" name="entry.1275461468" id="name" className='input input-bordered w-full ' required /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="fname">Father's Name</label></td>
                                        <td><input type="text" name="entry.1278875644" id="fname" className='input input-bordered w-full ' required /></td>

                                    </tr>
                                    <tr>
                                        <td><label htmlFor="mno">Mobile Number</label></td>
                                        <td><input type="tel" name="entry.2062824025" id="mno" className='input input-bordered w-full' required /></td>

                                    </tr>
                                    <tr>
                                        <td><label htmlFor="city">City</label></td>
                                        <td><input type="text" name="entry.1965475243" id="city" className='input input-bordered w-full ' required /></td>

                                    </tr>
                                    <tr>
                                        <td><label htmlFor="class">Admission Class</label></td>
                                        <td><select id="class" name="entry.1505883957" className='select select-bordered w-full ' defaultValue="D.Pharma" required>
                                            <option value="select"  disabled>Select </option>
                                            <option value="D.Pharma">D.Pharma</option>
                                        </select></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className='btn btn-primary w-full' type="submit">Apply Now</button>
                    </form>
                    <hr className='h-px  bg-gray-200 border-0 dark:bg-gray-700' />
                    <Link to="//api.whatsapp.com/send?phone=8432417513&text=I would like to take admission in Hans College of Pharmacy">
                        <button className='btn btn-primary mt-5'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" width="36" height="36" alt="" />
                            WhatsApp</button>

                    </Link>
                </div>

            </div>
        </div >

    )
}

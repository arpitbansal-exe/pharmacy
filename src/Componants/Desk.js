import React from 'react';
import Navbar from './Navbar';

export default function Desk(props) {
    return (
        <>
            <Navbar/>
            <div className="md:h-screen flex justify-center items-center z-0">
                <div className="card card-compact w-86  bg-base-200 shadow-2xl md:card-side sm:my-8 sm:m-10">
                    <figure className="w-3/10 object-fill"><img  src={props.image} alt={props.name} /></figure>
                    <div className="card-body">
                        <h1 className="card-title">{props.name}</h1>
                        <h2 className="card-title">{props.post}</h2>
                        <p className='whitespace-pre-line text-left text-2xl'>{props.message}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

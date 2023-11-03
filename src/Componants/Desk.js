import React from 'react';

export default function Desk(props) {
    return (
        <>
            <div className="flex justify-center items-center z-0">
                <div className="card card-compact w-86  bg-base-200 ml:h-[50vh] sm:my-20 shadow-2xl md:card-side ">
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

'use client';

import { PrimaryButtonDark } from "../buttons";
import { useState } from "react";


export default function GiveCard(){

    const isActive = 'bg-sf_darkgreen text-sf_white border-2 border-wf_white';
    
    const [reccurency, setReccurency] = useState("");
    const [amount, setAmount] = useState('');



    return(
        <>
            <div className = 'w-full flex justify-center'>
                <div className = 'w-full bg-sf_lightblue rounded-[12px] shadow-md py-8 md:px-20 px-12 max-w-screen-sm '>
                    <div className='mb-11'>
                        {/*Recurenta */}
                        <h3 className ='text-sf_green mb-6'>Recurență</h3>
                        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-y-6">
                            <div onClick = {() => setReccurency('one')} className={`md:w-[128px] w-full h-12 rounded-full text-center flex justify-center items-center ${reccurency == 'one' ? isActive : 'bg-sf_offwhite text-sf_green hover:bg-sf_green hover:text-sf_white'}`} role='button'>O data</div>
                            <div onClick = {() => setReccurency('monthly')} className={`md:w-[128px] w-full h-12 rounded-full text-center flex justify-center items-center ${reccurency == 'monthly' ? isActive : 'bg-sf_offwhite text-sf_green hover:bg-sf_green hover:text-sf_white'}`} role='button'>Lunar</div>
                        </div>
                    </div>
                    <div>
                        {/*Suma */}
                        <h3 className ='text-sf_green mb-6'>Recurență</h3>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-6">
                            <div onClick = {() => setAmount('50')} className={`md:w-[128px] w-full h-12 rounded-full text-center flex justify-center items-center ${amount == '50' ? isActive :'bg-sf_offwhite text-sf_green hover:bg-sf_green hover:text-sf_white'}`} role='button'>50 ron</div>
                            <div onClick = {() => setAmount('100')} className={`md:w-[128px] w-full h-12 rounded-full text-center flex justify-center items-center ${amount == '100' ? isActive :'bg-sf_offwhite text-sf_green hover:bg-sf_green hover:text-sf_white'}`} role='button'>100 ron</div>
                            <div onClick = {() => setAmount('200')} className={`md:w-[128px] w-full h-12 rounded-full text-center flex justify-center items-center ${amount == '200' ? isActive :'bg-sf_offwhite text-sf_green hover:bg-sf_green hover:text-sf_white'}`} role='button'>200 ron</div>
                        </div>
                        <input className='my-6 rounded-[50px] w-full border-2 border-sf_green text-sf_green text-center h-12 bg-sf_lightblue font-medium ' placeholder='Altă sumă' type='number' 
                            onClick = {() => setAmount('other')}
                        />
                    </div>
                    <div className=''>
                        {/*Doresc sa platesc */}
                        <input type="checkbox" id="tax-add"/>
                        <label className='text-sf_green '> Doresc să plătesc pentru taxele de procesare, adaugând un procent de 2% din suma aleasă.</label>
                    </div>
                    <div className="my-6 md:block flex justify-center">
                        {/*Buton*/}
                        <PrimaryButtonDark buttonText='Continuă plata'/>
                    </div>
                </div>
            </div>
        </>
    );

};
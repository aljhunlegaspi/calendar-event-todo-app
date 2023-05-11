'use client'
import React from "react";
import {formatDate} from '../utils/utils'
import SelectMultiple from './select'

export default function ServicesModal(props:any) {
    const [newService, setNewService] = React.useState({
        value: '',
        label: '',
        default: false
    });

    function addService(){
        if(newService.value !== ''){
            props.setServices([...props.services, newService]);
            setNewService({
                value: '',
                label: '',
                default: false
            })
        }
    }

  return (
    <>
        <>
        <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
                <div className="flex items-start justify-between justify-center p-3 border-b border-solid border-slate-200 rounded-t">
                    <h4 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
                    Services
                    </h4>

                    <button
                        className=" text-gray-500 active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={()=> props.setShowServicesModal(false)}
                        >
                        close
                    </button>
                </div>
            {/*body*/}
                <div className="relative p-6 flex-auto">
                    <div id="alert-1" className="flex p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <div className="ml-3 text-sm font-medium">
                       <p className="mb-1">Note: Default Services cannot be removed from the list</p> 
                       <p> You can add and remove new Services on the list by inputing the name on the texbox below and pressing the `ADD` button, new Services will be marked as `Custom Service` and can be removed anytime.</p>
                    </div>
                    </div>
                    <ul className="w-70 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        {props.services.map((service: any, idx: number)=>(
                            <li key={service+idx} className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 inline-flex items-center">
                                <div className="w-full">{service.value}</div>
                                <div key={service} className={`flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full ${service.default === true ? 'text-pink-700 bg-pink-100 border border-pink-300': 'text-green-700 bg-green-100 border border-green-300'}`}>
                                    <div className="text-xs font-normal leading-none flex-initial">{service.default === true? 'default': 'custom'}</div>
                                </div>
                                {service.default === false && <button onClick={()=> props.setServices(props.services.filter((s: any, i: number)=> idx !== i))} type="button" className="text-red-700 items-center justify-center align-center hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-small rounded-lg text-sm px-3 py-0 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">remove</button>}
                            </li>
                        ))}
                        <li className="w-full px-4 py-2 rounded-b-lg inline-flex items-center">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="name" 
                                type="text" 
                                value={newService.value}
                                placeholder="Service Name..."
                                onChange={(e: any)=> setNewService({value: e.target.value, label: e.target.value, default: false})}
                                required/>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={addService}
                                    >
                                    Add
                                </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
      
    </>
  );
}
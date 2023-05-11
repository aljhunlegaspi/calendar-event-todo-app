'use client'
import React from "react";
import {formatDate} from '../utils/utils'
import SelectMultiple from './select'



const services = [{
    value: 'General Cleaning',
    label: 'General Cleaning'
},
{
    value: 'Wash Clothes',
    label: 'Wash Clothes'
},
{
    value: 'Maintenance',
    label: 'Maintenance'
}];

export default function ServicesModal(props:any) {
  console.log(props, 'properties')
  const [newService, setNewService] = React.useState({
    value: '',
    label: '',
    default: false
  });
  console.log(event, 'dddd')

//   function handleChange(e: any) {
//     if (e.target.files) {
//         setEvent({ ...event, [e.target.name]: e.target.files[0] });
//     } else {
//         setEvent({ ...event, [e.target.name]: e.target.value });
//     }
//   }

    function addService(){
        if(newService.value !== ''){
            props.setServices([...props.sercvices, newService]);
            setNewService({
                value: '',
                label: '',
                default: false
            })
        }
    }

  return (
    <>
      {/* <button
        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full mt-3"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Event
      </button> */}
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
                <ul className="w-70 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {props.sercvices.map((service: any)=>(
                        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 inline-flex items-center">
                            {service.value}
                            <div key={service} className={`flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-pink-700 bg-pink-100 border border-pink-300 ${service.default === true ? 'text-pink-700 bg-pink-100 border border-pink-300': 'text-green-700 bg-green-100 border border-green-300'}`}>
                                <div className="text-xs font-normal leading-none flex-initial">{service.default === true? 'default': 'custom'}</div>
                            </div>
                        </li>
                    ))}
                    {/* <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
                    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
                    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li> */}
                    <li className="w-full px-4 py-2 rounded-b-lg inline-flex items-center">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="name" 
                            type="text" 
                            value={newService.value}
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
            {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                    >
                    Close
                    </button>
                    <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={saveChanges}
                    >
                    Save Changes
                    </button>
                </div> */}
            </div>
        </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
      
    </>
  );
}
'use client'
import React from "react";
import {formatDate} from '../utils/utils'
import SelectMultiple from './select'


export default function Modal(props:any) {
  console.log(props, 'properties')
  const [services, setServices] = React.useState(props.sercvices)
  const [toUpdateEvent, setToUpdateEvent] = React.useState(props.updateEventObject);
  const [event, setEvent] = React.useState({
    id: props.isUpdate === true ? props.updateEventObject.id :  Date.now(),
    name: props.isUpdate === true ? props.updateEventObject.name : "",
    date: new Date(props.date),
    services: [],
    attachments: [],
    index: props.isUpdate === true ? props.updateEventObject.index : null
  });

  function handleChange(e: any) {
    if (e.target.files) {
        setEvent({ ...event, [e.target.name]: e.target.files[0] });
    } else {
        setEvent({ ...event, [e.target.name]: e.target.value });
    }
  }

  function saveChanges(){
    setEvent({...event, date: props.date});
    console.log(event, 'eeeeee')
    props.onModalCloseFunction(event);
    props.setIsUpdate(false)
  }

  function servicesSelected(e: any){
    if(e){
        let servicesSelected = e.map((service:any)=>{
            return service.value;
        })
        event.services= servicesSelected;
        console.log(e, 'ee data')
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    let formData = new FormData();

  }
  return (
    <>
        <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold text-gray-500 dark:text-gray-400">
                {formatDate(props.date, 'YYYY-MM-DD')} Event
                </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
                <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Event Name
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="name" 
                            type="text" 
                            value={event.name}
                            onChange={(e: any)=> setEvent({...event, name: e.target.value})}/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Services
                        </label>
                        </div>
                        <div className="md:w-2/3">
                            <SelectMultiple services={services} servicesSelected={servicesSelected} selectedServices={props.isUpdate === true ? props.updateEventObject.services : []}/>
                        </div>
                    </div>
                </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {props.setIsUpdate(false);props.setShowModal(false)}}
                >
                Close
                </button>
                <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={saveChanges}
                >
                 {props.isUpdate === false ? 'Add Event' : 'Save Changes'}
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
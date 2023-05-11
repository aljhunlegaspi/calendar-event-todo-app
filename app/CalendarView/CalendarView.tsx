
'use client'
import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { formatDate } from '../utils/utils'
import Modal from '../utils/modal'
import ServicesModal from '../utils/servicesModal'

import { eventData } from '../eventData'
import { servicesData } from '../servicesData'

const CalendarView = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [showModal, setShowModal] = useState(false);
    const [showServicesModal, setShowServicesModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null)
    let [events, setEvents] = useState(eventData);
    let [services, setServices] = useState(servicesData);
  
    const handleDateChange = (date: any) => {
      console.log(date, 'date')
      setSelectedDate(date)
      setSelectedEvent(null)
    }
  
    const handleEventClick = (event: any) => {
      setSelectedEvent(event)
    }

   const onModalClose = (data: any) => {
    data.date= formatDate(data.date, 'YYYY-MM-DD');
    setEvents([...events, data]);
    setShowModal(false);
   }

   const removeEvent = (idx: any)=>{
    setEvents(events.filter((e, i)=> i !== idx));
   }
  
    return (
      <div className={`flex flex-row w-full`}>
        <div className={`w-fit`}>
          <div className="flex items-center justify-center align-middle p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
                  Calendar
              </h3>
          </div>
          <div className={`calendar w-full flex justify-center`}>
            <Calendar className={`w-[100%]`} value={selectedDate} onChange={handleDateChange}/>
          </div>
        </div>
        <div className={`w-full pl-5 bg-white-600`}>
          <div className="bg-gray-400 flex items-center justify-between align-middle p-3 border-b rounded-t dark:border-gray-600 ">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Events
              </h3>
              <div>
                <button onClick={()=> setShowModal(true)} type="button" className="mr-1 mb-1 px-3 py-2 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase hover:bg-emerald-600 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                  <svg className="w-5 h-5 mr-1 text-gray-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                  Add Events
                </button>
                <button onClick={()=> setShowServicesModal(true)} type="button" className="mr-1 mb-1 px-3 py-2 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase hover:bg-pink-600 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                  <svg className="w-5 h-5 mr-1 text-gray-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                  {/* <svg className="w-5 h-5 mr-1 text-gray-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> */}
                  Services
                </button>
              </div>
          </div>
          {/* <h2 className={` text-center mb-3 text-2xl font-semibold`}>{formatDate(selectedDate, 'YYYY-MM-DD').toString()} Events</h2> */}
          <div className="min-h-[270px] w-full bg-gray-300">
            <div className="grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left py-3 pl-1 pr-3 relative">
            
            {events.length > 0 &&
            events.filter(
            (event) =>
                formatDate(event.date, 'YYYY-MM-DD') ===
                formatDate(selectedDate, 'YYYY-MM-DD')
            )
            .map((event, index) => (
                <div key={event.name} className="ml-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
                  {/* <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{event.name}</h5>
                  </a>
                  <div className="flex flex-wrap justify-left mb-1">
                    <p className="mt-[2px] font-normal text-gray-500 dark:text-gray-400 leading-0">
                    services |
                    </p>
                    {
                      event.services.map((service)=>(
                        <div key={service} className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-green-700 bg-green-100 border border-green-300 ">
                          <div className="text-xs font-normal leading-none max-w-full flex-initial">{service}</div>
                        </div>
                      ))
                    }
                  </div>
                  
                  <a href="#" className="inline-flex items-center text-blue-600 hover:underline mr-5">
                      update
                      <svg className="w-5 h-5 ml-2" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
                  </a>

                  <a href="#" onClick={()=>removeEvent(index)} className="inline-flex items-center text-red-600 hover:underline">
                      remove
                      <svg className="w-5 h-5 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                  </a>
              </div>
            ))}

            {events.filter(
            (event) =>
                formatDate(event.date, 'YYYY-MM-DD') ===
                formatDate(selectedDate, 'YYYY-MM-DD')
            ).length == 0 &&
              <div className="w-full h-[270px] absolute bg-red-500 flex justify-center items-center">
                <h3 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> NO EVENTS</h3></div>
            } 
            
            </div>
          </div>
          
          {showModal ? (
            <Modal sercvices={services} date={selectedDate} setShowModal={setShowModal} onModalCloseFunction={onModalClose}/>
          ) : null}

          {showServicesModal ? (
            <ServicesModal sercvices={services} setShowServicesModal={setShowServicesModal} setServices={setServices} onModalCloseFunction={onModalClose}/>
          ) : null}
          
        </div>
      </div>
    )
}

export default CalendarView;
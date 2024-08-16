import React, { useState } from 'react'
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
export const CalendarPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="col-lg-3 col-9 py-2 rounded-4 std_pop_head">
          <h2 className="text-center mb-0 p-1">My Calendar</h2>
        </div>
      </div>
      <div className="d-lg-flex justify-content-evenly gap-">
        <div className="">
          <div className="mt-5">
            <Calendar onChange={setStartDate} value={startDate} />
          </div>
        </div>
        <div className="">
          <div className="mt-5 std_mycalendar_card_box_size p-lg-4">
            <div className="std_mycalendar_daily_title  d-flex justify-content-center">
              <div className="col-lg-5 mt-4 mt-lg-2 ">
                <h5 className="text-center rounded-5 p-2">Daily Calendar </h5>
              </div>
            </div>
            <div className='d-flex gap-2 mt-4 justify-content-center'>
              <div className="col-lg-7 col-6 std_mycalendar_event_one rounded-4">
                <h5 className='text-center  py-3 mb-0 mt-1 p-2'>Event 1 Name</h5>
              </div>
              <div className="col-lg-2 std_mycalendar_event_ongoing rounded-4 ">
                <p className='text-center   mb-0 p-2 py-1 mt-3  '><small>Ongoing</small></p>
              </div>
              <div className="col-lg-2 std_mycalendar_event_more rounded-4 ms-lg-3">
                <p className='text-center   mb-0 p-2 py-1 mt-3 '>More</p>
              </div>
            </div>
            <div className='d-flex gap-2 mt-4 justify-content-center'>
              <div className="col-lg-7 col-6 std_mycalendar_event_one rounded-4">
                <h5 className='text-center  py-3 mb-0 mt-1 p-2'>Event 2 Name</h5>
              </div>
              <div className="col-lg-2 std_mycalendar_event_one rounded-4 ">
                <p className='text-center   mb-0 p-2 py-1 mt-1  '><small>Starts at hh:mm</small></p>
              </div>
              <div className="col-lg-2 std_mycalendar_event_more rounded-4 ms-lg-3">
                <p className='text-center   mb-0 p-2 py-1 mt-3 '>More</p>
              </div>
            </div>
            <div className='d-flex gap-2 mt-4 justify-content-center'>
              <div className="col-lg-7 col-6 std_mycalendar_event_one rounded-4">
                <h5 className='text-center  py-3 mb-0 mt-1 p-2'>Event 3 Name</h5>
              </div>
              <div className="col-lg-2 std_mycalendar_event_one rounded-4 ">
                <p className='text-center   mb-0 p-2 py-1 mt-1  '><small>Starts at hh:mm</small></p>
              </div>
              <div className="col-lg-2 std_mycalendar_event_more rounded-4 ms-lg-3">
                <p className='text-center   mb-0 p-2 py-1 mt-3 '>More</p>
              </div>
            </div>
            <div className='d-flex gap-2 mt-4 justify-content-center'>
              <div className="col-lg-7 col-6 std_mycalendar_event_one rounded-4">
                <h5 className='text-center  py-3 mb-0 mt-1 p-2'>Event 4 Name</h5>
              </div>
              <div className="col-lg-2 std_mycalendar_event_one rounded-4 ">
                <p className='text-center   mb-0 p-2 py-1 mt-1  '><small>Starts at hh:mm</small></p>
              </div>
              <div className="col-lg-2 std_mycalendar_event_more rounded-4 ms-lg-3">
                <p className='text-center   mb-0 p-2 py-1 mt-3 '>More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

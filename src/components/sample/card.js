import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Calendar
      // Basic props
      value={date}                 // Selected date or range
      onChange={handleDateChange}  // Function to handle date change

      // Display options
      locale="en-US"               // Locale for date formatting
      minDate={new Date()}         // Minimum selectable date
      maxDate={new Date(2024, 12, 31)} // Maximum selectable date
      showNeighboringMonth={false} // Hide/show days from neighboring months
      showWeekNumbers={false}      // Show/hide week numbers
      showNavigation={true}        // Show/hide navigation buttons
      prevLabel="<<"               // Custom label for the previous button
      nextLabel=">>"               // Custom label for the next button
      next2Label={null}            // Custom label for the next double arrow button (null to hide)
      prev2Label={null}            // Custom label for the previous double arrow button (null to hide)
      calendarType="ISO 8601"      // Calendar format (ISO 8601, US, Arabic, Hebrew)
      tileDisabled={({ date, view }) => view === 'month' && date.getDay() === 0} // Disable specific dates

      // Styling
      className="my-custom-calendar" // Custom class name for styling

      // View options
      view="month"                 // Current view (month, year, decade, century)
      defaultView="month"          // Default view when first rendering
      activeStartDate={new Date(2023, 6, 1)} // Initial date to start the calendar view

      // Tile content
      tileContent={({ date, view }) => view === 'month' && date.getDate() === 1 ? '🌟' : null} // Custom content for each tile
      tileClassName={({ date, view }) => view === 'month' && date.getDay() === 6 ? 'highlight' : null} // Custom class for each tile
    />
  );
};

export default MyCalendar;

.std_cricle_img{
    margin: 20px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 1px dotted #16FFBB;
    font-size: 12px;
    line-height: 20px;
    text-align: center;    
    background-color: #16FFBB40;
    color: #16FFBB;
    font-weight: 700;
  }

<div className='std_cricle_img d-felx align-content-center justify-content-between '>
           <p role="button" className=" ms-2 mb-0"> image</p>
           </div>



import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className='d-flex align-content-center justify-content-between'>
      <div className='std_cricle_img' onClick={() => document.getElementById('imageUpload').click()}>
        {image ? (
          <img src={image} alt="Uploaded" style={{ width: '100%', height: '100%', borderRadius: '100%' }} />
        ) : (
          <p role="button" className="ms-2 mb-0">image</p>
        )}
      </div>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ImageUploader;
          

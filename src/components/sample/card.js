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

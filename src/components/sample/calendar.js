import React, { useState } from 'react';

// Fictional Month class that returns some calendar data
function Month(year, month) {
  this.date = new Date(year, month, 0); // Create a date object for the given month
  this.numberofdays = this.date.getDate(); // Get the number of days in the month
  this.nameofmonth = this.date.toLocaleString('default', { month: 'long' }); // Get the month's name
  this.year = this.date.getFullYear(); // Get the year
  // Generate an array of days for the month
  this.days = Array.from({ length: this.numberofdays }, (_, i) => i + 1);
}

const CalendarComponent = () => {
  // Initialize state with the current month
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Month(today.getFullYear(), today.getMonth() + 1));
  const [selectedDay, setSelectedDay] = useState(null);

  // Function to update the month (navigate left/right)
  const updateMonth = (direction) => {
    let newMonth;
    if (direction === "left") {
      newMonth = new Month(currentMonth.year, currentMonth.date.getMonth());
    } else {
      newMonth = new Month(currentMonth.year, currentMonth.date.getMonth() + 2);
    }
    setSelectedDay(null); // Clear the selected day when changing months
    setCurrentMonth(newMonth); // Update the current month
  };

  // Function to select a day
  const selectDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      {/* Navigation Buttons */}
      <div>
        <button onClick={() => updateMonth("left")}>Previous Month</button>
        <span>{currentMonth.nameofmonth} {currentMonth.year}</span>
        <button onClick={() => updateMonth("right")}>Next Month</button>
      </div>
      
      {/* Calendar Display */}
      <div>
        <h2>{currentMonth.nameofmonth} Calendar</h2>
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {currentMonth.days.map((day) => (
            <li
              key={day}
              style={{ 
                display: 'inline-block', 
                width: '30px', 
                margin: '5px', 
                cursor: 'pointer', 
                backgroundColor: day === selectedDay ? '#ddd' : '#fff',
                border: '1px solid #ccc',
                textAlign: 'center',
              }}
              onClick={() => selectDay(day)}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Selected Day Details */}
      {selectedDay && (
        <div>
          <h3>Selected Day: {selectedDay}</h3>
          <p>Details for the selected day will go here.</p>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;

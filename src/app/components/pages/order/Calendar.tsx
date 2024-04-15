'use client';

import React, { useState } from 'react';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const goToNextMonth = () => {
    setCurrentMonth(
      (prevMonth) =>
        new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1)
    );
    setSelectedDay(null); // Reset selected day when navigating to next month
  };

  const goToPrevMonth = () => {
    setCurrentMonth(
      (prevMonth) =>
        new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1)
    );
    setSelectedDay(null); // Reset selected day when navigating to previous month
  };

  const getMonthName = (): string => {
    return currentMonth.toLocaleString('default', { month: 'long' });
  };

  const getDaysInMonth = (): number => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfWeek = (): number => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, ...
  };

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    // You can perform any additional actions when a day is selected here
  };

  const renderCalendarDates = (): JSX.Element[] => {
    const totalDays = getDaysInMonth();
    const firstDayOfWeek = getFirstDayOfWeek();
    const blankDaysBefore = Array.from(
      { length: firstDayOfWeek },
      (_, index) => (
        <div
          key={`blank-before-${index}`}
          className="w-9 h-9 text-center text-black/50"
        ></div>
      )
    );

    const daysOfMonth = Array.from(
      { length: totalDays },
      (_, index) => index + 1
    );

    return [...blankDaysBefore, ...daysOfMonth].map((day, index) => {
      if (day === selectedDay) {
        return (
          <div
            key={`day-${index}`}
            className="w-9 h-9 grid place-content-center rounded-full text-xl font- cursor-pointer bg-brand-red text-white"
            onClick={() => handleDayClick(day)}
          >
            {day || ''}
          </div>
        );
      } else {
        const dayOfWeek = (firstDayOfWeek + index) % 7;
        const textColor =
          (dayOfWeek === 0 || dayOfWeek === 6) && day ? 'text-black/50' : ''; // Check if it's Sunday (0) or Saturday (6)
        return (
          <div
            key={`day-${index}`}
            className={`w-9 h-9 grid place-content-center rounded-full text-xl font- cursor-pointer ${textColor}`}
            onClick={() => handleDayClick(day)}
          >
            {day || ''}
          </div>
        );
      }
    });
  };

  return (
    <div className="max-w-md w-full mx-auto text-brand-dark font-lato mt-8">
      <div className="flex justify-between items-center">
        <button className="px-2 py-1" onClick={goToPrevMonth}>
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0273 22L11.0273 14.5L18.0273 7"
              stroke="black"
              strokeWidth="2.39459"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-brand-gray/50">
          {getMonthName()}
        </h2>
        <button className="px-2 py-1" onClick={goToNextMonth}>
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9727 22L18.9727 14.5L11.9727 7"
              stroke="black"
              strokeWidth="2.39459"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* Render your calendar dates here */}
      <div className="mt-4">
        {/* Date grid */}
        <div className="grid grid-cols-7 gap-x-3 gap-y-1 text-sm uppercase font-medium">
          <div className="text-center mb-4">Sun</div>
          <div className="text-center mb-4">Mon</div>
          <div className="text-center mb-4">Tue</div>
          <div className="text-center mb-4">Wed</div>
          <div className="text-center mb-4">Thu</div>
          <div className="text-center mb-4">Fri</div>
          <div className="text-center mb-4">Sat</div>
          {/* Render actual dates */}
          {renderCalendarDates()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

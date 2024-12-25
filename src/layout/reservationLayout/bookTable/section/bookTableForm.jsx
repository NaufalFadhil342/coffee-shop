import React, { useState } from 'react';
import { tableHoursData, tablePersonData } from '../../../../data/dummyCoffee';
import { useNotification } from '../../../../context/notificationContext';

const BookTableForm = ({ mainPage }) => {
  const today = new Date().toISOString().split('T')[0];

  const [selectedPerson, setSelectedPerson] = useState('2 people');
  const [selectedHours, setSelectedHours] = useState('9:00 a.m');
  const [selectedDate, setSelectedDate] = useState(today);
  const { addNotification } = useNotification();

  const tableSubmit = async (e) => {
    e.preventDefault();

    try {
      // update the function with your api here...
      // const fetchTable = axios.post('http://yourapi.com', {})

      const formData = new FormData();

      formData.append('person', selectedPerson);
      formData.append('hours', selectedHours);
      formData.append('date', selectedDate);

      const bookedData = Object.fromEntries(formData);

      console.log('book table:', bookedData);
      addNotification("Table has been booked! Please wait 'til you get confirm from email.");


      setSelectedPerson('2 people');
      setSelectedHours('9:00 a.m');
      setSelectedDate(today);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={tableSubmit} className={`w-full h-auto flex gap-4 rounded-xl ${mainPage ? 'flex-col lg:flex-row bg-transparent p-0' : 'flex-col bg-white p-7 custom-shadow'}`}>
      <div className={`w-full h-auto ${mainPage ? 'flex-25' : ''}`}>
        <select className="w-full h-12 flex items-center px-2 bg-transparent outline-none border-b-2 border-accent" value={selectedPerson} onChange={(e) => setSelectedPerson(e.target.value)}>
          {tablePersonData.map((person, index) => (
            <option className="text-stone-600" value={person.person} key={index}>
              {person.person}
            </option>
          ))}
        </select>
      </div>
      <div className={`w-full h-auto flex flex-col sm:flex-row gap-4 ${mainPage ? 'flex-50' : ''}`}>
        <div className="w-full h-auto">
          <input type="date" className="w-full h-12 border-b-2 border-accent px-2 bg-transparent outline-none" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        </div>
        <div className="w-full h-auto">
          <select className="w-full h-12 flex items-center px-2 bg-transparent outline-none border-b-2 border-accent scrollbar-thin scrollbar-thumb-slate-400/50" value={selectedHours} onChange={(e) => setSelectedHours(e.target.value)}>
            {tableHoursData.map((hour, index) => (
              <option className="w-fit flex text-stone-600" value={hour.hours} key={index}>
                {hour.hours}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={`w-full h-auto ${mainPage ? 'mt-0' : 'mt-4'}`}>
        <button className="button w-full h-12 bg-accent text-white hover:bg-[#9D6842]" type="submit">
          Book a Table
        </button>
      </div>
    </form>
  );
};

export default BookTableForm;

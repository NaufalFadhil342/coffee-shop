import React, { useState } from 'react';

const ReservationForm = () => {
  const initialFormState = {
    name: '',
    phone: '',
    email: '',
    seats: '',
    date: '',
    times: '',
    notes: '',
  };

  const [reservationForm, setReservationForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const reservationHandle = (e) => {
    const { name, value } = e.target;

    setReservationForm({
      ...reservationForm,
      [name]: value,
    });

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const reservationSubmit = async (e) => {
    e.preventDefault();

    try {
      // update the function with your api here...
      // const fetchReservation = await axios.post('http://yourapi.com', {})

      const newErrors = {};
      const formData = new FormData();

      if (!reservationForm.name) newErrors.name = 'Name is required';
      if (!reservationForm.phone) newErrors.phone = 'Phone is required';
      if (!reservationForm.email) newErrors.email = 'Email is required';
      if (!reservationForm.seats) newErrors.seats = 'Seats is required';
      if (!reservationForm.date) newErrors.date = 'Date is required';
      if (!reservationForm.times) newErrors.times = 'Times is required';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      formData.append('name', reservationForm.name);
      formData.append('phone', reservationForm.phone);
      formData.append('email', reservationForm.email);
      formData.append('seats', reservationForm.seats);
      formData.append('date', reservationForm.date);
      formData.append('times', reservationForm.times);
      formData.append('notes', reservationForm.notes);

      const reservationData = Object.fromEntries(formData);

      console.log('reservation:', reservationData);
      setReservationForm(initialFormState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="w-full h-auto flex flex-col gap-8" onSubmit={reservationSubmit}>
      <div className="w-full h-auto flex flex-col sm:flex-row gap-8">
        <div className="w-full flex flex-col">
          <input
            className="w-full h-12 px-2 border-b-2 border-accent outline-none bg-transparent text-stone-600 placeholder:text-accent"
            type="text"
            name="name"
            value={reservationForm.name}
            placeholder="Name*"
            onChange={reservationHandle}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="w-full flex flex-col">
          <input
            className="w-full h-12 px-2 border-b-2 border-accent outline-none bg-transparent text-stone-600 placeholder:text-accent"
            type="number"
            name="phone"
            placeholder="Phone*"
            value={reservationForm.phone}
            onChange={reservationHandle}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>
      <div className="w-full h-auto flex flex-col sm:flex-row gap-8">
        <div className="w-full flex flex-col">
          <input
            className="w-full h-12 px-2 border-b-2 border-accent outline-none bg-transparent text-stone-600 placeholder:text-accent"
            type="email"
            name="email"
            placeholder="Email*"
            value={reservationForm.email}
            onChange={reservationHandle}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="w-full flex flex-col">
          <input
            className="w-full h-12 px-2 border-b-2 border-accent outline-none bg-transparent text-stone-600 placeholder:text-accent"
            type="text"
            name="seats"
            placeholder="Seats*"
            value={reservationForm.seats}
            onChange={reservationHandle}
          />
          {errors.seats && <p className="text-red-500 text-sm">{errors.seats}</p>}
        </div>
      </div>
      <div className="w-full h-auto flex flex-col sm:flex-row gap-8">
        <div className="w-full flex flex-col">
          <input className="w-full h-12 px-2 border-b-2 border-accent outline-none bg-transparent text-stone-600 placeholder:text-accent" type="date" name="date" value={reservationForm.date} onChange={reservationHandle} />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>
        <div className="w-full flex flex-col">
          <input className="w-full h-12 px-2 border-b-2 border-accent outline-none bg-transparent text-stone-600 placeholder:text-accent" type="time" name="times" value={reservationForm.times} onChange={reservationHandle} />
          {errors.times && <p className="text-red-500 text-sm">{errors.times}</p>}
        </div>
      </div>
      <div className="w-full h-auto">
        <textarea name="notes" className="w-full h-40 border-2 border-accent rounded pl-2 pt-2 text-stone-600 placeholder:text-accent outline-none" placeholder="Notes" value={reservationForm.notes} onChange={reservationHandle} />
      </div>
      <div className="w-full h-auto flex justify-center mt-4">
        <button className="button w-fit h-12 bg-accent text-white hover:bg-accent/90" type="submit">
          Reservation
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;

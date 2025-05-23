import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/appointments")
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, []);

  const cancelAppointment = (id) => {
    axios.delete(`http://localhost:5000/api/appointments/${id}`)
      .then(() => {
        alert("Appointment canceled!");
        setAppointments(appointments.filter(appt => appt._id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>My Appointments</h2>
        <ul>
          {appointments.map((appt) => (
            <li key={appt._id}>
              {appt.doctorName} - {appt.date}
              <button onClick={() => cancelAppointment(appt._id)}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;

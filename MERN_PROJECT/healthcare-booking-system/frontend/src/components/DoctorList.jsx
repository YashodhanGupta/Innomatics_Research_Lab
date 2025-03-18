import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id} onClick={() => navigate(`/doctor/${doctor._id}`)}>
            {doctor.name} - {doctor.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;

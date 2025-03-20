import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useFormStatus } from "react-dom";
import CustomSelect from "../Common/Inputs/CustomSelect";

import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

import "../../styles/fonts.css";
import "../../styles/reserve/reservation.css";

function DinersSelectInput() {
  const options = [
    { value: "", text: "People" },
    { value: "1", text: "One" },
    { value: "2", text: "Two" },
    { value: "3", text: "Three" },
    { value: "4", text: "Four" },
    { value: "5", text: "Five" },
    { value: "6+", text: "Six or more diners please call" },
  ];
  return (
    <CustomSelect
      name="diners"
      onChange={(value) => console.log(value)}
      icon={<FontAwesomeIcon icon={faUser} className="select-icon" />}
      defaultOption={options[0]}
      options={options.slice(1)}
      className="diners-select-input"
    />
  );
}

function TimeSelectInput() {
  const options = [
    { value: "", text: "Time" },
    { value: "10", text: "10:00 am" },
    { value: "11", text: "11:00 am" },
    { value: "12", text: "12:00 pm" },
    { value: "13", text: "1:00 pm" },
    { value: "14", text: "2:00 pm" },
    { value: "15", text: "3:00 pm" },
    { value: "16", text: "4:00 pm" },
    { value: "17", text: "5:00 pm" },
    { value: "18", text: "6:00 pm" },
    { value: "19", text: "7:00 pm" },
    { value: "20", text: "8:00 pm" },
  ];

  return (
    <CustomSelect
      name="time"
      onChange={(value) => console.log(value)}
      icon={<FontAwesomeIcon icon={faClock} className="select-icon" />}
      defaultOption={options[0]}
      options={options.slice(1)}
      className="time-select-input"
    />
  );
}

export default function ReservationSection() {
  const { pending } = useFormStatus();

  function handleSubmit() {}

  return (
    <section className="reservation-section constrain-content outline">
      <form>
        <div className="custom-select-subsection outline">
          <h3 className="section-title">MAKE A RESERVATION</h3>
          <hr />
          <div className="grid custom-select-subsection-grid">
            <DinersSelectInput />
            <div>
              
            </div>
            <TimeSelectInput />
          </div>
        </div>
        {/* <div className="time-window-subsection outline">
          <h1>Time Window Section</h1>
        </div>
        <div className="reservation-details-subsection outline">
          <h1>Reservation Details Section</h1>
        </div> */}
        <div className="submit-button">
          <button className="card-title" type="submit" disabled={pending}>
            {pending ? "Submit" : "Submitting"}
          </button>
        </div>
      </form>
    </section>
  );
}

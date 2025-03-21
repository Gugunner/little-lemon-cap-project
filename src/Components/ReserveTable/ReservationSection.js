import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CustomSelect from "../Common/Inputs/CustomSelect";

import { delay } from "../../utils/timer";

import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons/faCalendarAlt";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

import "../../styles/fonts.css";
import "../../styles/reserve/reservation.css";
import CustomDate from "../Common/Inputs/CustomDate";
import CustomTime from "../Common/Inputs/CustomTime";

import { useFormik } from "formik";

function DinersSelectInput({ value, onChangeEvent, onBlur, error, touched }) {
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
      id="diners"
      value={value}
      onChangeEvent={onChangeEvent}
      onBlur={onBlur}
      icon={<FontAwesomeIcon icon={faUser} className="custom-input-icon" />}
      defaultOption={options[0]}
      options={options.slice(1)}
      className="diners-select-input"
      error={error}
      touched={touched}
    />
  );
}

function DateInput({ value, onChangeEvent, onBlur, error, touched }) {
  const minFormattedDate = value;
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);
  const maxFormattedDate = maxDate.toISOString().slice(0, 10);
  return (
    <CustomDate
      name="date"
      onChangeEvent={onChangeEvent}
      onBlur={onBlur}
      value={value}
      min={minFormattedDate}
      max={maxFormattedDate}
      icon={
        <FontAwesomeIcon icon={faCalendarAlt} className="custom-input-icon" />
      }
      error={error}
      touched={touched}
    />
  );
}

function TimeSelectInput({ value, onChangeEvent, onBlur, error, touched }) {
  const minValue = "09:00";
  const maxValue = "20:00";
  return (
    <CustomTime
      name="time"
      id="time"
      value={value}
      onChangeEvent={onChangeEvent}
      onBlur={onBlur}
      min={minValue}
      max={maxValue}
      icon={<FontAwesomeIcon icon={faClock} className="custom-input-icon" />}
      error={error}
      touched={touched}
    />
  );
}

export default function ReservationSection() {
  const [pending, setPending] = useState(false);

  function validate(values) {
    const errors = {};
    if (values.diners === "6+") {
      errors.diners = "Party of 6 or more please call the restaurant.";
    }

    const parsedTime = values.time.split(":")[0];
    if (parseInt(parsedTime) < 9) {
      errors.time = "The restaurant opens at 9:00 am";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      diners: "",
      date: new Date().toISOString().slice(0, 10),
      time: "09:00",
    },
    validate,
    onSubmit: (values) => {
      console.log("Values", values);
      setPending(false);
    },
  });

  return (
    <section className="reservation-section constrain-content outline">
      <form
        onSubmit={async (event) => {
          setPending(true);
          event.preventDefault();
          await delay(2000);
          formik.handleSubmit(event);
        }}
        noValidate
      >
        <div className="custom-select-subsection outline">
          <h3 className="section-title">MAKE A RESERVATION</h3>
          <hr />
          <div className="grid custom-select-subsection-grid">
            <DinersSelectInput
              value={formik.values.diners}
              onChangeEvent={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.diners}
              touched={formik.touched.diners}
            />
            <DateInput
              value={formik.values.date}
              onChangeEvent={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.date}
            />
            <TimeSelectInput
              value={formik.values.time}
              onChangeEvent={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.time}
              touched={formik.touched.time}
            />
          </div>
        </div>
        {/* <div className="time-window-subsection outline">
          <h1>Time Window Section</h1>
        </div>
        <div className="reservation-details-subsection outline">
          <h1>Reservation Details Section</h1>
        </div> */}
        <div className="submit-button">
          <button
            className="card-title"
            type="submit"
            disabled={
              pending ||
              Object.keys(formik.errors).length > 0 ||
              formik.values.diners === ""
            }
          >
            {pending ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

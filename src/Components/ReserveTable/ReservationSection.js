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

export default function ReservationSection() {
  const [pending, setPending] = useState(false);

  function validate(values) {
    const errors = {};
    if (values.diners === "6+") {
      errors.diners = "Party of 6 or more please call the restaurant.";
    }

    const splitTIme = values.time.split(":");
    const parsedHour = parseInt(splitTIme[0]);
    const parsedMinute = parseInt(splitTIme[1]) / 100;
    const parsedTime = parsedHour + parsedMinute;
    const time = parsedTime !== 0 ? parsedTime : 24;

    if (0 < time && time < 9) {
      errors.time = "The restaurant opens at 9:00 am";
    } else if (20 < time && time < 21) {
      errors.time =
        "The restaurant does no accept reservations later than 20:00 pm";
    } else if (21 <= time && time <= 24) {
      errors.time = "The restaurant closes at 21:00 pm";
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      diners: "",
      date: "",
      time: "",
      appointedTime: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Values", values);
      setPending(false);
    },
  });

  return (
    <section className="reservation-subsection constrain-content">
      <form
        onSubmit={async (event) => {
          setPending(true);
          event.preventDefault();
          await delay(2000);
          formik.handleSubmit(event);
        }}
        noValidate
      >
        <div className="reservation-subsection custom-select-subsection">
          <h3 className="section-title">MAKE A RESERVATION</h3>
          <hr />
          <div className="grid custom-select-subsection-grid">
            <DinersSelectInput
              value={formik.values.diners}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.diners}
              touched={formik.touched.diners}
            />
            <DateInput
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.date}
            />
            <TimeSelectInput
              value={formik.values.time}
              onChange={(event) => {
                formik.setFieldValue("appointedTime", "");
                formik.handleChange(event);
              }}
              onBlur={formik.handleBlur}
              error={formik.errors.time}
              touched={formik.touched.time}
            />
          </div>
        </div>
        {formik.values.time !== "" && (
          <div className="time-window-subsection">
            <h4 className="card-title">Select a time</h4>
            <TimeWindowTagButtons
              hourWindow={[
                { text: "14:00 PM", unavailable: false },
                { text: "14:15 PM", unavailable: false },
                { text: "14:30 PM", unavailable: false },
                { text: "14:45 PM", unavailable: true },
                { text: "15:00 PM", unavailable: true },
              ]}
              onSelected={(hour) =>
                formik.setFieldValue("appointedTime", hour.text)
              }
            />
          </div>
        )}
        {/* <div className="reservation-details-subsection outline">
          <h1>Reservation Details Section</h1>
        </div> */}
        <div className="submit-button">
          <button
            className="card-title"
            type="submit"
            disabled={
              pending ||
              Object.keys(formik.errors).length > 0 ||
              !Object.keys(formik.values).every((k) => formik.values[k] !== "")
            }
          >
            {pending ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

function DinersSelectInput({ value, onChange, onBlur, error, touched }) {
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
      onChange={onChange}
      onBlur={onBlur}
      icon={<FontAwesomeIcon icon={faUser} className="custom-input-icon" />}
      options={options}
      className="diners-select-input"
      error={error}
      touched={touched}
    />
  );
}

function DateInput({ value, onChange, onBlur, error, touched }) {
  const minFormattedDate = new Date().toISOString().slice(0, 10);
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);
  const maxFormattedDate = maxDate.toISOString().slice(0, 10);
  return (
    <CustomDate
      name="date"
      onChange={onChange}
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

function TimeSelectInput({ value, onChange, onBlur, error, touched }) {
  const minValue = "09:00";
  const maxValue = "20:00";
  return (
    <CustomTime
      name="time"
      id="time"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      min={minValue}
      max={maxValue}
      icon={<FontAwesomeIcon icon={faClock} className="custom-input-icon" />}
      error={error}
      touched={touched}
    />
  );
}

function TimeWindowTagButtons({ hourWindow, onSelected }) {
  return (
    <div className="grid time-window-subsection-grid">
      {(hourWindow || []).map((hour) => (
        <button
          type="button"
          key={hour.text}
          className="tag tag-button"
          onClick={() => onSelected(hour)}
          disabled={hour.unavailable}
        >
          {hour.text}
        </button>
      ))}
    </div>
  );
}

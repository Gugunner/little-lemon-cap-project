import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CustomSelect from "../Common/Inputs/CustomSelect";

import { delay } from "../../utils/timer";

import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons/faCalendarAlt";
import { faCalendarXmark } from "@fortawesome/free-regular-svg-icons/faCalendarXmark";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

import "../../styles/fonts.css";
import "../../styles/reserve/reservation.css";
import CustomDate from "../Common/Inputs/CustomDate";
import CustomTime from "../Common/Inputs/CustomTime";

import { formSchema } from "../../utils/form";

import { useFormik } from "formik";
import CustomText from "../Common/Inputs/CustomText";
import CustomTextArea from "../Common/Inputs/CustomTextArea";

export default function ReservationSection() {
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      diners: "",
      date: new Date().toISOString().slice(0, 10),
      time: "",
      appointedTime: "",
      name: "",
      email: "",
      occasion: "",
      request: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("Values", values);
      setPending(false);
    },
  });

  return (
    <section className="reservation-subsection constrain-content">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (!submitted) {
            setSubmitted(true);
          }
          setPending(true);
          if (Object.keys(formik.errors).length > 0) {
            return setPending(false);
          }
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
        {formik.values.time !== "" && !formik.errors.time && (
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
              selected={formik.values.appointedTime}
              onSelected={(hour) =>
                formik.setFieldValue("appointedTime", hour.text)
              }
              submitted={submitted}
              error={formik.errors.appointedTime}
            />
          </div>
        )}
        <div className="reservation-details-subsection">
          <h4>Reservation Details Section</h4>
          <div className="grid reservation-details-subsection-grid">
            <NameInput
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              touched={formik.touched.name}
            />
            <EmailInput
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
            <OccassionSelectInput
              value={formik.values.occasion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.occasion}
              touched={formik.touched.occasion}
            />
            <RequestTextArea
              value={formik.values.request}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.request}
              touched={formik.touched.request}
            />
          </div>
        </div>
        <div className="submit-button">
          <button className="card-title" type="submit" disabled={pending}>
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

function TimeWindowTagButtons({
  hourWindow,
  selected,
  onSelected,
  submitted,
  error,
}) {
  return (
    <div>
      <div className="grid time-window-subsection-grid">
        {(hourWindow || []).map((hour) => (
          <button
            type="button"
            key={hour.text}
            className={`tag tag-button ${
              selected === hour.text && "tag-button-selected"
            }`}
            onClick={() => onSelected(hour)}
            disabled={hour.unavailable}
          >
            {hour.text}
          </button>
        ))}
      </div>
      {submitted && error && <p className="input-error">{error}</p>}
    </div>
  );
}

function NameInput({ value, onChange, onBlur, error, touched }) {
  const placeholder = "Name";
  const min = "1";

  return (
    <CustomText
      name="name"
      id="name"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      min={min}
      error={error}
      touched={touched}
    />
  );
}

function EmailInput({ value, onChange, onBlur, error, touched }) {
  const placeholder = "Email";

  return (
    <CustomText
      name="email"
      id="email"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      error={error}
      touched={touched}
    />
  );
}

function OccassionSelectInput({ value, onChange, onBlur, error, touched }) {
  const options = [
    {
      text: "Occasion (optional)",
      value: "",
    },
    {
      text: "Birthday",
      value: "1",
    },
    {
      text: "Anniversary",
      value: "2",
    },
  ];

  return (
    <CustomSelect
      name="occasion"
      id="occasion"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      icon={
        <FontAwesomeIcon icon={faCalendarXmark} className="custom-input-icon" />
      }
      options={options}
      className="occasion-select-input"
      error={error}
      touched={touched}
    />
  );
}

function RequestTextArea({ value, onChange, onBlur, error, touched }) {
  const placeholder = "Special Request (optional)";
  return (
    <CustomTextArea
      name="request"
      id="request"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      rows={2}
      cols={1}
      placeholder={placeholder}
      error={error}
      touched={touched}
    />
  );
}

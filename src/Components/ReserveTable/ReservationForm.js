import { Formik } from "formik";
import React from "react";
import { formSchema } from "../../utils/form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { delay, parseTime } from "../../utils/time";

import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons/faCalendarAlt";
import { faCalendarXmark } from "@fortawesome/free-regular-svg-icons/faCalendarXmark";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

import CustomDate from "../Common/Inputs/CustomDate";
import CustomSelect from "../Common/Inputs/CustomSelect";
import CustomText from "../Common/Inputs/CustomText";
import CustomTextArea from "../Common/Inputs/CustomTextArea";

import useMockHours from "../../Hooks/useMockHours";

export default function ReservationForm({
  hours,
  loading,
  updateHours,
  onSubmit,
}) {
  return (
    <>
      <Formik
        initialValues={{
          diners: "",
          date: new Date().toISOString().slice(0, 10),
          time: "",
          appointedTime: "",
          name: "",
          email: "",
          occasion: "",
          request: "",
        }}
        validationSchema={formSchema}
        onSubmit={async (values, actions) => {
          await delay(1000);
          onSubmit(values);
        }}
        validateOnMount={true}
      >
        {(props) => (
          <form
            aria-label="Reservation form"
            onSubmit={props.handleSubmit}
            noValidate
          >
            <div className="reservation-subsection custom-select-subsection">
              <h3 className="section-title">MAKE A RESERVATION</h3>
              <hr />
              <div className="grid custom-select-subsection-grid">
                <DinersSelectInput
                  value={props.values.diners}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.diners}
                  touched={props.touched.diners}
                  submitted={props.submitCount > 0}
                />
                <DateInput
                  value={props.values.date}
                  onChange={(event) => {
                    props.handleChange(event);
                    updateHours(event.target.value);
                  }}
                  onBlur={props.handleBlur}
                  touched={props.touched.date}
                  submitted={props.submitCount > 0}
                />
                <TimeSelectInput
                  options={hours}
                  value={props.values.time}
                  onChange={(event) => {
                    props.setFieldValue("appointedTime", "");
                    props.handleChange(event);
                  }}
                  onBlur={props.handleBlur}
                  error={props.errors.time}
                  touched={props.touched.time}
                  submitted={props.submitCount > 0}
                />
              </div>
            </div>
            {props.values.time !== "" && !props.errors.time && (
              <div className="time-window-subsection">
                <h4 className="card-title">Select a time</h4>
                <TimeWindowTagButtons
                  time={props.values.time}
                  selected={props.values.appointedTime}
                  onSelected={(hour) =>
                    props.setFieldValue("appointedTime", hour.text)
                  }
                  submitted={props.submitCount > 0}
                  error={props.errors.appointedTime}
                />
              </div>
            )}
            <div className="reservation-subsection reservation-details-subsection">
              <h4>Reservation Details Section</h4>
              <div className="grid reservation-details-subsection-grid">
                <NameInput
                  value={props.values.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.name}
                  touched={props.touched.name}
                  submitted={props.submitCount > 0}
                />
                <EmailInput
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.email}
                  touched={props.touched.email}
                  submitted={props.submitCount > 0}
                />
                <OccassionSelectInput
                  value={props.values.occasion}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.occasion}
                  touched={props.touched.occasion}
                  submitted={props.submitCount > 0}
                />
                <RequestTextArea
                  value={props.values.request}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.request}
                  touched={props.touched.request}
                  submitted={props.submitCount > 0}
                />
              </div>
            </div>
            <div className="submit-button">
              <button
                className="card-title"
                type="submit"
                aria-label="submit"
                disabled={props.isSubmitting || loading}
              >
                {props.isSubmitting ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

function DinersSelectInput({
  value,
  onChange,
  onBlur,
  error,
  touched,
  submitted,
}) {
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
      submitted={submitted}
      ariaLabel="Number of diners select"
    />
  );
}

function DateInput({ value, onChange, onBlur, error, touched, submitted }) {
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
      submitted={submitted}
      ariaLabel="Date picker for reservation"
    />
  );
}

function TimeSelectInput({
  value,
  options,
  onChange,
  onBlur,
  error,
  touched,
  submitted,
}) {
  return (
    <CustomSelect
      name="time"
      id="time"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      icon={<FontAwesomeIcon icon={faClock} className="custom-input-icon" />}
      options={options}
      className="diners-select-input"
      error={error}
      touched={touched}
      submitted={submitted}
      ariaLabel="Time picker for reservation"
    />
  );
}

function TimeWindowTagButtons({
  time,
  selected,
  onSelected,
  submitted,
  error,
  fetchedHours,
}) {
  const hours = useMockHours(time);
  return (
    <div aria-label="Tag buttons with available times based on selected time">
      <div className="grid time-window-subsection-grid">
        {(fetchedHours || hours).map((hour) => (
          <button
            type="button"
            key={hour.text}
            className={`tag tag-button ${
              selected === hour.text && "tag-button-selected"
            }`}
            onClick={() => onSelected(hour)}
            data-time={hour.text}
            disabled={hour.unavailable}
            aria-label={`Schedule reservation at ${hour.text}`}
          >
            {hour.text + (parseTime(hour.text).hour >= 12 ? " PM" : " AM")}
          </button>
        ))}
      </div>
      {submitted && error && <p className="input-error">{error}</p>}
    </div>
  );
}

function NameInput({ value, onChange, onBlur, error, touched, submitted }) {
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
      submitted={submitted}
      ariaLabel="Name input"
    />
  );
}

function EmailInput({ value, onChange, onBlur, error, touched, submitted }) {
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
      submitted={submitted}
      ariaLabel="Email input"
    />
  );
}

function OccassionSelectInput({
  value,
  onChange,
  onBlur,
  error,
  touched,
  submitted,
}) {
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
      submitted={submitted}
      ariaLabel="Optional occasion select"
    />
  );
}

function RequestTextArea({
  value,
  onChange,
  onBlur,
  error,
  touched,
  submitted,
}) {
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
      submitted={submitted}
      ariaLabel="Optional special requests"
    />
  );
}

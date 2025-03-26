import React from "react";
import { useLocation } from "react-router";
import { parseTime } from "../../utils/time";

import "../../styles/reserve/confirm-reserve.css";

export default function ConfirmReserveSection() {
  const location = useLocation();

  const reservationData = location.state?.reservationData;
  return (
    <section className="confirm-reserve-section grid confirm-reserve-section-grid vertical-padding-16 constrain-content">
      <h4 className="card-title">Your reservation is confirmed</h4>
      <p className="lead-text">
        {`${new Date(reservationData.date).toDateString()} at ${
          reservationData.appointedTime
        }
        ${parseTime(reservationData.appointedTime).hour >= 12 ? "PM" : "AM"}`}
      </p>
      <ul>
        <li className="paragraph-text vertical-padding-8">
          Name: {reservationData.name}
        </li>
        <li className="paragraph-text vertical-padding-8">
          Number of diners: {reservationData.diners}
        </li>
        <li className="paragraph-text vertical-padding-8">
          Special occasion: {reservationData.occasion || ""}
        </li>
        <li className="paragraph-text vertical-padding-8">
          Special requests: {reservationData.request || ""}
        </li>
      </ul>
    </section>
  );
}

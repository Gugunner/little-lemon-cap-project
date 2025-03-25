import React from "react";

import "../../styles/fonts.css";
import "../../styles/reserve/reservation.css";

import ReservationForm from "./ReservationForm";

export default function ReservationSection() {
  return (
    <section className="reservation-subsection constrain-content">
      <ReservationForm
        onSubmit={(values) => {
          console.log("Submitted values", values);
        }}
      />
    </section>
  );
}

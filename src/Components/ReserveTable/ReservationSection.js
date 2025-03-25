import React from "react";

import "../../styles/fonts.css";
import "../../styles/reserve/reservation.css";

import { submitAPI } from "../../api/api";
import ReservationForm from "./ReservationForm";

import useFormPayLoad from "../../Hooks/useFormPayLoad";

export default function ReservationSection() {
  const { state, updateHours } = useFormPayLoad();

  return (
    <section className="reservation-subsection constrain-content">
      <ReservationForm
        hours={state.hours}
        loading={state.loading}
        fetchError={state.error}
        updateHours={updateHours}
        onSubmit={(values) => {
          const success = submitAPI(values);
          if (success) {
            console.log("Submitted values", values);
          }
        }}
      />
    </section>
  );
}

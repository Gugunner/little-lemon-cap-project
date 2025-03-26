import React from "react";

import "../../styles/fonts.css";
import "../../styles/reserve/reservation.css";

import { submitAPI } from "../../api/api";
import ReservationForm from "./ReservationForm";

import { useNavigate } from "react-router";
import { confirmReservePath } from "../../Constants/paths";
import useFormPayLoad from "../../Hooks/useFormPayLoad";

export default function ReservationSection() {
  const { state, updateHours } = useFormPayLoad();

  const navigate = useNavigate();

  return (
    <section className="reservation-subsection constrain-content">
      <ReservationForm
        hours={state.hours}
        loading={state.loading}
        fetchError={state.error}
        updateHours={updateHours}
        onSubmit={async (values) => {
          const success = submitAPI(values);
          if (success) {
            navigate(confirmReservePath, {
              state: { reservationData: values },
            });
          }
        }}
      />
    </section>
  );
}

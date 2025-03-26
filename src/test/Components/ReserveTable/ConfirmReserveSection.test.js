import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import ConfirmReserveSection from "../../../Components/ReserveTable/ConfirmReserveSection";
import { confirmReservePath } from "../../../Constants/paths";

describe("Confirm reserve", () => {
  test("Given data passed to ConfirmReserveSection WHEN a user submits it THEN it is presented", async () => {
    const mockFormData = {
      diners: "2",
      date: "2025-03-25",
      time: "10:28",
      appointedTime: "9:00",
      name: "Testy",
      email: "test@test.com",
      occasion: "",
      request: "",
    };

    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: `/${confirmReservePath}`,

            state: { reservationData: mockFormData },
          },
        ]}
      >
        <Routes>
          <Route
            path={`/${confirmReservePath}`}
            element={<ConfirmReserveSection />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Your reservation is confirmed")
    ).toBeInTheDocument();
    expect(screen.getByText(`Name: ${mockFormData.name}`)).toBeInTheDocument();
  });
});

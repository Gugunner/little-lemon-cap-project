import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import React from "react";
import ReservationForm from "../../../Components/ReserveTable/ReservationForm";

import { delay } from "../../../utils/time";

describe("Reservation Form", () => {
  const initialHours = [
    { value: "09:28", text: "9:28" },
    { value: "10:28", text: "10:28" },
    { value: "11:28", text: "11:28" },
    { value: "12:28", text: "12:28" },
  ];

  test("GIVEN an empty form WHEN the submit button is pressed THEN the onSubmit prop function is not called", async () => {
    const onSubmit = jest.fn();
    render(<ReservationForm hours={initialHours} onSubmit={onSubmit} />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  test("GIVEN a filled form of all required fields WHEN the submit button is pressed THEN the onSubmit prop function gets the values", async () => {
    const onSubmit = jest.fn();

    const expectedValues = {
      diners: "2",
      date: "2025-03-25",
      time: "10:28",
      appointedTime: "",
      name: "Raul",
      email: "test@test.com",
      occasion: "",
      request: "",
    };

    render(
      <ReservationForm
        hours={initialHours}
        updateHours={() => {}}
        onSubmit={onSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText("Number of diners select"), {
      target: { value: expectedValues.diners },
    });

    fireEvent.change(screen.getByLabelText("Date picker for reservation"), {
      target: { value: expectedValues.date },
    });

    fireEvent.change(screen.getByLabelText("Time picker for reservation"), {
      target: { value: expectedValues.time },
    });

    await waitFor(() => {
      const tagButtons = screen.getAllByLabelText(/schedule reservation/i);
      const availableButton = tagButtons.find((tb) => !tb.disabled);
      expectedValues.appointedTime = availableButton?.getAttribute("data-time");
      fireEvent.click(availableButton);
    });

    fireEvent.change(screen.getByLabelText("Name input"), {
      target: { value: expectedValues.name },
    });

    fireEvent.change(screen.getByLabelText("Email input"), {
      target: { value: expectedValues.email },
    });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    await act(() => delay(1000));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining(expectedValues)
      );
    });
  });
});

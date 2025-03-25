/* eslint-disable indent */

import { useCallback, useEffect, useReducer } from "react";

import { fetchAPI } from "../api/api";

/**
 * A custom Hook that stores different form states and values using a reducer.
 *
 * The types for the reducer are loading, hours and error.
 *
 * @returns {{state: {loading: boolean, hours: [{value: string, text: string}], error: Object}, updateHours: (Date) => void}}
 */
export default function useFormPayLoad() {
  function reducer(state, action) {
    switch (action.type) {
      case "loading":
        return { ...state, loading: true, error: null };
      case "update-hours":
        return {
          ...state,
          loading: false,
          hours: [
            { value: "", text: "Time" },
            ...action.payload.map((d) => ({ value: d, text: d })),
          ],
          error: null,
        };
      case "error":
        return { ...state, loading: false, error: action.payload };
      default:
        throw Error("Unknown action.");
    }
  }

  const initialState = {
    loading: false,
    hours: [],
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * A callback Hook that dispatches the loading state, fetches the data and then updates the payload.
   *
   * @param {string} date - A date in the format "YYYY-MM-DD"
   */
  const updateHours = useCallback(async (date) => {
    dispatch({
      type: "loading",
    });
    const nextHours = fetchAPI(new Date(date));
    dispatch({
      type: "update-hours",
      payload: nextHours,
    });
  }, []);

  useEffect(() => {
    updateHours(new Date());
  }, [updateHours]);

  return { state, updateHours };
}

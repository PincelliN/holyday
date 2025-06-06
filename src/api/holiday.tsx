import axios from "axios";
import { HolidayResponse } from "../types/holiday";

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

export const getAllHoliday = (): Promise<HolidayResponse> => {
  return axios.get<HolidayResponse>(url).then((res) => res.data);
};

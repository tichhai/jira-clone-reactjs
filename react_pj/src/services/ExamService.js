//tương tác với BE
import { Axios } from "axios";

export class ExamService {
  constructor() {}
  getTaskApi = () => {
    return Axios({
      url: "",
      method: "GET",
    });
  };
}

export const examService = new ExamService()

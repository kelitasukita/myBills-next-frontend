import AxiosInstance from "./AxiosInstance";


export class ExpensesService {

  async listUnpaid(year: number, month: number) {
    const result = await AxiosInstance.get(`/expenses/unpaid?year=${year}&month=${month}`);

    return result.data;
  }

  async listPaid(year: number, month: number) {
    const result = await AxiosInstance.get(`/expenses/paid?year=${year}&month=${month}`);

    return result.data;
  }
}
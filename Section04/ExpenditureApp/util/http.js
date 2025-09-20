import axios from "axios";
import { FIREBASE_API_URL } from "@env";

export async function storeExpense(expenseData) {
  try {
    const url = FIREBASE_API_URL + "expenses.json";
    console.log("url : ", url);
    const response = await axios.post(url, expenseData);
    console.log("✅ Saved:", response.data);
    const id = response.data.name;
    return id;
  } catch (err) {
    console.error("❌ Error saving:", err);
  }
}

export async function fetchExpenses() {
  try {
    const url = FIREBASE_API_URL + "expenses.json";
    console.log("url : ", url);
    const res = await axios.get(url);
    const expenses = [];
    for (const key in res.data) {
      const expenseObj = {
        id: key,
        amount: res.data[key].amount,
        date: new Date(res.data[key].date),
        description: res.data[key].description,
      };
      expenses.push(expenseObj);
    }
    console.log("✅ Success fetching");
    return expenses;
  } catch (err) {
    console.error("❌ Error fetching :", err);
  }
}

export async function updateExpense(id, expenseData) {
  const url = FIREBASE_API_URL + `expenses/${id}.json?`;
  return await axios.put(url, expenseData);
}

export async function deleteExpense(id) {
  const url = FIREBASE_API_URL + `expenses/${id}.json?`;
  return await axios.delete(url);
}

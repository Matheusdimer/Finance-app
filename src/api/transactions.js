import { server } from "../config/apiConfig.json";

const url = server;

export async function createTransaction(transaction, token) {
  const response = await fetch(`${url}/transaction/create`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }),
    body: JSON.stringify(transaction)
  });

  const ret = await response.json();

  return ret;
}

export async function getAllTransactions(userId, token) {
  const response = await fetch(`${url}/transaction/${userId}`, {
    method: "GET",
    headers: new Headers({
      "Authorization": "Bearer " + token
    })
  });

  const ret = await response.json();
  return ret;
}

export async function getMonths(userId, token) {
  const response = await fetch(`${url}/transaction/list/months?user=${userId}`, {
    method: "GET",
    headers: new Headers({
      "Authorization": "Bearer " + token
    })
  });

  const ret = await response.json();

  if (ret.data.length > 0) {
    return {
      ok: ret.ok,
      data: ret.data[0].distinctDate
    }
  } else {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return {
      ok: ret.ok,
      data: [{month, year}]
    }
  }
}

export async function getTransactionsByMonth(userId, token, month, year) {
  const response = await fetch(`${url}/transaction/list/month?user=${userId}&month=${month}&year=${year}`, {
    method: "GET",
    headers: new Headers({
      "Authorization": "Bearer " + token
    })
  });

  const ret = await response.json();
  return ret;
}

export async function deleteTransaction(transactionId, token) {
  const response = await fetch(`${url}/transaction/${transactionId}`, {
    method: "DELETE",
    headers: new Headers({
      "Authorization": "Bearer " + token
    })
  });

  const ret = await response.json();

  return ret;
}
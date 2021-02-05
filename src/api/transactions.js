const url = "https://finance-backend.vercel.app";

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

export async function getTransactions(userId, token) {
  const response = await fetch(`${url}/transaction/${userId}`, {
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
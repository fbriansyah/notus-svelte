export async function get(url) {
  const response = await fetch(url);
  return response.json();
}

export async function post(url, data) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
}

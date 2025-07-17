async function getData() {
  const response = await fetch("/ouehiaehfkiejhkehkq", {
    method: "POST",
    body: JSON.stringify({ name: "Wasi" }),
    headers: {
      token: "adfad",
      "Content-Type": "application/json",
    },
  }); //  by defalut fetch use GET method
  const data = response.json();
  console.log("✌️data --->", data);
}

export async function GET(request) {
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: "Wasi" },
    { id: 2, name: "Sahil" },
  ];
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}


export async function POST(request) {
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: "Wasi" },
    { id: 2, name: "Sahil" },
  ];
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

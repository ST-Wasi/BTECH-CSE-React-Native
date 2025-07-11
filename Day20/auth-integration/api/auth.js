let backendAPI = "http://localhost:8080";

export const Register = async (email, password, fullname) => {
  try {
    const response = await fetch(`${backendAPI}/register`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        fullname,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const actualResponse = await response.json();
    console.log("✌️actualResponse --->", actualResponse);
  } catch (error) {}
};

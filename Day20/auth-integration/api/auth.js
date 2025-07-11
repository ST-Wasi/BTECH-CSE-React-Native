let backendAPI = "http://localhost:8080";

export const Register = async (email, password, fullname, setRole) => {
  try {
    const response = await fetch(`${backendAPI}/login`, {
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
    await AsynStorage.setItem("token", actualResponse.token);
    await AsynStorage.setItem("role", actualResponse.role);
    setRole(actualResponse.role);
  } catch (error) {}
};

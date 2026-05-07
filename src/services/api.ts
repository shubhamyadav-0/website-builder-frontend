const API_URL = "http://localhost:5000";

export const saveConfig = async (data: unknown) => {
  const response = await fetch(`${API_URL}/save-config`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getConfig = async () => {
  const response = await fetch(`${API_URL}/get-config`);
  return response.json();
};
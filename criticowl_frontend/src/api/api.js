export const loginUser = async (email, password) => {
  const response = await fetch("http://127.0.0.1:8000/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to login');
  }

  const data = await response.json();
  localStorage.setItem("token", data.token); // Збереження токена у локальне сховище
  return data;
};

export const getUserProfile = async (token) => {
  const response = await fetch("http://127.0.0.1:8000/api/profile/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  return response.json();
};

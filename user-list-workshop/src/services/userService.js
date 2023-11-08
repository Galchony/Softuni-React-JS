const baseUrl = "http://127.0.0.1:5500/server/data/users.json";

export const getAll = async () => {
  try {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
  } catch (error) {
    console.log(error);
  }
};

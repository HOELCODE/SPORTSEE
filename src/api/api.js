const API_URL = "http://localhost:3000"; // URL de l'API

export const fetchUserById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/user/${id}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données utilisateur");
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur API:", error);
    return null;
  }
};

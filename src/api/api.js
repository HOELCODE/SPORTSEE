const API_URL = "http://localhost:3000"; // URL de l'API

// Fonction pour récupérer les données de l'utilisateur
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

// Fonction pour récupérer les données d'activité de l'utilisateur
export const fetchUserActivity = async (id) => {
  try {
    const response = await fetch(`${API_URL}/user/${id}/activity`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données d'activité");
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur API:", error);
    return null;
  }
};

// Fonction pour récupérer les durées de session de l'utilisateur
export const fetchUserAverageSessions = async (id) => {
  try {
    const response = await fetch(`${API_URL}/user/${id}/average-sessions`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données d'activité");
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur API:", error);
    return null;
  }
};

// Fonction pour récupérer les performances de l'utilisateur
export const fetchUserPerformance = async (id) => {
  try {
    const response = await fetch(`${API_URL}/user/${id}/performance`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données d'activité");
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur API:", error);
    return null;
  }
};

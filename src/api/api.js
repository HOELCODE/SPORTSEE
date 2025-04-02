const API_URL = "http://localhost:3000"; // URL de l'API

// Fonction unique pour récupérer toutes les données utilisateur
export const fetchUserData = async (id) => {
  try {
    const responses = await Promise.all([
      fetch(`${API_URL}/user/${id}`),
      fetch(`${API_URL}/user/${id}/activity`),
      fetch(`${API_URL}/user/${id}/average-sessions`),
      fetch(`${API_URL}/user/${id}/performance`)
    ]);

    const [user, activity, averageSessions, performance] = await Promise.all(responses.map(res => {
      if (!res.ok) throw new Error("Erreur lors de la récupération des données");
      return res.json();
    }));

    return {
      user: user?.data ?? null,
      activity: activity?.data?.sessions ?? null,
      averageSessions: averageSessions?.data?.sessions ?? null,
      performance: {
        data: performance?.data?.data ?? null,
        kind: performance?.data?.kind ?? null
      }
    };

  } catch (error) {
    console.error("Erreur API:", error);
    return null;
  }
};

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


import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data.js';

export const getUserDataById = async (id) => {
  const user = USER_MAIN_DATA.find((u) => u.id === id) || null;
  const activity = USER_ACTIVITY.find((a) => a.userId === id)?.sessions || null;
  const averageSessions = USER_AVERAGE_SESSIONS.find((a) => a.userId === id)?.sessions || null;
  const performanceData = USER_PERFORMANCE.find((p) => p.userId === id);

  const performance = performanceData
    ? {
        data: performanceData.data,
        kind: performanceData.kind
      }
    : { data: null, kind: null };

  return {
    user,
    activity,
    averageSessions,
    performance
  };
};


const USE_MOCK_DATA = false;

export const getUserData = async (id) => {
  if (USE_MOCK_DATA) {
    console.log("Utilisation des données mockées");
    return getUserDataById(id); 
  } else {
    console.log("Récupération des données via API");
    return await fetchUserData(id);
  }
};
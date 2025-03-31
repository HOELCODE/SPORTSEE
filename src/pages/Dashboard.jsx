import { useEffect, useState } from "react";
import { fetchUserById, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from "../api/api.js";
import { useParams } from 'react-router-dom';

// Composants
import IndicatorBlock from '../components/Indicator.jsx';
import Activity from '../components/Activity.jsx';
import Duration from "../components/Duration.jsx";
import Intensity from "../components/Intensity.jsx";
import Score from "../components/Score.jsx";

// Images pour les blocs indicateurs
import energy from '../assets/energy.svg';
import chicken from '../assets/chicken.svg';
import apple from '../assets/apple.svg';
import cheeseburger from '../assets/cheeseburger.svg';

// css 
import '../css/Dashboard.css';

const Dashboard = () => {
  // User
  const [user, setUser] = useState(null);

  // Activity
  const [userActivity, setUserActivity] = useState(null);

  // Duration 
  const [UserAverageSessions, setUserAverageSessions] = useState(null);

  // Intensity
  const [userPerformance, setUserPerformance] = useState(null);
  const [performanceKind, setPerformanceKind] = useState(null);

  // ID
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {

        // Exécuter les deux requêtes en parallèle
        const [userResponse, activityResponse, durationResponse, PerformanceResponse] = await Promise.all([
          fetchUserById(id),
          fetchUserActivity(id),
          fetchUserAverageSessions(id),
          fetchUserPerformance(id),
        ]);

        // récupération data user
        if (userResponse?.data) {
          setUser(userResponse.data);
        } else {
          console.error("Données utilisateur manquantes !");
        }

        // récupération data activity
        if (activityResponse?.data?.sessions) {
          setUserActivity(activityResponse.data.sessions);
        } else {
          console.error("Données d'activité manquantes !");
        }

        // récupération data duration
        if (durationResponse?.data?.sessions) {
          setUserAverageSessions(durationResponse.data.sessions);
        } else {
          console.error("Données de durée manquantes !");
        }

        // récupération data performance
        if (PerformanceResponse?.data?.data) {
          setUserPerformance(PerformanceResponse.data.data);
        } if (PerformanceResponse?.data?.kind) {
          setPerformanceKind(PerformanceResponse.data.kind);
        }

      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="dashboard">
      {user ? (
        <>
          <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

          <div className="dashboard-content">
            <div className="dashboard-left">
              <div className="activity-block">
                {userActivity ? <Activity data={userActivity} /> : <p>Chargement des activités...</p>}
              </div>
              <div className="dashboard-three-columns">
                <div className="duration-block">
                  {UserAverageSessions ? <Duration data={UserAverageSessions} /> : <p>Chargement de la durée...</p>}
                </div>
                <div className="intensity-block">
                  {userPerformance ? <Intensity data={userPerformance} kind={performanceKind} /> : <p>Chargement de l'intensité...</p>}
                </div>
                <div className="score-block">
                  {user ? <Score data={user} /> : <p>Chargement du score...</p>}
                </div>
              </div>
            </div>
            <div className="indicator-block">
              <IndicatorBlock color="rgba(253, 81, 129, 0.1)" logo={energy} span="Calories" number={`${user.keyData.calorieCount}kCal`} />
              <IndicatorBlock color="#4AB8FF1A" logo={chicken} span="Protéines" number={`${user.keyData.proteinCount}g`} />
              <IndicatorBlock color="#FFF2CC" logo={apple} span="Glucides" number={`${user.keyData.carbohydrateCount}g`} />
              <IndicatorBlock color="#FD51811A" logo={cheeseburger} span="Lipides" number={`${user.keyData.lipidCount}g`} />
            </div>
          </div>
        </>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
};

export default Dashboard;

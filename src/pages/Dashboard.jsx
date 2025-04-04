import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getUserData } from "../api/api.js";

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

// Récupération des données en fonction de l'id dans l'url
const Dashboard = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    if (!id || isNaN(id)) return;

    const fetchData = async () => {
      const userId = parseInt(id); 
      
      const userData = await getUserData(userId);
      setData(userData);
    };

    fetchData();
  }, [id]);
  
  // Si les data sont null, alors on affiche message d'erreur
  if (!data) {
    return <div className="dashboard"><h1 className="bug-data">Pardonnez nous pour ce petit désagrément, veuillez recharger la page</h1></div>;
  } else {
    return (
      <div className="dashboard">
        {data && data.user ? (
          <>
            <h1>Bonjour <span>{data.user.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  
            <div className="dashboard-content">
              <div className="dashboard-left">
                <div className="activity-block">
                  {data.activity ? <Activity data={data.activity} /> : <p>Chargement des activités...</p>}
                </div>
                <div className="dashboard-three-columns">
                  <div className="duration-block">
                    {data.averageSessions ? <Duration data={data.averageSessions} /> : <p>Chargement de la durée...</p>}
                  </div>
                  <div className="intensity-block">
                    {data.performance.data ? <Intensity data={data.performance.data} kind={data.performance.kind} /> : <p>Chargement de l'intensité...</p>}
                  </div>
                  <div className="score-block">
                    {data.user ? <Score data={data.user} /> : <p>Chargement du score...</p>}
                  </div>
                </div>
              </div>
              <div className="indicator-block">
                <IndicatorBlock color="rgba(253, 81, 129, 0.1)" logo={energy} span="Calories" number={`${data.user.keyData.calorieCount}kCal`} />
                <IndicatorBlock color="#4AB8FF1A" logo={chicken} span="Protéines" number={`${data.user.keyData.proteinCount}g`} />
                <IndicatorBlock color="#FFF2CC" logo={apple} span="Glucides" number={`${data.user.keyData.carbohydrateCount}g`} />
                <IndicatorBlock color="#FD51811A" logo={cheeseburger} span="Lipides" number={`${data.user.keyData.lipidCount}g`} />
              </div>
            </div>
          </>
        ) : (
          <p>Chargement des données...</p>
        )}
      </div>
    );

  }

  
};

export default Dashboard;

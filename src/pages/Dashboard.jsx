import { useEffect, useState } from "react";
import { fetchUserById } from "../api/api.js";
import { useParams } from 'react-router-dom';
import '../css/Dashboard.css';
import IndicatorBlock from '../components/Indicator.jsx';

// Images bloque Indicator
import energy from '../assets/energy.svg';
import chicken from '../assets/chicken.svg';
import apple from '../assets/apple.svg';
import cheeseburger from '../assets/cheeseburger.svg';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  //Recupérer l'id dans l'url
  const { id } = useParams();

  //Récupérer les données de l'utilisateur via l'id
  useEffect(() => {
    const getUser = async () => {
      const response = await fetchUserById(id);
      if (response && response.data) {
        setUser(response.data);
      }
    };

    getUser();
  }, [id]);

  return (
    <div className="dashboard">
      {user ? (
        <>
          <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className="dashboard-content">
            <div className="indicator-block">
              <IndicatorBlock
                color="rgba(253, 81, 129, 0.1)"
                logo={energy}
                span="Calories"
                number={`${user.keyData.calorieCount}kCal`}
              />
              <IndicatorBlock
                color="#4AB8FF1A"
                logo={chicken}
                span="Protéines"
                number={`${user.keyData.proteinCount}g`}
              />
              <IndicatorBlock
                color="#FFF2CC"
                logo={apple}
                span="Glucides"
                number={`${user.keyData.carbohydrateCount}g`}
              />
              <IndicatorBlock
                color="#FD51811A"
                logo={cheeseburger}
                span="Lipides"
                number={`${user.keyData.lipidCount}g`}
              />
            </div>
            <div className="dashboard-left">
              <div className="activity-block">
              </div>
              <div className="dashboard-three-columns">
                <div className="duration-block"></div>
                <div className="intensity-block"></div>
                <div className="score-block"></div>
              </div>
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
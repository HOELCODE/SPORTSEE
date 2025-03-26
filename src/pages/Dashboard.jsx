import { useEffect, useState } from "react";
import { fetchUserById } from "../api/api.js";
import { useParams } from 'react-router-dom'

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
      <div>
        <h1>Dashboard</h1>
        {user ? (
          <div>
            <h2>
              {user.userInfos.firstName} {user.userInfos.lastName}
            </h2>
            <p>Âge : {user.userInfos.age} ans</p>
            <p>Score du jour : {user.todayScore * 100}%</p>
            <h3>Informations nutritionnelles</h3>
            <ul>
              <li>Calories : {user.keyData.calorieCount} kcal</li>
              <li>Protéines : {user.keyData.proteinCount} g</li>
              <li>Glucides : {user.keyData.carbohydrateCount} g</li>
              <li>Lipides : {user.keyData.lipidCount} g</li>
            </ul>
          </div>
        ) : (
          <p>Chargement des données...</p>
        )}
      </div>
    );
  };
  
  export default Dashboard;
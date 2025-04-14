# I/ Configuration de l'application

1/ Dans un dossier nommé "Spotsee" par exemple, cloné le dossier "backend" (https://github.com/OpenClassrooms-Student-Center/SportSee) et le dossier "frontend" (https://github.com/HOELCODE/SPORTSEE)

2/ ouvrir un terminal au dossier racine qui contient les deux dossier, "backend" et "frontend". Dans ce terminal exécutez la commande "cd backend" puis la commande "yarn dev".

3/ Ouvrez un deuxième terminal au dossier racine. éxécutez la commande "cd frontend" puis la commande "npm run dev".

4/ Vous pouvez maintenant accéder sur votre navigateur au lien donné à la suite de la commande "npm run dev"

# II/ Accès chemin tableau de bord sportif

Une fois sur le lien localhost dans votre navigateur, vous pouvez ajouter dans l'url /12 ou /18 en fonction du sportif ce qui donnera par exemple : http://localhost:5173/12 ou http://localhost:5173/18 en fonction du sportif.

# III/ Tester l'API et le MOCK

1/ Cas 1 : on récupére les données via API => dans le dossier "frontend" accédez au fichier /src/api/api.js et passez "false" dans la const "USE_MOCK_DATA".

2/ Cas 2 : on récupère les données via le fichier de données local => dans le dossier "frontend" accédez au fichier /src/api/api.js et passez "true" dans la const "USE_MOCK_DATA".

3/ Cas 3 : Aucuns des formats de données fonctionne, affichage message d'erreur : 

    - 3.1/ Dans le dossier "frontend" accédez au fichier /src/api/api.js et passez "false" dans la const "USE_MOCK_DATA".
    - 3.2/ Allez dans le terminal ou vous avez lancez le backend et faite "Ctrl + c" pour "kill" le terminal
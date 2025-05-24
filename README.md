# Task Manager Application

![Angular](https://img.shields.io/badge/Angular-17+-DD0031?logo=angular)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)

Application fullstack de gestion de tâches avec :
- **Frontend** : Angular 17+ (Standalone Components)
- **Backend** : Express.js API REST
- **Stockage** : Mémoire vive (sans base de données)

## Fonctionnalités

✅ Ajout/suppression de tâches  
✅ Marquer les tâches comme terminées  
✅ Filtrage des tâches (toutes/actives/terminées)  
✅ Validation des formulaires  
✅ Gestion d'erreurs complète  
✅ Interface responsive  

## Architecture
task-manager/
├── backend/ # API Express
│ ├── server.js
│ └── package.json
└── frontend/ # Application Angular
├── src/
│ ├── app/
│ │ ├── services/
│ │ ├── task-list/
│ │ └── task-form/
└── angular.json

## Installation

### Prérequis
- Node.js 18+
- Angular CLI 17+
- npm 9+

### Backend
```bash
cd task-manager-backend
npm install
npm start 
```
Serveur démarré sur http://localhost:3000
### Frontend
```bash
cd task-manager-frontend
npm install
ng serve
```
Application disponible sur http://localhost:4200

### Endpoints API
Méthode 	Endpoint	       Description
✅GET	     /api/tasks	       Récupère toutes les tâches
✅POST	     /api/tasks	       Ajoute une nouvelle tâche
✅PUT	     /api/tasks/:id	   Modifie une tâche existante
✅DELETE	 /api/tasks/:id    Supprime une tâche

### Captures d'écran
# Interface utilisateur avec filtre activé
![image](https://github.com/user-attachments/assets/a9d8369e-f7bb-4b4a-9e90-160c5cfc9ab2)
# Interface Postman 
## Requete GET :
![image](https://github.com/user-attachments/assets/ed950f78-12ba-4438-bdb7-3551c81b0941)
## Requete POST : 
![image](https://github.com/user-attachments/assets/0e7c16ca-c136-47c3-b8f4-08f7754b361e)
✅ En cas d'erreur :
## Requete PUT : 
![image](https://github.com/user-attachments/assets/9ba2b815-9c03-4caf-a3de-e08e0edc52cc)
## Requete DELETE : 
![image](https://github.com/user-attachments/assets/7d3f1a95-67ee-4b03-835c-0c442136f49e)

### Auteur
Yousra Msaouri Charroud 
yousramsaouri13@gmail.com
Linkedin : Yousra Msaouri / GitHub: yousraMsaouri

### Licence
MIT License - Copyright (c) 2024 [Votre Nom]

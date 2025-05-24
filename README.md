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
![image](https://github.com/user-attachments/assets/3e097b43-8544-4c66-a409-7d12d61f6f6f)

### Auteur
Yousra Msaouri Charroud 
yousramsaouri13@gmail.com
Linkedin : Yousra Msaouri / GitHub: yousraMsaouri

### Licence
MIT License - Copyright (c) 2024 [Votre Nom]

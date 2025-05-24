const express = require('express');
const cors = require('cors');
const app = express();

// Middleware CORS spécifique à Angular (port 4200)
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Access-Control-Allow-Methods', 'Access-Control-Allow-Headers']
}));
app.use(express.json());

// Données en mémoire
let tasks = [
    { id: 1, title: 'Apprendre Express', completed: false },
    { id: 2, title: 'Créer une API REST', completed: true }
];
let nextId = 3;

// GET: Afficher les tâches
app.get('/api/tasks', (req, res) => {
    try {
        res.json(tasks);
    } catch (error) {
        console.error('Erreur GET /api/tasks:', error);
        res.status(500).json({
            message: 'Erreur lors de la récupération des tâches',
            details: error.message
        });
    }
});

// POST: Ajouter une tâche
app.post('/api/tasks', (req, res) => {
    try {
        console.log('Corps reçu:', req.body);

        if (!req.body?.title?.trim()) {
            return res.status(400).json({
                message: 'Le titre est requis et ne peut pas être vide',
                received: req.body,
                example: { title: "Ma nouvelle tâche" }
            });
        }

        const newTask = {
            id: nextId++,
            title: req.body.title.trim(),
            completed: false
        };
        tasks.push(newTask);

        res.status(201).json(newTask);
    } catch (error) {
        console.error('Erreur POST /api/tasks:', error);
        res.status(500).json({
            message: 'Erreur lors de la création de la tâche',
            details: error.message
        });
    }
});

// PUT: Mettre à jour une tâche
app.put('/api/tasks/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                message: 'ID invalide : doit être un nombre',
                received: req.params.id
            });
        }

        const task = tasks.find(t => t.id === id);

        if (!task) {
            return res.status(404).json({
                message: `Tâche avec ID ${id} non trouvée`,
                availableIds: tasks.map(t => t.id),
                suggestion: "Utilisez GET /api/tasks pour voir la liste complète"
            });
        }

        if (req.body.title && typeof req.body.title === 'string') {
            task.title = req.body.title.trim();
        }

        if (req.body.completed !== undefined) {
            task.completed = Boolean(req.body.completed);
        }

        res.json(task);
    } catch (error) {
        console.error('Erreur PUT /api/tasks:', error);
        res.status(500).json({
            message: 'Erreur lors de la mise à jour de la tâche',
            details: error.message
        });
    }
});

// DELETE: Supprimer une tâche
app.delete('/api/tasks/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                message: 'ID invalide : doit être un nombre',
                received: req.params.id
            });
        }

        const initialLength = tasks.length;
        tasks = tasks.filter(t => t.id !== id);

        if (tasks.length === initialLength) {
            return res.status(404).json({
                message: `Impossible de supprimer - ID ${id} inexistant`,
                availableIds: tasks.length > 0 ? tasks.map(t => t.id) : 'Aucune tâche existante',
                action: 'Utilisez GET /api/tasks pour voir les tâches disponibles'
            });
        }

        res.json({
            message: 'Tâche supprimée avec succès',
            remainingTasks: tasks.length
        });
    } catch (error) {
        console.error('Erreur DELETE /api/tasks:', error);
        res.status(500).json({
            message: 'Erreur lors de la suppression de la tâche',
            details: error.message
        });
    }
});

// Gestion des routes inexistantes
app.use((req, res) => {
    res.status(404).json({
        message: 'Endpoint non trouvé',
        availableEndpoints: [
            'GET    /api/tasks',
            'POST   /api/tasks',
            'PUT    /api/tasks/:id',
            'DELETE /api/tasks/:id'
        ]
    });
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
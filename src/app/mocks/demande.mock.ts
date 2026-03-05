import {DemandeListeRVModel } from '../features/private/models/demande.model';

// base de données simulée pour les demandes de rendez-vous, 
// utilisée pour le développement et les tests avant 
// d'intégrer une API réelle ou une base de données


export const MOCK_DEMANDES:DemandeListeRVModel[] = [
    { 
        id: 1, 
        dateDemande: '2024-07-01', 
        heure: '10:00', 
        statut: 'En attente', 
        specialite: 'Cardiologie' 
    },
    { 
        id: 2, 
        dateDemande: '2024-07-05', 
        heure: '14:30', 
        statut: 'Acceptée', 
        specialite: 'Dermatologie' 
    },
    { 
        id: 3, 
        dateDemande: '2024-07-10', 
        heure: '16:45', 
        statut: 'Refusée', 
        specialite: 'Neurologie' 
    },
    {
        id: 4,
        dateDemande: '2024-07-15',
        heure: '09:00',
        statut: 'En attente',
        specialite: 'Pédiatrie'
    },
    {
        id: 5,
        dateDemande: '2024-07-20',
        heure: '11:30',
        statut: 'En attente',
        specialite: 'Orthopédie'
    },
    {
        id: 6,
        dateDemande: '2024-07-25',
        heure: '15:00', 
        statut: 'En attente',
        specialite: 'Gynécologie'
    },
    {
        id: 7,
        dateDemande: '2024-07-30',
        heure: '13:00',
        statut: 'En attente',
        specialite: 'Ophtalmologie'
    }
];
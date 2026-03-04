// class DemandeRV {
//   constructor(
//     public id: number,
//     public dateDemande: Date,
//     public statut: string,
//     public heure: string,
//   ){}
// }
// const demande1 = new DemandeRV(1, new Date('2026-01-15'), 'Acceptée', '10:00');

// class DemandeRVV2 {
//     public id: number;
//     public dateDemande: Date;
//     public statut: string;
//     public heure: string;
//   constructor(
//     id: number,
//     dateDemande: Date,
//     statut: string,
//     heure: string,
//   ){
//     this.id = id;
//     this.dateDemande = dateDemande;
//     this.statut = statut;
//     this.heure = heure;
//   }
// }
// const demande2 = new DemandeRVV2(2, new Date('2026-01-20'), 'En attente', '14:30');

// export enum SpecialiteModel {
//     CARDIOLOGIE = 'Cardiologie',
//     DERMATOLOGIE = 'Dermatologie',
//     NEUROLOGIE = 'Neurologie',
//     PEDIATRIE = 'Pédiatrie',
//     ORTHOPEDIE = 'Orthopédie',
//     GYNECOLOGIE = 'Gynécologie',
//     OPHTALMOLOGIE = 'Ophtalmologie',
//     PSYCHIATRIE = 'Psychiatrie',
//     RADIOLOGIE = 'Radiologie',
//     UROLOGIE = 'Urologie'
// }

// export enum StatutDemandeModel {
//     EN_ATTENTE = 'En attente',
//     ACCETPER = 'Acceptée',
//     REFUSER = 'Refusée'
// }

//class PatientModel {
//         private id: number;
//         private nom: string; 
//         private prenom: string;
//         private dateNaissance: string;
//         private telephone: string;
//         private email: string;

//         constructor(
//             id: number,
//             nom: string, 
//             prenom: string,
//             dateNaissance: string,
//             telephone: string,
//             email: string
//         ){
//             this.id = id;
//             this.nom = nom;
//             this.prenom = prenom;
//             this.dateNaissance = dateNaissance;
//             this.telephone = telephone;
//             this.email = email;
//         }
// }


export interface DemandeListeRVModel {
    id: number;
    dateDemande: String;
    statut: StatutDemandeModel;
    heure: string;
    specialite: SpecialiteModel;
}

export enum SpecialiteModel {
  CARDIOLOGIE = 'CARDIOLOGIE',
  DERMATOLOGIE = 'DERMATOLOGIE',
  NEUROLOGIE = 'NEUROLOGIE',
  PEDIATRIE = 'PEDIATRIE',
  OPHTALMOLOGIE = 'OPHTALMOLOGIE'
}

export enum StatutDemandeModel {
  EN_ATTENTE = 'EN_ATTENTE',
  ACCEPTER = 'ACCEPTER',
  REFUSER = 'REFUSER'
}

// export type SpecialiteModel = 
//     | 'Cardiologie'
//     | 'Dermatologie'
//     | 'Neurologie'
//     | 'Pédiatrie'
//     | 'Orthopédie'
//     | 'Gynécologie'
//     | 'Ophtalmologie'
//     | 'Psychiatrie'
//     | 'Radiologie'
//     | 'Urologie';

// export type StatutDemandeModel =
//     | 'En attente'
//     | 'Acceptée'
//     | 'Refusée'

// export interface DemandeRVFilterModel {
//     specialite?: SpecialiteModel|''; // Filtre optionnel pour la spécialité
//     statut?: StatutDemandeModel; // Filtre optionnel pour le statut
// }

// let filter1 : DemandeRVFilterModel = {
//     specialite: 'Cardiologie',
//     statut: 'En attente'
// };
// filter1.specialite = 'Dermatologie'; // Modification du filtre de spécialité
// filter1.statut = 'Acceptée'; // Modification du filtre de statut

// let filter2 : DemandeRVFilterModel = {
//     specialite: 'Dermatologie'
// };
// filter2.specialite = 'Neurologie'; // Modification du filtre de spécialité
// if (filter2.statut === undefined)
//     filter2.statut = 'En attente'; // Si le statut n'est pas défini, on le considère comme "En attente"

// let filter3 : DemandeRVFilterModel = {
//     statut: 'Acceptée'
// };
// let filter4 : DemandeRVFilterModel = {
//     // aucun filtre, on veut tout
// };
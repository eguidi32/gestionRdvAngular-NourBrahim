export interface PatientModel{
    id: number;
    numero: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse: string;
    antecedents: string;
}
//Omit creer un type qui contient tous les champs de PatientModel sauf id, car id est généré automatiquement lors de la création d'un patient.
//Pick creer un type qui contient seulement les champs nom, prenom, telephone, adresse et antecedents, car ce sont les champs nécessaires pour créer un patient.
//Required creer un type qui rend tous les champs de PatientModel obligatoires, car lors de la création d'un patient, tous les champs sont nécessaires.
//Partial creer un type qui rend tous les champs de PatientModel optionnels, car lors de la mise à jour d'un patient, on peut ne mettre à jour que certains champs.

export type PatientRequest = Omit<PatientModel, 'id'>;
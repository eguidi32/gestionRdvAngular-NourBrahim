import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListeRVModel,StatutDemandeModel,SpecialiteModel } from '../../models/demande.model';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent {
  title = "Mes demandes de rendez-vous";
  // onTitleClick(arg: string): void {
  //   alert("Vous avez cliqué sur le titre : " + arg);
  // }
  
  demandes : DemandeListeRVModel[] = [
    { id: 1, dateDemande: '2024-07-01', heure: '10:00', statut: StatutDemandeModel.EN_ATTENTE, specialite: SpecialiteModel.CARDIOLOGIE },
    { id: 2, dateDemande: '2024-07-05', heure: '14:30', statut: StatutDemandeModel.ACCEPTER, specialite: SpecialiteModel.DERMATOLOGIE },
    { id: 3, dateDemande: '2024-07-10', heure: '16:45', statut: StatutDemandeModel.REFUSER, specialite: SpecialiteModel.NEUROLOGIE }
  ];



}

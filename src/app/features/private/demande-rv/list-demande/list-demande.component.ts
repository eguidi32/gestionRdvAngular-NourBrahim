import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListeRVResponseModel, DemandeRVFilterModel,} from '../../models/demande.model';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit, OnDestroy {
  title = "Mes demandes de rendez-vous";
  demandesResponse? : DemandeListeRVResponseModel;

  filter:DemandeRVFilterModel = {
    statut: 'En attente',
    specialite: ''
  };
  constructor(private demandeService: DemandeService) {

  }
  ngOnDestroy(): void {
    alert("ListDemandeComponent est détruit");
  }
  private loadDemandes(): void {
    this.demandesResponse = this.demandeService.getDemandesRv(this.filter);
  }
  ngOnInit(): void {
    this.loadDemandes();
  }
  onFilterStatusChange(): void {
    this.loadDemandes();
  }
  onFilterSpecialiteChange(): void {
    this.loadDemandes();
  }
}

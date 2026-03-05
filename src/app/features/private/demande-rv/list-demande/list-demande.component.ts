import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListeRVModel, DemandeListeRVResponseModel, DemandeRVFilterModel,} from '../../models/demande.model';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit {
  title = "Mes demandes de rendez-vous";
  demandesResponse? : DemandeListeRVResponseModel;

  filter:DemandeRVFilterModel = {
    statut: 'En attente',
    specialite: ''
  };
  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.loadDemandes();
  }
  onFilterStatusChange(): void {
    this.loadDemandes();
  }

  private loadDemandes(): void {
    this.demandesResponse = this.demandeService.getDemandesRv(this.filter);
  }
  onFilterSpecialiteChange(): void {
    this.loadDemandes();
  }
}

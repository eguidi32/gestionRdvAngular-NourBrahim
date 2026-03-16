import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListeRVResponseModel, DemandeRVFilterModel } from '@models';
import { DemandeService } from '@services/demande.service';
import { FormsModule } from '@angular/forms';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
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
  onFilterStatusAndSpecialiteChange(): void {
    this.filter.page = 1; // Réinitialiser à la page 1 lors d'un changement de filtre
    this.loadDemandes();
  }
  onPageChange(page: number): void {
    this.filter.page = page;
    this.loadDemandes();
  }
  get desactivePrecedentPage(): boolean {
    return !(this.demandesResponse!=undefined && this.demandesResponse.currentPage > 1);
  }
  get desactiveSuivantPage(): boolean {
    return !(this.demandesResponse!=undefined && this.demandesResponse.currentPage < this.demandesResponse.totalPages);
  }

}

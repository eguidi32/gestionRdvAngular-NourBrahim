import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListeRVResponseModel, DemandeRVFilterModel } from '@models';
import { FormsModule } from '@angular/forms';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { DemandeMockService } from '../services/demande.mock.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit, OnDestroy {
  title = "Mes demandes de rendez-vous";
  demandesResponse? : DemandeListeRVResponseModel;
  private subscription?: Subscription;
  filter:DemandeRVFilterModel = {
    statut: 'En attente',
    specialite: ''
  };
  constructor(private demandeService: DemandeMockService) {

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();  
  }
  private loadDemandes(): void {
    this.subscription = this.demandeService.getDemandesRv(this.filter).subscribe({
      next: (response : DemandeListeRVResponseModel) => {
        this.demandesResponse = response;
      },
      error: (err) => {
        console.error("Erreur lors du chargement des demandes de rendez-vous", err);
      },
      complete: () => {console.log("Chargement des demandes de rendez-vous terminé");
      }
    });
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

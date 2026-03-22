import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '@mocks';
import { DemandeListeRVResponseModel, DemandeRVFilterModel } from '@models';
import { environment } from '@environments';
import { Observable, of, delay } from 'rxjs';
import { DemandeInterfaceService } from './interfaces/demande.interface.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeMockService implements DemandeInterfaceService {

  constructor() { }

  public getDemandesRv(filterDemande:DemandeRVFilterModel): Observable<DemandeListeRVResponseModel> {

    let demandes = [...MOCK_DEMANDES];
    if (filterDemande.statut) {
      demandes = demandes.filter(d => d.statut === filterDemande.statut);
    }
    if (filterDemande.specialite) {
      demandes = demandes.filter(d => d.specialite === filterDemande.specialite);
    }
    const page = filterDemande.page || 1;
    const size = filterDemande.size || environment.limit || 5;
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(demandes.length / size);
    
    // const pages: number[] = [];
    // for(let i = 1; i <= totalPages; i++){
    //   pages.push(i);
    // }

    const pages: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);

    const demandesByPage = demandes.slice(startIndex, endIndex);
    return of({
      data: demandesByPage,
      totalPages: totalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages: pages,
      size: size
    }).pipe(delay(5000));
  }
}

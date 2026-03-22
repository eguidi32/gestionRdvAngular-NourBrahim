import { DemandeListeRVResponseModel, DemandeRVFilterModel } from "@features/private/models";
import { Observable } from "rxjs/internal/Observable";

export interface DemandeInterfaceService {
    getDemandesRv(filterDemande:DemandeRVFilterModel): Observable<DemandeListeRVResponseModel>;
}
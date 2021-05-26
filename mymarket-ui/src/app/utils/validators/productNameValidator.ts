import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { OfferService } from 'src/app/services/offer/offer.service';

export class ProductNameValidator {
    static productNameExists(offerService: OfferService): AsyncValidatorFn{
        
        return (control:AbstractControl): Promise<{ [key: string]: any } | null> => {
            if(control.value == ''){
                return null;
            }else{
                return offerService.getProductByName(control.value).then((response:any) => {
                    console.log(response);
                    return response.name == control.value ?  null : {'productExists':{value: control.value}} ;
                }).catch(error => {
                    return {'productExists':{value: control.value}};
                })
            }
        }
    }
}
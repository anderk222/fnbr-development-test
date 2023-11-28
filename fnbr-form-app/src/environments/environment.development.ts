import { HttpHeaders} from '@angular/common/http';

export const environment = {

    url : 'http://localhost:8081/api/v1',
    headers : new HttpHeaders({'Content-Type': 'application/json'})
};

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError } from 'rxjs/operators';
import { User } from '../models';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class FunctionsService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }

}
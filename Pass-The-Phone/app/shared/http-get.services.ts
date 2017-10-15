// >> http-get-service
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class MyHttpGetService {
    private serverUrl = "https://opentdb.com/api_category.php";

    constructor(private http: Http) { }

    getData() {
        console.log("getData");
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl)
            .map(res => res.json());
    }

    getResponseInfo() {
        console.log("getResponseInfo");
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl)
            .do(res => res);
    }

    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        // headers.append("AuthKey", "");
        // headers.append("AuthToken", "");
        // headers.append("Content-Type", "");

        return headers;
    }
}
// << http-get-service
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(public http:HttpClient) { }
 
  get = (slug: string, data?: any, custom?: any) => {
    return new Promise((resolve, reject) => {
      this.call('GET', slug, resolve, reject, undefined, data, custom);
    });
  }

  post = (slug: string, data?: any, custom?: any) => {
      return new Promise((resolve, reject) => {
          this.call('POST', slug, resolve, reject, undefined, data, custom);
      });
  }

  protected call = (method, url, s, f, p, payload?, custom?) => {
    const request = new HttpRequest(method, url, payload, {
        headers: new HttpHeaders((custom && custom.headers) || {}),
        reportProgress: (custom && custom.reportProgress) || false,
        responseType: (custom && custom.responseType) || 'json'
    });
    this.http
        .request(request)
        .subscribe(
            (event: HttpEvent<any>) => {
                if (event) {
                    switch (event.type) {
                        case HttpEventType.Sent:
                            break;
                        case HttpEventType.ResponseHeader:
                            break;
                        case HttpEventType.DownloadProgress:
                            break;
                        case HttpEventType.Response:
                            if (event.status === 200) {
                                s(event.body);
                            } else {
                                f(event.body);
                            }
                            break;
                    }
                }
            },
            (error: Response) => {
                if (error instanceof HttpErrorResponse) {
                    if (
                        error.status !== 401 &&
                        error.url.indexOf('login') === -1
                      ) {
                        f(error);
                    } else {
                        f(error.error);
                    }
                } else {
                }
            }
        );
}
}

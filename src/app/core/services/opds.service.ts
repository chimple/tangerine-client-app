import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OpdsFeed } from '../models/opds/opds-feed';
import { OpdsGroup } from '../models/opds/opds-group';
import { OpdsPublication } from '../models/opds/opds-publication';

@Injectable({
  providedIn: 'root'
})
export class OpdsService {

  constructor(private http: HttpClient) { }

  /**
   * Fetches the root OPDS feed.
   * @param url The URL of the OPDS feed.
   */
  getFeed(url: string): Observable<OpdsFeed> {
    return this.http.get<any>(url).pipe(
      map(data => {
          return data as OpdsFeed;
      })
    );
  }

  /**
   * Fetches an OPDS Group.
   * @param url The URL of the group JSON.
   */
  getGroup(url: string): Observable<OpdsGroup> {
    return this.http.get<any>(url).pipe(
      map(data => new OpdsGroup(data))
    );
  }

  /**
   * Fetches an OPDS Publication (Form).
   * @param url The URL of the publication JSON.
   */
  getPublication(url: string): Observable<OpdsPublication> {
    return this.http.get<any>(url).pipe(
      map(data => new OpdsPublication(data))
    );
  }
}

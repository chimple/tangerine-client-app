import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OpdsFeed } from '../models/opds/opds-feed';
import { OpdsGroup } from '../models/opds/opds-group';
import { OpdsForm } from '../models/opds/opds-form';
import { CONSTANTS } from 'app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class OpdsService {

  constructor(private http: HttpClient) { }

  private getBaseUrl(): string {
      const url = localStorage.getItem(CONSTANTS.SERVER_URL) || 'https://ibiza-stage-tangerine-dev.web.app';
      console.log('OpdsService: Resolved Base URL', url);
      return url;
  }

  /**
   * Fetches the root OPDS feed.
   * @param url Optional full URL, otherwise uses base URL.
   */
  getFeed(url?: string): Observable<OpdsFeed> {
    const feedUrl = url || `${this.getBaseUrl()}/opds.json`;
    return this.http.get<any>(feedUrl).pipe(
      map(data => {
          return data as OpdsFeed;
      })
    );
  }

  /**
   * Fetches an OPDS Group.
   * @param url The full URL of the group JSON.
   */
  getGroup(url: string): Observable<OpdsGroup> {
    return this.http.get<any>(url).pipe(
      map(data => new OpdsGroup(data))
    );
  }

  /**
   * Fetches an OPDS Form (Publication).
   * @param url The full URL of the publication JSON.
   */
  getForm(url: string): Observable<OpdsForm> {
    return this.http.get<any>(url).pipe(
      map(data => new OpdsForm(data))
    );
  }

  /**
   * Fetches the root feed and returns a list of groups.
   */
  getGroupsFromFeed(): Observable<any[]> {
    const feedUrl = `${this.getBaseUrl()}/opds.json`;
    console.log('OpdsService: Fetching feed from', feedUrl);
    return this.getFeed(feedUrl).pipe(
      map(feed => {
        console.log('OpdsService: Raw feed data', feed);
        
        let groups = feed.groups;
        if (!groups && feed.navigation) {
            console.log('OpdsService: Using navigation property for groups');
            groups = feed.navigation;
        }

        if (!groups) {
          console.warn('OpdsService: No groups or navigation found in feed');
          return [];
        }
        return groups.map(entry => {
          // Robustly extract ID from the href, handling both relative and absolute URLs
          // E.g. "groups/sensata.json" -> "sensata"
          // E.g. "https://example.com/groups/sensata.json" -> "sensata"
          const href = entry.href;
          const filename = href.split('/').pop() || ''; 
          const shortId = filename.replace('.json', '');
          console.log(`OpdsService: Extracted ID "${shortId}" from href "${href}"`);
          
          return {
            id: shortId,
            label: entry.title || 'Untitled Group'
          };
        });
      })
    );
  }

  getGroupById(groupId: string): Observable<OpdsGroup> {
    // Safeguard: If ID is already a full URL, use it directly (or try to fix it)
    if (groupId.startsWith('http')) {
        console.warn('OpdsService: getGroupById received full URL, using as-is:', groupId);
        return this.getGroup(groupId);
    }
    const groupUrl = `${this.getBaseUrl()}/groups/${groupId}.json`;
    return this.getGroup(groupUrl);
  }

  getFormById(formId: string): Observable<OpdsForm> {
    if (formId.startsWith('http')) {
        console.warn('OpdsService: getFormById received full URL, using as-is:', formId);
        return this.getForm(formId);
    }
    const formUrl = `${this.getBaseUrl()}/forms/${formId}.json`;
    return this.getForm(formUrl);
  }
}

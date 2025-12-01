import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CONSTANTS } from 'app/shared/constants';

interface RawGroup { _id: string; label: string; }

export interface GroupItem { id: string; label: string; }

@Injectable({ providedIn: 'root' })
export class GroupService {
  private url = `${CONSTANTS.API_BASE}/nest/group/list`;

  constructor(private http: HttpClient) {}

  getGroups(): Observable<GroupItem[]> {
    const token = localStorage.getItem(CONSTANTS.AUTH_TOKEN) ?? '';

    return this.http.get<RawGroup[]>(this.url, {
      headers: { Authorization: token }
    }).pipe(
      map(list => (list || []).map(g => ({ id: g._id, label: g.label })))
    );
  }
}

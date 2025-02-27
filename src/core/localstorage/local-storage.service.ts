import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  public set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): any {
    const data = this.storage.getItem(key);
    if(data) return JSON.parse(data);
  }
}

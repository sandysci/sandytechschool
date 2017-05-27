import { Injectable } from '@angular/core';
// import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class StorageService {

  constructor() { 

  }

  setlocalStorage(key,value){
    return localStorage.setItem(key,value);

  }
  getlocalStorage(key){
    return localStorage.getItem(key);

  }
  removelocalStorage(key){
    return localStorage.removeItem(key);
  }

}

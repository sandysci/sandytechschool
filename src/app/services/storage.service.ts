import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class StorageService {

  constructor(private localStorageService: LocalStorageService) { 

  }

  setlocalStorage(key,value){
    return this.localStorageService.set(key,value);

  }
  getlocalStorage(key){
    return this.localStorageService.get(key);

  }
  removelocalStorage(key){
    return this.localStorageService.remove(key);
  }

}

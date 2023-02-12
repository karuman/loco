import { Injectable } from '@angular/core';
import { kairanLst } from './kairan';
import { kairan_lst } from './mock-kairan';

@Injectable({
  providedIn: 'root'
})
export class KairanService {

  constructor() { }

  getKairanLst(): kairanLst[] {
    return kairan_lst;
  }
}

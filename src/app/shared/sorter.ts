import { Injectable } from '@angular/core';

@Injectable()
export class Sorter {

  property: string = null;
  direction: number = 1;

  sort(collection: any[], prop: any) {
    
    this.direction = (this.property === prop) ? this.direction * -1 : 1;
    this.property = prop;

    collection.sort((a: any, b: any) => {
      const aVal: any = a[prop];
      const bVal: any = b[prop];

      if (aVal === bVal) {
        return 0;
      } else if (aVal > bVal) {
        return this.direction * -1;
      } else {
        return this.direction;
      }
    });
  }
}

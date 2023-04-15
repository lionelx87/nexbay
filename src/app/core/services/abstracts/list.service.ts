import { Injectable } from '@angular/core';
import { List } from '../../models/list.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class ListService {
  abstract getAll(): List[];

  abstract get(id: string): List | undefined;

  abstract remove(id: string): void;
}

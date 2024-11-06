import { WritableSignal } from '@angular/core';
import { Draft, produce } from 'immer';

type Modifier<T> = (draft: Draft<T>) => void;

export function modify<T>(signal: WritableSignal<T>, modifier: Modifier<T>) {
  const result = produce<T>(signal(), modifier);
  signal.set(result);
}

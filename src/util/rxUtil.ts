// let's not install svelte-rx - it's a tiny package
import { BehaviorSubject, Observable } from "rxjs";
import type { Readable } from "svelte/store";

/** Use Svelte's `set` instead of Rxjs's `next`.
 * https://github.com/ReactiveX/rxjs/issues/4740#issuecomment-490601347
 */
export class SvelteSubject<T> extends BehaviorSubject<T> {
  set(value: T) {
    super.next(value);
  }
}

/** Converts a Svelte store to an Observable  */
export function toObservable<T>(store: Readable<T>) {
  return new Observable<T>((observer) => {
    return store.subscribe((value: T) => observer.next(value));
  });
}

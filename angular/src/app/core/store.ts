import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';

abstract class Store<T> {
  private subject$: BehaviorSubject<T>;

  protected constructor (initialState: T) {
    this.subject$ = new BehaviorSubject(initialState);
  }

  get state$ (): Observable<T> {
    return this.subject$.asObservable().distinctUntilChanged();
  }

  get state (): T {
    return this.subject$.value;
  }

  get<S>(name: string): Observable<S> {
    return this.state$.pluck(name);
  }

  setState (nextState: T): void {
    this.subject$.next(nextState);
  }
}

export default Store;

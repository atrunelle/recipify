import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';

class Store<T> {
  private _state$: BehaviorSubject<T>;

  protected constructor (initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
  }

  get state$ (): Observable<T> {
    return this._state$.asObservable().distinctUntilChanged();
  }

  get state (): T {
    return this._state$.value;
  }

  get<S>(name: string): Observable<S> {
    return this.state$.pluck(name);
  }

  setState (nextState: T): void {
    this._state$.next(nextState);
  }
}

export default Store;

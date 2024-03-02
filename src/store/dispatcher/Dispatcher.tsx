import { dispatch } from '../index';
import { AnyAction } from 'redux';

export class Dispatcher {
    private static instance: Dispatcher;

    public static getInstance(): Dispatcher {
        if (!Dispatcher.instance) {
            Dispatcher.instance = new Dispatcher();
        }
        return Dispatcher.instance;
    }

    dispatchAction(action: AnyAction): void {
        dispatch(action);
    }
}

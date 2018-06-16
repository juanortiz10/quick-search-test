import { all } from 'redux-saga/effects';
import watcher from './watcher';

export default function* rootSaga() {
	yield all([watcher()]);
}

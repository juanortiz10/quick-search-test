import { takeLatest } from 'redux-saga/effects';
import { getSearchSaga } from './searchSaga';

import * as types from '../../consts/actionTypes';

export default function* watcher() {
	yield takeLatest(types.GET_QUICK_SEARCH, getSearchSaga);
}

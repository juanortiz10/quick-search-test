import { put, call } from 'redux-saga/effects';
import { getSearchRequest } from '../api';
import * as types from '../../consts/actionTypes';

export function* getSearchSaga({ payload }) {
	try {
		const data = yield call(getSearchRequest, payload);
		yield put({ type: types.GET_QUICK_SEARCH_SUCCESS, data });
	} catch (error) {
		yield put({ type: types.GET_QUICK_SEARCH_ERROR, error });
	}
}

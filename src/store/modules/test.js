import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

//액션 타입 정의하기
const TOAST_ACTION = 'test/TOAST_ACTION';

//액션 생성 함수 만들기
export const toastAction = createAction(TOAST_ACTION);

//초기상태 정의하기
const initialState = fromJS({
  toastValue: "",
});

//리듀서 정의하기
export default handleActions({
  [TOAST_ACTION]: (state, action) => {
    return state.set('toastValue', action.payload);
  }
}, initialState);
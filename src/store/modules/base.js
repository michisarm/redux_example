import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

//액션 타입 정의하기
const SHOW_BACKGROUND_COLOR = 'base/SHOW_BACKGROUND_COLOR';
const HIDE_BACKGROUND_COLOR = 'base/HIDE_BACKGROUND_COLOR';

//액션 생성 함수 만들기
export const showBackgroundColor = createAction(SHOW_BACKGROUND_COLOR);
export const hideBackgroundColor = createAction(HIDE_BACKGROUND_COLOR);

//초기상태 정의하기
const initialState = fromJS({
  isBackgroundColorChange: false,
});

//리듀서 정의하기
export default handleActions({
  [SHOW_BACKGROUND_COLOR]: (state, action) => state
    .set('isBackgroundColorChange',true),
  [HIDE_BACKGROUND_COLOR]: (state, action) => state
    .set('isBackgroundColorChange',false)
}, initialState);
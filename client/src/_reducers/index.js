import { combineReducers } from 'redux'; //6 스토어안에 리듀스들이 여러가지있을수있는데 변환값들을 리턴해주는것이 리듀서이다 ex.유저에관한 state, 구독에관한 state 의 리듀서들을 하나로 합쳐주는것을 컴바인리듀서라는것이다
import user from './user_reducer';


//7
const rootReducer = combineReducers({
    user
})

export default rootReducer;
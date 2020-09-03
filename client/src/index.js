import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; //1.provider라는것을 불러온다
import 'antd/dist/antd.css';
import { applyMiddleware, createStore } from 'redux'; //3
import promiseMiddleware from 'redux-promise'; //4 스토어는 객체받게 받지못하기떄문에 4,5번을 써준다
import ReduxThunk from 'redux-thunk';  //5
import Reducer from './_reducers'; //7  6번에만든 리듀스를 임포트해준다


//2.provider태그로 감싸준다 그안에 storte를써준다 thunk,promise를받기위해선 아래와같은것을 해줘야한다(function,promise)
//_reducers 로가서 index.js를 만들어준뒤 6번을 ㄱㄱ
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <App />
    </Provider>
    , document.getElementById('root'));
//8.리덕스를 편히 쓰기위해 데브툴을 다운받아 쓰기위해서 안에와같은 익스텐션을 써준다 

serviceWorker.unregister();

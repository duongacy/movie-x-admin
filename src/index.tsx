import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/configureStore';
import './i18next';
import { Suspense } from 'react';

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading</div>}>
            <App />
        </Suspense>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();

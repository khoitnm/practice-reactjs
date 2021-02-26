import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
});

/**
 * Original explanation: https://redux-toolkit.js.org/tutorials/advanced-tutorial
 *
 * "Next, we'll create the store instance, including hot-reloading the root reducer.
 * By using the module.hot API for reloading,
 * we can re-import the new version of the root reducer function whenever it's been recompiled,
 * and tell the store to use the new version instead."
 *
 * View more about `module.hot`: https://webpack.js.org/concepts/hot-module-replacement/
 * Note: need dependency `@types/webpack-env`
 */
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
        // Sourcecode: https://redux-toolkit.js.org/tutorials/advanced-tutorial (click "Open Sandbox" section)
        // Explanation: https://stackoverflow.com/questions/43247696/javascript-require-vs-require-default
        // "The HMR interface code cannot use import as it doesn't work inline."
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const newRootReducer = require('./rootReducer').default;
        store.replaceReducer(newRootReducer);
    });
}

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;

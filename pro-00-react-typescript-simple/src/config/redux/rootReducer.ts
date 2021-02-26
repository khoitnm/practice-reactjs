import { combineReducers } from '@reduxjs/toolkit';
import comp01SimpleUseSelectSlice from '../../comp-01-simple-useSelect/state/Comp01SimpleUseSelectSlice';
import comp02SimpleUseEffectSlice from '../../comp-02-simple-useEffect/state/Comp02SimpleUseEffectSlice';
import comp03UseEffectUseSelectorSlice from '../../comp-03-useEffect-useSelector/state/Comp03UseEffectUseSelectorSlice';
import comp04ClickButtonSlice from '../../comp-04-clickButton/state/Comp04ClickButtonSlice';

const rootReducer = combineReducers({
    comp01SimpleUseSelectSlice,
    comp02SimpleUseEffectSlice,
    comp03UseEffectUseSelectorSlice,
    comp04ClickButtonSlice,
});
/**
 * The reason why do we need this RootState type:
 * https://redux-toolkit.js.org/tutorials/advanced-tutorial
 *
 * "we're going to want to know what the TypeScript type is for that root state object,
 * because we need to declare what the type of the state variable is whenever our code needs to access the Redux store state
 * (such as in mapState functions, useSelector selectors, and getState in thunks).
 *
 * We could manually write a TS type with the correct types for each state slice,
 * but we'd have to keep updating that type every time we make any change to the state structure in our slices.
 * Fortunately, TS is usually pretty good at inferring types from the code we've already written.
 * In this case, we can define a type that says "this type is whatever gets returned from rootReducer",
 * and TS will automatically figure out whatever that contains as the code is changed.
 * If we export that type, other parts of the app can use it, and we know that it's up to date.
 * All we have to do is use the built-in TS ReturnType utility type,
 * and feed in "the type of the rootReducer function" as its generic argument."
 */
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

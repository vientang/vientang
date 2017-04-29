import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from '../reducers'

var store
export default {

	configure: (initialState) => { // initialState can be null
		
		const reducers = combineReducers({ // insert reducers here
			user: userReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)

			return store
		}

		store = createStore(
		    reducers,
		    applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}


// export default () => {
// 	let store = null

// 	const configure = (initialState) => {
// 		const reducers = combineReducers({ // insert reducers here
// 			user: userReducer
// 		})

// 		if (initialState){
// 			store = createStore(
// 			    reducers,
// 			    initialState,
// 			    applyMiddleware(thunk)
// 			)

// 			return store
// 		}

// 		store = createStore(
// 		    reducers,
// 		    applyMiddleware(thunk)
// 		)

// 		return store
// 	}

// 	const currentStore = () => {
// 		return store
// 	}

// 	const instance = {
// 		configure: configure,
// 		currentStore: currentStore
// 	}

// 	return instance
// }



import turbo from 'turbo360'
const APP_ID = "<MY_APP_ID>"

const postRequest = (resource, params, actionType) => {
	return dispatch => turbo({site_id:APP_ID}).create(resource, params)
		.then(result => {
			if (actionType != null){
				dispatch({
					type: actionType,
					data: result || results
				})
			}

			return result
		})
		.catch(err => {
			throw err
		})
}

const getRequest = (resource, params, actionType) => {
	return dispatch => turbo({site_id:APP_ID}).fetch(resource, params)
		.then(results => {
			if (actionType != null){
				dispatch({
					type: actionType,
					params: params, // can be null
					data: results || result
				})
			}
			
			return results
		})
		.catch(err => {
			throw err
		})
}

const putRequest = (resource, entity, params, actionType) => {
	return dispatch => turbo({site_id:APP_ID}).update(resource, entity, params)
		.then(result => {
			if (actionType != null){
				dispatch({
					type: actionType,
					data: result || results
				})
			}

			return result
		})
		.catch(err => {
			throw err
		})
}

const deleteRequest = (resource, entity, actionType) => {
	return dispatch => turbo({site_id:APP_ID}).remove(resource, entity)
		.then(result => {
			if (actionType != null){
				dispatch({
					type: actionType,
					data: result || results
				})
			}

			return result
		})
		.catch(err => {
			throw err
		})
}

export default {

	getRequest: getRequest,
	postRequest: postRequest,
	putRequest: putRequest,
	deleteRequest: deleteRequest

}

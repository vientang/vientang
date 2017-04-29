import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Users extends Component {
	constructor(){
		super()
		this.state = {
			error: null,
			user: {
				username: ''
			}
		}
	}

	componentDidMount(){
		this.props.fetchUsers({})
		.then(response => {
			console.log('USERS: '+JSON.stringify(response))

		})
		.catch(err => {
			console.log('ERROR: '+err.message)
		})
	}

	updateUser(field, event){
		if (event)
			event.preventDefault()

		let updated = Object.assign({}, this.state.user)
		updated[field] = event.target.value
		this.setState({
			user: updated
		})
	}

	submitUser(event){
		if (event)
			event.preventDefault()

		this.props.addUser(this.state.user)
		.then(response => {

		})
		.catch(err => {
			// alert(err.message)
			this.setState({
				error: err
			})
		})
	}

	render(){
		const usersList = this.props.users.all || []

		const joinTurbo = (
			<div>
				<a target="_blank" href="https://www.velocity360.io/turbo">Join Turbo!</a>

			</div>
		)

		return (
			<div>
				<h3>Add User</h3>
				<input onChange={this.updateUser.bind(this, 'username')} type="text" placeholder="username" />
				<br />
				<button onClick={this.submitUser.bind(this)}>Submit</button>
				<br />

				<ol>
					{ usersList.map((user, i) => {
							return <li key={user.id}>{user.username}</li>
						})
					}
				</ol>

				{ (this.state.error == null) ? null : joinTurbo }


			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		users: state.user
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchUsers: (params) => dispatch(actions.fetchUsers(params)),
		addUser: (params) => dispatch(actions.addUser(params))

	}
}

export default connect(stateToProps, dispatchToProps)(Users)
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Redirect, withRouter } from 'react-router-dom'
import { showList, updateList } from '../../api/list'

class UpdateProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: '',
      description: ''
    }
  }

  componentDidMount () {
    const { match, user } = this.props

    showList(match.params.id, user).then((res) =>
      this.setState({
        item: res.data.list.item,
        description: res.data.list.description
      })
    )
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history, match } = this.props

  updateList(this.state, match.params.id, user)
    .then(() => {
      msgAlert({
        heading: 'Updated Item',
        message: 'Item updated',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Update failed',
        message: 'Update error: ' + error.message,
        variant: 'danger'
      })
    })
    .then(() => history.push('/lists/' + match.params.id))
}

render () {
  if (this.state.updated) {
    return <Redirect to={'/lists/' + this.props.match.params.id} />
  }
  return (
    <div>
      <Form
        className='container col-sm-10 col-md-8 mx-auto mt-5'
        onSubmit={this.handleSubmit}>
        <h3>Update Item</h3>
        <Form.Group controlId='item'>
          <Form.Label>Item</Form.Label>
          <Form.Control
            required
            name='item'
            value={this.state.item}
            placeholder='....'
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            name='description'
            value={this.state.description}
            placeholder='....'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          onClick={this.msgAlert}
          className='btn2'
          variant='outline-secondary'
          type='submit'>Update
        </Button>
      </Form>
    </div>
  )
}
}

export default withRouter(UpdateProfile)

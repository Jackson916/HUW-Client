import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { showList, updateList } from '../../api/list'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class UpdateList extends Component {
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
        username: res.data.list.username,
        first: res.data.list.first,
        last: res.data.list.last
      })
    )
  }

        handleChange = (event) =>
          this.setState({
            [event.target.name]: event.target.value
          })

        setName (event) {
          this.setState({
            name: event.target.value
          })
        }

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
                heading: 'Item update failed',
                message: 'Update error: ' + error.message,
                variant: 'danger'
              })
            })
            .then(() => history.push('/list/' + match.params.id))
        }

        render () {
          return (
            <>
              <Form
                className='container col-sm-10 col-md-8 mx-auto mt-5'
                onSubmit={this.handleSubmit}>
                <div className='box'>
                  <h3>Create Item</h3>
                </div>
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
                  className='btn2 btn-lg'
                  variant='outline-secondary'
                  type='submit'>
                            Submit
                </Button>
              </Form>
            </>
          )
        }
}

export default withRouter(UpdateList)

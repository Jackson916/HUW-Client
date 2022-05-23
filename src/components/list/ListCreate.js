import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { createList } from '../../api/list'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class CreateList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: '',
      description: ''
    }
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

          const { user, msgAlert, history } = this.props
          let responseData
          createList(this.state, user)
            .then((res) => {
              msgAlert({
                heading: 'Item created',
                message: 'Item created!',
                variant: 'success'
              })
              return res
            })
            .then((res) => {
              return (responseData = res.data.list._id)
            })
            .then(() => {
              history.push(`/list/${responseData}`)
            })
            .catch((error) => {
              msgAlert({
                heading: 'Item creation failed',
                message: 'Item error: ' + error.message,
                variant: 'danger'
              })
            })
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

export default withRouter(CreateList)
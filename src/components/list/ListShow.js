import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import { showList, deleteList } from '../../api/list'
import Card from 'react-bootstrap/Card'

class ShowList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showList(match.params.id, user)
      .then((res) => this.setState({ list: res.data.list }))
      .then(() => {
        msgAlert({
          heading: 'New Item Created',
          message: 'You can now Update or Delete the Item',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Show Item failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

        handleDelete = () => {
          const { match, user, msgAlert, history } = this.props

          deleteList(match.params.id, user)
            .then(() => history.push('/list'))
            .then(() => {
              msgAlert({
                heading: 'Delete success',
                message: 'Successfully deleted',
                variant: 'success'
              })
            })
            .catch((error) => {
              msgAlert({
                heading: 'Delete fail',
                message: 'Delete error: ' + error.message,
                variant: 'danger'
              })
            })
        }

        render () {
          if (this.state.list === null) {
            return 'Loading...'
          }

          const { item, description, owner } = this.state.list
          const { user, history, match } = this.props

          return (
            <div className='container col-sm-10 col-md-8'>
              <>
                <Card className='card' border='light' style={{ width: '30rem' }}>
                  <Card.Header className='cardHeader'>
                    {item}
                  </Card.Header>
                  <Card.Body className='cardColor'>
                    <Card.Title className='cardColor'>
                      <p>This is a {item}!</p>
                    </Card.Title>
                    <Card.Text>
                      <p>Notes: {description}</p>
                    </Card.Text>
                    {user._id === owner && (
                      <>
                        <Button
                          className='formButton btn1'
                          variant='outline-dark'
                          onClick={this.handleDelete}>
                                            Delete
                        </Button>
                        <Button
                          className='formButton btn1'
                          variant='outline-dark'
                          onClick={() =>
                            history.push(`/list/${match.params.id}/edit`)
                          }>
                                            Update
                        </Button>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </>
            </div>
          )
        }
}

export default withRouter(ShowList)
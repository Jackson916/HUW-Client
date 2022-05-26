import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import { showList, deleteList } from '../../api/list'
import Card from 'react-bootstrap/Card'
import './ListShow.css'
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
              .then(() => history.push('/lists'))
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
              <div className='Cards'>
                <>
                  <Card className='card' border='dark' style={{ width: '30rem' }}>
                    <Card.Header className='cardHeader'></Card.Header>
                    <Card.Body className='cardColor'>
                      <Card.Title className='cardColor'>
                        <p>OCIE: {item}</p>
                      </Card.Title>
                      <Card.Text>
                        <p>Notes: {description}</p>
                      </Card.Text>
                      {user._id === owner && (
                        <>
                          <Button
                            className='formButton btn1'
                            variant='light'
                            onClick={this.handleDelete}>
                            Delete
                          </Button>
                          <Button
                            className='formButton btn1'
                            variant='danger'
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

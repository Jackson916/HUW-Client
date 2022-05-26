import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexList } from '../../api/list'
import './ListIndex.css'
class IndexList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: []
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexList(user)
      .then(res => this.setState({ list: res.data.list }))
      .then(() => {
        msgAlert({
          heading: 'Index success',
          message: 'Successfully indexed',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Index fail',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { list } = this.state

    if (list === null) {
      return 'Loading...'
    }

    let listJSX
    if (list.length === 0) {
      listJSX = 'No items created.'
    } else {
      listJSX = list.map(list => (
        <h2 key={list._id}>
          <Link to={`/list/${list._id}`}>{list.item}
          </Link>
        </h2>
      ))
    }
    return (
      <>
        <h1>My List:</h1>
        <ul>
          {listJSX}
        </ul>
      </>
    )
  }
}

export default IndexList

/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import Particles from 'react-tsparticles'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { loadFull } from 'tsparticles'
import particleOptions from './Particle/ParticleOptions.json'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import IndexList from './components/list/ListIndex'
import ShowList from './components/list/ListShow'
import CreateList from './components/list/ListCreate'
import UpdateList from './components/list/ListUpdate'

const particlesInit = async (main) => {
  await loadFull(main)
}

const particlesLoaded = (container) => {
}
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

      setUser = (user) => this.setState({ user })

      clearUser = () => this.setState({ user: null })

      deleteAlert = (id) => {
        this.setState((state) => {
          return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
        })
      }

      msgAlert = ({ heading, message, variant }) => {
        const id = uuid()
        this.setState((state) => {
          return {
            msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
          }
        })
      }

      render () {
        const { msgAlerts, user } = this.state

        return (
          <Fragment>
            <Header user={user} />
            {msgAlerts.map((msgAlert) => (
              <AutoDismissAlert
                key={msgAlert.id}
                heading={msgAlert.heading}
                variant={msgAlert.variant}
                message={msgAlert.message}
                id={msgAlert.id}
                deleteAlert={this.deleteAlert}
              />
            ))}
            <main className='container'>
              <Route
                path='/sign-up'
                render={() => (
                  <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
                )}
              />
              <Route
                path='/sign-in'
                render={() => (
                  <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
                )}
              />
              <AuthenticatedRoute
                user={user}
                path='/sign-out'
                render={() => (
                  <SignOut
                    msgAlert={this.msgAlert}
                    clearUser={this.clearUser}
                    user={user}
                  />
                )}
              />
              <AuthenticatedRoute
                user={user}
                path='/change-password'
                render={() => (
                  <ChangePassword msgAlert={this.msgAlert} user={user} />
                )}
              />
              <AuthenticatedRoute
                user={user}
                path='/create-list'
                render={() => <CreateList msgAlert={this.msgAlert} user={user} />}
              />
              <AuthenticatedRoute
                user={user}
                path='/lists'
                render={() => <IndexList msgAlert={this.msgAlert} user={user} />}
              />
              <AuthenticatedRoute
                user={user}
                path='/list/:id'
                render={() => <ShowList msgAlert={this.msgAlert} user={user} />}
              />
              <AuthenticatedRoute
                user={user}
                path='/list/:id/edit'
                render={() => <UpdateList msgAlert={this.msgAlert} user={user} />}
              />
              <Particles
                options={particleOptions}
                init={particlesInit}
                loaded={particlesLoaded}
              />
            </main>
          </Fragment>
        )
      }
}

export default App

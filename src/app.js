import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import NewSessionPage from './pages/new-session/new-session.page'
// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'
// import { auth, createUserProfileDocument } from './firebase/firestore'
// import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.page'
// import { selectCurrentUser } from './redux/user/user.selector'
// import { setCurrentUser } from './redux/user/user.slice'

// const mapState = createStructuredSelector({
//   currentUser: selectCurrentUser,
// })

// const mapDispatch = { setCurrentUser }

class App extends React.Component {
  // unsubscribeFromAuth = null

  // componentDidMount() {
  //   const { setCurrentUser } = this.props

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth)

  //       userRef.onSnapshot((snapShot) => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         })
  //       })
  //     }

  //     setCurrentUser(userAuth)
  //   })
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth()
  // }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/newsession" component={NewSessionPage} />
            {/* <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
              }
            /> */}
          </Switch>
        </div>
      </div>
    )
  }
}

export default App

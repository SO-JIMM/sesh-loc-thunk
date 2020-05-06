import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { auth } from '../../firebase/firestore'
// import { selectCurrentUser } from '../../redux/user/user.selector'
// import { createStructuredSelector } from 'reselect'

// const mapState = createStructuredSelector({
//   currentUser: selectCurrentUser,
// })

const Header = () => {
  return (
    <div className="header">
      <div className="link-container">
        <Link to="/">Home</Link>
        {/* {currentUser ? (
          <Link className="option" to="/" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )} */}
      </div>
    </div>
  )
}
export default Header
// export default connect(mapState)(Header)

import React from 'react'
import Useritem from './Useritem'
import Spinner from '../components/layout/Spinner'
import PropTypes from 'prop-types'

const Users = ({users, loading}) =>  {

    if(loading){
        <Spinner/>
    }else{
        return (
            <div style={userStyle}>
              {users.map(user => (
                  <Useritem key={user.id} user={user}/>
              ))}
            </div>
          )
    }
   
  
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display : "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: '1rem'

}

export default Users

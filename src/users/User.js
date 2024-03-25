import React, { Fragment,Component } from 'react'
//import Spinner from '../layout/Spinner'//
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }

    static = {
      loading:PropTypes.bool,
      user:PropTypes.func.isRequired,
      getUser:PropTypes.func.isRequired
    }

  render() {
    
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const {loading} = this.props;

       

    return <Fragment>
       <Link to='/' className='btn btn-light'>Back To Search</Link>
       Hireable: {' '}
       {hireable ? (<i className='fa fa-check text-success'/>) :
        (<i className='fa fa-time-circle text-danger'/>)}

<div className='card grid-2'>
     <div className='all-center'>
        <img src={avatar_url} className='round-img' alt='' style={{width:'150px'}}/>
        <h1>{name}</h1>
        <p>location: {location}</p>

          <div>
            {bio && (<Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
             </Fragment>)}
             <a href={html_url} className='btn btn-dark my-1'>Vist Github Profile</a>
             <ul>
              <li>
                {login && <Fragment>
                  <strong>Username:</strong> {login}
                  </Fragment>}
              </li>
              <li>
                {company && <Fragment>
                  <strong>company:</strong> {company}
                  </Fragment>}
              </li>
              <li>
                {blog && <Fragment>
                  <strong>blog:</strong> {blog}
                  </Fragment>}
              </li>
             </ul>
          </div>
     </div>
  </div>

    </Fragment>
  }
}

export default User


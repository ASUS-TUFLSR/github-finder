import React, { Fragment,useContext,useEffect } from 'react'
import Spinner from '../components/layout/Spinner'
import Repos from '../components/repos/Repos'
import { Link } from 'react-router-dom';
import GithubContext from '../context/github/githubContext'


const  User = ({match}) => {
   const githubContext = useContext(GithubContext); 
  const {user, getUser, loading, repos, getUserRepos} = githubContext;

    useEffect(() => {
      getUser(match.params.login);
      getUserRepos(match.params.login);
      // eslint-disable-next-line
    },[]);

    
    
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
        } = user;

       

      if(loading) return <Spinner/>

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
             <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public-repos: {public_repos}</div>
        <div className='badge badge-dark'>Public-gists: {public_gists}</div>
      </div>
          </div>
     </div>
      
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
                  <strong>Website:</strong> {blog}
                  </Fragment>}
              </li>
             </ul>
  </div>

    <Repos repos={repos}/>
    </Fragment>
    
  
}

export default User


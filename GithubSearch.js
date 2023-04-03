import React, {useState, useEffect} from "react";
import axios from "axios";
const GithubSearch = () =>{

    const[username, setUsername] = useState("");
    const[userInfo, setUserInfo] = useState("");
    
    useEffect(()=>{
        if(username !== ""){
            axios.get(`https://api.github.com/users/${username}`)
            .then((response)=>{
                 setUserInfo(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    },[username]
    )

    const handleChange = (e) => {
          setUsername(e.target.value)
    }

    const handleSubmit = (e) =>{
         e.preventDefault();
         setUsername("");
    }

    return(
          <div className="main">
          <h1 className='heading'>GITHUB SEARCH APP</h1>
                 <div className="form-section">
                        <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        id="input-id"
                                        value={username}
                                        onChange={handleChange}
                                        />

                                    <button className="btn" type="submit">Search</button>
                        </form>
                 </div>
                 <div className="card-body">
                            {
                                userInfo ? (
                                    <div className="card">
                                       <img src={userInfo.avatar_url} alt="User avatar" />
                                       <h1 className="username-heading" style={{margin:"15px"}}>{userInfo.name}</h1>
                                        <h3 style={{margin:"15px"}}>Bio: {userInfo.bio}</h3>
                                        <h3 style={{margin:"15px"}}>Blog: {userInfo.blog}</h3>
                                        <h3 style={{margin:"15px"}}>Followers: {userInfo.followers}</h3>
                                        <h3 style={{margin:"15px"}}>Url: {userInfo.url}</h3>
                                        <h3 style={{margin:"15px"}}>Url: {userInfo.email}</h3>
                                    </div>
                                ) : (
                                    <h1 className="no-user">No User Found!</h1>
                                )
                            }
                 </div>
          </div>
            
    );
}

export default GithubSearch;
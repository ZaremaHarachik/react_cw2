import Address from "../address/Address";
import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/post.service";

export default function User({id, name, username, email, phone, website, address}) {

    let [posts, setPosts] = useState([]);
    useEffect((id) => {
        getPostsOfUser(id).then(({data}) => setPosts([...data]));
    }, []);

    console.log(posts);

    return (
        <div>
            <h3>id :{id}</h3>
            <h3>name - {name}</h3>
            <h3>{username}</h3>
            <h4>email : {email}</h4>
            <h4>phone : {phone}</h4>
            <h4>website : {website}</h4>

            < Address
                     street={address.street}
                     suite={address.suite}
                     city={address.city}
                     zipcode={address.zipcode}
                     geo={address.geo}
            />

            <Posts posts={posts}/>
            <hr/>
        </div>
    );
}
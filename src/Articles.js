import {collection, onSnapshot} from '@firebase/firestore'
import { useState, useEffect } from 'react';
import db from './firebase'
import './App.css';
import image from './Assets/raquelgira.JPG';

const Articles = () => {

    const [blogs, setBlog] = useState([]);

    useEffect(() => {
      const unsub = onSnapshot(collection(db, "ARTIGOS"), (snapshot) => {
        setBlog(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
      return unsub;
    }, [])

    return ( 
        <div>
            {blogs.map((blog) => (

            <div className='card' id={blogs.id} key={blogs.id}>
            <div className="container">
                <div className="title"> {blog.title} </div>
                <div className="description"> {blog.description} </div>
            </div>
            <div className="divImg">
                <img src={image} alt='' />
            </div>
            </div>

            ))}
        </div>
     );
}
 
export default Articles;
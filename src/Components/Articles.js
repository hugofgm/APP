import { collection, onSnapshot } from "@firebase/firestore";
import { useState, useEffect } from "react";
import db from "./firebase";
import "../App.css";
import image from "../Assets/raquelgira.JPG";
import { animate, motion } from "framer-motion";

const Articles = () => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "ARTIGOS"), (snapshot) => {
      setBlog(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  return (
    <div className="articles">
      <div className="filter">
        <p>Filter</p>
        <div className="filters">cenas</div>
      </div>
      {blogs.map((blog) => (
        <motion.div
          className="card"
          id={blogs.id}
          key={blogs.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="container">
            <div className="title"> {blog.title} </div>
            <div className="description"> {blog.description} </div>
          </div>
          <div>
            <img className="img" src={image} alt="" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Articles;

import styles from './Blog.module.css'
import {Spin} from 'antd';
import Button from '../../components/Button/Button.jsx';
import Layouts from '../../components/Layout/Layouts.jsx';
import { useEffect } from 'react';
import { useBlogStore } from '../../store/useBlogStore.js';
import {getBlogs} from  '../../api/blogApi.js'

import React from 'react'

const Blog = () => {

const {blogs, setBlogs, loading, setLoading} = useBlogStore();

useEffect(() => {
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const blogs = await getBlogs();
      setBlogs(blogs);
      console.log("Fetched blogs:", blogs);
    }
      catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
  };

  fetchBlogs();
}, [setBlogs, setLoading]);

  return (
 <Layouts>
    <div className={styles.blogContainer}>
      {loading ? (  
        <Spin size="large" className={styles.spinner} />
      ) : (
        <ul className={styles.blogList}>
          {blogs.map((blog) => (
            <li key={blog.id} className={styles.blogItem}>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <Button variant="primary">Read More</Button>
              <Button variant="success">Edit</Button>
              <Button variant="secondary">Delete</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
   </Layouts>
  )
}

export default Blog
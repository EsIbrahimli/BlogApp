import styles from './Blog.module.css'
import {Spin} from 'antd';
import Button from '../../components/Button/Button.jsx';
import Layouts from '../../components/Layout/Layouts.jsx';
import { useEffect, useState } from 'react';
import { useBlogStore } from '../../store/useBlogStore.js';
import {getBlogs, createBlog, updateBlog as updateBlogApi, deleteBlog as deleteBlogApi} from  '../../api/blogApi.js'
import Modal from '../../components/Modal/Modal.jsx';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal.jsx';

import React from 'react'

const Blog = () => {

const {blogs, setBlogs, loading, setLoading, addBlog, storeUpdateBlog, storeDeleteBlog} = useBlogStore();
const [showModal, setShowModal] = useState(false);
const [editModalVisible, setEditModalVisible] = useState(false);
const [editingBlog, setEditingBlog] = useState(null);
const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
const [deletingBlogId, setDeletingBlogId] = useState(null);

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

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const openEdit = (blog) => {
    setEditingBlog(blog);
    setEditModalVisible(true);
  };

  const closeEdit = () => {
    setEditingBlog(null);
    setEditModalVisible(false);
  };

  const openDeleteConfirm = (id) => {
    setDeletingBlogId(id);
    setDeleteConfirmVisible(true);
  };

  const closeDeleteConfirm = () => {
    setDeletingBlogId(null);
    setDeleteConfirmVisible(false);
  };

  const handleSave = async (blogData) => {
    if (!blogData.title && !blogData.body) return;
    try {
      const created = await createBlog(blogData);
      addBlog(created);
      closeModal();
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const handleUpdate = async (blogData) => {
    if (!editingBlog) return;
    try {
      const updated = await updateBlogApi(editingBlog.id, blogData);
      storeUpdateBlog(updated);
      closeEdit();
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleDelete = async () => {
    if (!deletingBlogId) return;
    try {
      await deleteBlogApi(deletingBlogId);
      storeDeleteBlog(deletingBlogId);
      closeDeleteConfirm();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
 <Layouts>
    <div className={styles.blogContainer}>
      <div className={styles.topBar}>
        <Button variant="primary" onClick={openModal}>Create New Blog</Button>
      </div>
      {loading ? (  
        <Spin size="large" className={styles.spinner} />
      ) : (
        <ul className={styles.blogList}>
          {blogs.map((blog) => (
            <li key={blog.id} className={styles.blogItem}>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <Button variant="success" onClick={() => openEdit(blog)}>Edit</Button>
              <Button variant="secondary" onClick={() => openDeleteConfirm(blog.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      )}
      <Modal visible={showModal} onClose={closeModal} onSave={handleSave} modalTitle="Create New Blog" />
      <Modal visible={editModalVisible} onClose={closeEdit} onSave={handleUpdate} defaultValues={editingBlog ?? {title:'', body:''}} modalTitle="Edit Blog" />
      <ConfirmModal visible={deleteConfirmVisible} onClose={closeDeleteConfirm} onConfirm={handleDelete} message="This will delete the blog." confirmText="Delete" />
    </div>
   </Layouts>
  )
}

export default Blog

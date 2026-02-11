import instance from "./instance";


export const getBlogs = async () => {
  try {
    const response = await instance.get("/posts");
    return response.data;
    } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
    }
};

export const getBlogById = async (id) => {
  try {
    const response = await instance.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with id ${id}:`, error);
    throw error;
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await instance.post("/posts", blogData);   
    return response.data;
    } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
    }
};

export const updateBlog = async (id, blogData) => {
    try {
        const response = await instance.put(`/posts/${id}`, blogData);
        return response.data;
    } catch (error) {
        console.error(`Error updating blog with id ${id}:`, error);
        throw error;
    }
};

export const deleteBlog = async (id) => {
    try {
        const response = await instance.delete(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting blog with id ${id}:`, error);
        throw error;
    }
};
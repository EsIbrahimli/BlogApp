import { create } from 'zustand';


export const useBlogStore = create((set) => ({
    blogs: [],
    blog: null,
    loading: false,
    error: null,

    setBlogs: (data) => set({ blogs: data }),

    setBlog: (data) => set({ blog: data }),

    setLoading: (value) => set({ loading: value }),

    clearBlog: () => set({ blog: null }),

    addBlog: (newBlog) =>
        set((state) => ({
            blogs: [...state.blogs, newBlog],
        })),

    storeUpdateBlog: (updatedBlog) =>
        set((state) => ({
            blogs: state.blogs.map((blog) =>
                blog.id === updatedBlog.id ? updatedBlog : blog
            ),
        })),

    storeDeleteBlog: (id) =>
        set((state) => ({
            blogs: state.blogs.filter((blog) => blog.id !== id),
        })),
}));        

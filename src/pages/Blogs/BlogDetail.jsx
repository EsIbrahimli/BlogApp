import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useBlogStore } from "../../store/useBlogStore.js";
import Layouts from "../../components/Layout/Layouts";
import { getBlogById } from "../../api/blogApi";
import styles from './Blog.module.css';
import { Spin } from "antd";

const BlogDetail = () => {
    const { id } = useParams();

    const { blog, setBlog, loading, setLoading} = useBlogStore();

    useEffect(() => { 
        const fetchBlog = async () => {
            setLoading(true);
            try {
                const blog = await getBlogById(id);
                setBlog(blog);
                console.log("Fetched blog:", blog);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
            finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBlog();
        }
    }, [id]);

    return (
        <Layouts>
            <div className={styles.blogContainer}>
                {
                    loading ? (
                        <Spin size="large" />
                    ) : (
                        <div className={styles.blogDetail}>
                            <h1 className={styles.title}>{blog?.title}</h1>
                            <p className={styles.body}>{blog?.body}</p>
                        </div>
                    )
                }

            </div>
        </Layouts>
    );
};

export default BlogDetail;

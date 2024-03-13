import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then((response) => response.json())
            .then((data) => setBlogs(data));
    }, [])

    return (
        <div className="w-2/3">
            {/* <h1 className="text-4xl">My blogs {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;
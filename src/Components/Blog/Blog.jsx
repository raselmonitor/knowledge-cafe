import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
    console.log(blog);
    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="space-y-4 mb-20 ">
            <img className="w-full object-cover rounded-xl" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p> {posted_date} </p>
                    </div>
                </div>
                <div>
                    <p>
                        <span>{reading_time} min read</span>
                        <button
                            onClick={() => handleBookmarks(blog)}
                            className="ml-2 text-2xl text-red-600">
                            <FaBookmark></FaBookmark></button>
                    </p>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <p>
                {
                    hashtags.map((has, i) => <span key={i}> #<a href=""></a>{has}</span>)
                }
            </p>
            <button
                onClick={() => handleReadingTime(id,reading_time)}
                className="text-purple-800 font-bold underline ">
                Mark As read
            </button>
        </div>
    );
};

export default Blog;
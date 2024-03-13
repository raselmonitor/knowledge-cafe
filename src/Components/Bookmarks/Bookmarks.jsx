import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="w-1/3 bg-[#1111110D] p-5 space-y-3 rounded-md ml-5">
            <div className="bg-white p-5 rounded-md">
                <h2 className="text-2xl text-center text-purple-600 font-bold">Spent time on read : {readingTime}</h2>
            </div>
            <h3 className="text-3xl text-center font-bold">Bookmarked Blogs : {bookmarks.length} </h3>
            {
                bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;
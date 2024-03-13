
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-white p-5 rounded-xl">
            <h1 className="text-2xl">{title}</h1>
        </div>
    );
};

export default Bookmark;
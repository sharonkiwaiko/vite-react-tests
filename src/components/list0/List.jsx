import postsData from "../../data/postsData";

const List = () => {
  return (
    <div>
      <hr />
      <h1>
        <u>list 0 </u>
      </h1>
      {postsData.map((post) => (
        <div>
          {post.id} ) {post.title}: {post.content}
        </div>
      ))}
    </div>
  );
};

export default List;

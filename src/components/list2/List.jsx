import postsData from "../../data/postsData";
import Item from "./Item";

const ComponentList = () => {
  const list = postsData.map((post) => <Item key={post.id} post={post} />);

  return (
    <div>
      <hr />
      <h1>
        <u>list 2</u>
      </h1>
      {list}
    </div>
  );
};

export default ComponentList;

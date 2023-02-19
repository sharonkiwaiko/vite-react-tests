import postsData from "../../../data/postsData";
import Item from "./Item";

const ComponentList = () => {
  const list = postsData.map((post) => <Item key={post.id} post={post} />);
  // EVERY LIST ITEM IN REACT NEEDS A KEY DEFINED
  return (
    <div>
      <hr />
      <h1>
        <u>list 3 WITH AN ITEM COMPONENT : PROPS DESTRUCTURED</u>
      </h1>
      {list}
    </div>
  );
};

export default ComponentList;

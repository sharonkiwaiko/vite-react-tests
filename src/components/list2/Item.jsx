const Item = (props) => {
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>{props.post.content}</p>
    </div>
  );
};

export default Item;

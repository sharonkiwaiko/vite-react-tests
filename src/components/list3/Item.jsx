const Item = (props) => {
  // DESTRUCTURE
  var { title, content } = { ...props.post };
  return (
    <div>
      <h2>title - {title}</h2>
      <p>content {content}</p>
    </div>
  );
};

export default Item;

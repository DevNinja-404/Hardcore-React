const Posts = () => {
  // Generate a lot of posts:
  const posts = Array.from(
    { length: 100000 },
    (_, index) => `Post : ${index + 1}`
  );

  return (
    <div>
      {posts.map((eachPost) => (
        <div key={eachPost}>{eachPost}</div>
      ))}
    </div>
  );
};

// So what happens is since we r rendering a lot of data which takes time and during that rendering period our whole app freezes.For these kind of scenarios,we can use useTransition() hook

export default Posts;

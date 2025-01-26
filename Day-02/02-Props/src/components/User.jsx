const User = ({ name, age, isMarried, hobbies }) => {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>isMarried : {isMarried}</p>
      <p>
        Hobbies :{" "}
        <ul>
          {hobbies.map((hobby) => (
            <li key={Math.random()}>{hobby}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default User;

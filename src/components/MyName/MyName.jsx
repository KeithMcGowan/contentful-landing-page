import React from "react";
import { useContentful } from "../../hooks/useContentful";
import "./MyName.css";

const query = `
query {
  person2(id: "3lsIww5Gtd8YbhXsgXoQj5") {
    name
    age
  }
}
`;

export const MyName = () => {
  let { data, errors } = useContentful(query);
  //   console.log(data.person2);
  //   const { name, age } = data.person2;

  if (errors)
    return (
      <span className="error">
        {errors.map((err) => err.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  return (
    <>
      Hi, I'm {data.person2.name} and I am {data.person2.age} years old.
    </>
  );
};

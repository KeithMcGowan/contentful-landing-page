import React from "react";
import { useContentful } from "../../hooks/useContentful";
import { Person } from "../Person/Person";
import "./MyName.css";

const query = `
query{
    person2(id: "3lsIww5Gtd8YbhXsgXoQj5") {
      name
      socialFacebook
      socialGithub
      socialLinkedin
    }
  }
`;

export const MyName = () => {
  let { data, errors } = useContentful(query);

  if (errors)
    return (
      <span className="error">
        {errors.map((err) => err.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  const { person2 } = data;

  return (
    <>
      <Person person={person2} />
    </>
  );
};

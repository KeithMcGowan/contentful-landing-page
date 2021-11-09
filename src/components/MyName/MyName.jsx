import React from "react";
import { useContentful } from "../../hooks/useContentful";
import { Person } from "../Person/Person";
import { headerQuery } from "../../contentfulQueries/headerQuery";
import "./MyName.css";

export const MyName = () => {
  let { data, errors } = useContentful(headerQuery);

  if (errors)
    return (
      <span className="error">
        {errors.map((err) => err.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  const { person2 } = data;

  return (
    <div className="person">
      <Person person={person2} />
    </div>
  );
};

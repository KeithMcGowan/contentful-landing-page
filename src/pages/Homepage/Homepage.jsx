import React from "react";
import { useContentful } from "../../hooks/useContentful";
import { Person } from "../../components/Person/Person";
import { Bookmarks } from "../../components/Bookmarks/Bookmarks";
import { homepageQuery } from "../../contentfulQueries/homepageQuery";
import "./Homepage.css";

export const Homepage = () => {
  let { data, errors } = useContentful(homepageQuery);

  if (errors)
    return (
      <span className="error">
        {errors.map((err) => err.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  const { person2, bookmarkCollection } = data;
      // console.log(bookmarkCollection);
  return (
    <div className="homepage">
      <Person person={person2} />
      <Bookmarks bookmarks={bookmarkCollection.items} headline="My Bookmarks" />
    </div>
  );
};

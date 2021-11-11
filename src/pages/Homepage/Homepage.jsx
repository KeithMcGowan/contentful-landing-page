import React, { useState } from "react";
import { useContentful } from "../../hooks/useContentful";
import { Person } from "../../components/Person/Person";
import { Bookmarks } from "../../components/Bookmarks/Bookmarks";
import { homepageQuery } from "../../contentfulQueries/homepageQuery";
import "./Homepage.css";

// const IS_PREVIEW =
// true
// false
// ;

export const Homepage = () => {
  let [isPreview, setIsPreview] = useState(false);
  let { data, errors } = useContentful(homepageQuery, isPreview);

  if (errors)
    return (
      <span className="error">
        {errors.map((err) => err.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  const { person2, allBookmarks, favoriteTagCollection } = data;
  const favoriteTags = favoriteTagCollection.items[0];

  return (
    <div className="homepage">
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={isPreview}
            onChange={() => setIsPreview(!isPreview)}
          />
          Show Preview
        </label>
      </div>
      <Person person={person2} />
      <Bookmarks
        bookmarks={favoriteTags.linkedFrom.bookmarkCollection.items}
        headline="Favorite Bookmarks"
      />
      <Bookmarks bookmarks={allBookmarks.items} headline="My Bookmarks" />
    </div>
  );
};

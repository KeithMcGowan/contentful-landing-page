import React from "react";
import PropTypes from "prop-types";
import "./Bookmarks.css";

export const Bookmarks = ({ bookmarks, headline }) => {
  // console.log("Bookmark data: ", bookmarks[0].tagsCollection)
  return (
    <div className="bookmark">
      <h3>{headline}</h3>
      {bookmarks.map((bookmark) => {
        console.log("Each bookmark: ", bookmark);
        const { sys, title, url, comment, tagsCollection } = bookmark;
        return (
          <div className="bookmark-card" key={sys.id}>
            <div className="tag">{tagsCollection.items[0].title}</div>
            <h5>{title}</h5>
            <p>{comment}</p>
            <a href={url}>Visit</a>
          </div>
        );
      })}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

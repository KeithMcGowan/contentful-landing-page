import React from "react";
import PropTypes from "prop-types";
import "./Bookmarks.css";

export const Bookmarks = ({ bookmarks, headline }) => {
  return (
    <div className="bookmark">
      <h3>{headline}</h3>
      <div className="bookmark-content">
        {bookmarks.map((bookmark) => {
          const { sys, title, url, comment, tagsCollection } = bookmark;

          return (
            <div className="bookmark-card" key={sys.id}>
              <div className="tag-container">
                {tagsCollection.items.map((eachTag) => {
                  return (
                    <span className="tag" key={eachTag.title}>
                      {eachTag.title}
                    </span>
                  );
                })}
              </div>
              <h5>{title}</h5>
              <p>{comment}</p>
              <a href={url}>Visit</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  // .isRequired
};

import React, { Children } from "react";
import PropTypes from "prop-types";
import "./Person.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

function FacebookLink({ url }) {
  return (
    <a href={url}>
      <i className="fab fa-facebook-square fa-lg"></i>
    </a>
  );
}

function GithubLink({ url }) {
  return (
    <a href={url}>
      <i className="fab fa-github-square fa-lg"></i>
    </a>
  );
}

function LinkedinLink({ url }) {
  return (
    <a href={url}>
      <i className="fab fa-linkedin fa-lg"></i>
    </a>
  );
}

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      console.log(node);
      return <a href={node.data.uri}>{children}</a>;
    },
  },
};

export const Person = ({ person }) => {
  const { name, socialFacebook, socialGithub, socialLinkedin, image, bio } =
    person;

  return (
    <div>
      <h2>{name}</h2>
      {documentToReactComponents(bio.json, RICHTEXT_OPTIONS)}
      <div className="social-links">
        <FacebookLink url={socialFacebook} />
        <GithubLink url={socialGithub} />
        <LinkedinLink url={socialLinkedin} />
      </div>
      <div className="profile-pic">
        <img src={image.url} alt={image.title} />
      </div>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    socialFacebook: PropTypes.string.isRequired,
    socialGithub: PropTypes.string.isRequired,
    socialLinkedin: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    bio: PropTypes.object.isRequired,
  }).isRequired,
};

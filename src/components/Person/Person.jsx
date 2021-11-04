import React from "react";
import PropTypes from "prop-types";
import "./Person.css";

function FacebookLink({ url }) {
  return <a href={url}><i className="fab fa-facebook-square fa-lg"></i></a>;
}

function GithubLink({ url }) {
  return <a href={url}><i className="fab fa-github-square fa-lg"></i></a>;
}

function LinkedinLink({ url }) {
  return <a href={url}><i className="fab fa-linkedin fa-lg"></i></a>;
}

export const Person = ({ person }) => {
  const { name, socialFacebook, socialGithub, socialLinkedin } = person;

  return (
    <div>
      <h2>{name}</h2>
      <div className="socialLinks">
        <FacebookLink url={socialFacebook} />
        <GithubLink url={socialGithub} />
        <LinkedinLink url={socialLinkedin} />
      </div>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    socialFacebook: PropTypes.string.isRequired,
    socialGithub: PropTypes.string.isRequired,
    socialLinkedin: PropTypes.string.isRequired,
  }).isRequired,
};

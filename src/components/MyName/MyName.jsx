import React, { useState, useEffect } from "react";
import "./MyName.css";

const query = `
query {
  person2(id: "3lsIww5Gtd8YbhXsgXoQj5") {
    name
  }
}
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

export const MyName = () => {
  let [data, setData] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  if (!data) return <span>Loading...</span>;

  return <>{data.person2.name}</>;
};

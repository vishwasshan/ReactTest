import React, { useState, useEffect } from "react";
import Nav from "../../Components/Nav/Nav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import DataDisplay2 from "../../Components/DataDisplay/DataDisplay2";
import "./Episode.scss";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

import axios from "axios";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top:15rem
`;

function Episode() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const fethItems = async () => {
      const { data } = await axios.get(
        `https://www.breakingbadapi.com/api/episodes?name=${query}`
      );
      setResults(data)
      setLoading(false)
    };
    fethItems()
  }, [query]);
  return (
    <div className="episode">
      <Nav link1="Episode" to1="/episode" link2="Charecter" to2="/charecter" />
      <SearchBar getQuery={(q)=>setQuery(q)} />
      <DataDisplay2  items={results} />
      <ClipLoader color="white" loading={loading} css={override} size={50} />
    </div>
  );
}

export default Episode;

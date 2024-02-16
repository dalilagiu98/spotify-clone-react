import React from "react";
import { useSelector } from "react-redux";

const SearchResult = () => {
    const results = useSelector((state) => state.search.searchResults)
  return (
    <div>
    {results.map((result)=> {
        return(
        <div>{result.title}</div>
        )
    })}
    </div>
  );
};

export default SearchResult;
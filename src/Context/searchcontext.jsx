import React, { createContext, useState } from "react";

// Create a Context for the search term
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [term, setTerm] = useState("");

  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

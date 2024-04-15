import React from "react";
import SearchBar from "./HeaderSearch";

function AppHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Personal Notes</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default AppHeader;

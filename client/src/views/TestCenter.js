import React from "react";
import SearchBar from "../components/searchBar";
import TestCenterList from "../components/TestCenterList";

import Main from "./main";

function TestCenter() {
  return (
    <>
      <SearchBar />
      <Main />
      <TestCenterList />
    </>
  );
}

export default TestCenter;

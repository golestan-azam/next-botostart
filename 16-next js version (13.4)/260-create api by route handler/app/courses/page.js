"use client";

import React, { useEffect } from "react";

function Courses(props) {
  useEffect(() => {
    console.log("use client");
  }, []);
  return <div>Courses Page</div>;
}

export default Courses;

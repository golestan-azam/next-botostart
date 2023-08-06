import React from "react";

function BlogLayout({ children }) {
  return (
    <div>
      <header>HeaderBlog</header>
      {children}
      <footer>FooterBlog</footer>
    </div>
  );
}

export default BlogLayout;

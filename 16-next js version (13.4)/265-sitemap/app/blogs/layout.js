import React from "react";

export const metadata = {
  title: 'Blog Page',
  description: 'Generated by create next app',
}

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

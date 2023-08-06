// http://localhost:3000/sitemap.xml
//  Get all routes

export default async function sitemap() {
  const staticRoutes = ["", "/blogs", "/courses", "/users"];
  const userRoutes = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await userRoutes.json();

  const routes = staticRoutes.map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toString(),
  }));

  const users = data.map((user) => ({
    url: `http://localhost:3000/users/${user.id}`,
    lastModified: new Date().toString(),
  }));

  return [...routes, ...users];
}

// ************************
// export default function sitemap() {
//   return [
//     { url: "http://localhost:3000" },
//     { url: "http://localhost:3000/users" },
//   ];
// }

// ***********************
// Get static route

// export default async function sitemap() {
//   const staticRoutes = ["", "/blogs", "/courses", "/users"];

//   const routes = staticRoutes.map((route) => ({
//     url: `http://localhost:3000${route}`,
//     lastModifide: new Date().toString(),
//   }));

//   return [...routes];
// }

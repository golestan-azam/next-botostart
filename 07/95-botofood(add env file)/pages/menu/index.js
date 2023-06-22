import MenuPage from "@/components/templates/MenuPage";

function Menu({ data }) {
  console.log("client:", process.env.NEXT_PUBLIC_NAME);
  return <MenuPage data={data} />;
}

export default Menu;

//  SSG
export async function getStaticProps() {
  console.log("server:", process.env.NEXT_PUBLIC_NAME);
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
    // ISR
    revalidate: +process.env.REVALIDATE, //seconds
  };
}

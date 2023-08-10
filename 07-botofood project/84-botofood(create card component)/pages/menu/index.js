import MenuPage from "@/components/templates/MenuPage";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

//  SSG
export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  return {
    props: { data },
    // ISR
    revalidate: 10, //seconds
  };
}

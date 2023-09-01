import BuyResidentialsPage from "@/template/BuyResidentialsPage";

async function BuyResidentials(props) {
  //   (این مورد حالت تمرینی دارد) بهتر است در کامپوننت های سرور ساید از ای پی آی روت استفاده نکنیم
  // اما اگر ای پی آی خارجی باشد می توانیم از این روش استفاده کنیم
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است.</h3>;

  return <BuyResidentialsPage data={data.data} />;
}

export default BuyResidentials;

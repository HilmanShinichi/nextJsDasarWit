import RootLayout from "../app/layout";
import style from "../styles/home.module.css";


export default function Home() {
  return (
    <RootLayout pageTitle='Home Page'>
      <h1 className={style["title-homepage"]}>Welcome Mufid</h1>
    </RootLayout>
  );
}

import RootLayout from "../app/layout";
import style from "../styles/home.module.css";
import Image from "next/image";


export default function Home() {
  return (
    <RootLayout pageTitle='Home Page'>
      <Image src="/profile.png" alt="profile" width={200} height={200}/>
      <h1 className={style["title-homepage"]}>Welcome Mufid</h1>
    </RootLayout>
  );
}

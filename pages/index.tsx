import RootLayout from "../app/layout";
import Header from "../components/Header";
import style from '../styles/home.module.css'

export default function Home() {
  return (
    <RootLayout>
    
    <Header/>
      <h1 className={style['title-homepage']}>Welcome Mufid</h1>
     
      </RootLayout>
  );
}

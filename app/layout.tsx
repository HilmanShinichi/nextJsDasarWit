import "../styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from './Layout.module.scss'
import Head from "next/head";


export default function RootLayout(props: any) {
  const {children, pageTitle} = props
  return (
  <>
  <Head>
    <title>NextJS Basic | {pageTitle}</title>
    <meta  name="description" content="Website NextJS Basic"/>
  </Head>
  <div className={style.container}>
    <Header/>
    <div className={style.content}>
      {children}
      </div>
    <Footer/>
    </div>;
    </>
  )
}

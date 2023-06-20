import "../styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from './Layout.module.scss'


export default function RootLayout({children}:{children: React.ReactNode;}) {
  return <div className={style.container}>
    <Header/>
    <div className={style.content}>{children}</div>
    <Footer/>
    </div>;
}

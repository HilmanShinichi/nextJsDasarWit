import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Notfound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <div>
      <h1 className="notfound__h1">Oops...</h1>
      <h1 className="notfound__h1">Halaman yang anda tuju tidak ditemukan</h1>
    </div>
  );
};

export default Notfound;

import RootLayout from "@/app/layout";
import styles from '../../styles/Users.module.css'
import { useRouter } from "next/router";

export default function User(props: { dataUsers: Array<any> }) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <RootLayout>
      {dataUsers.map((user) => (
            <div key={user.id + 1} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>  
      ))}
    </RootLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}

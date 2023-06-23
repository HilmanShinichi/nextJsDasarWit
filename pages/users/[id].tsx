import RootLayout from "@/app/layout";
import { useRouter } from "next/router";

interface User {
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}


export default function UserDetail(props: UserDetailProps) {
  const router = useRouter();
  const { id } = router.query;
  const { user } = props

  
  
  return (
    <RootLayout pageTitle="User Details">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </RootLayout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: { id: any }) => ({
    params: {
      id: user.id.toString(),
    },
  }));
 
  return {
    paths,
    fallback: false,
  };
}


 interface getStaticProps {
  params:{
    id:string
  }
 }
export async function getStaticProps(context: getStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();


  return {
    props: {
      user,
    },
  };
}

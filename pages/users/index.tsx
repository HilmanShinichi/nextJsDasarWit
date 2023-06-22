import RootLayout from "@/app/layout";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function User(props: ({dataUsers: Array<any>})) {
  const { dataUsers } = props;

  console.log(dataUsers);

  return (
    <RootLayout pageTitle="Page Users">
      {
        dataUsers.map((user, index) => {
            return (
                <>
                <p key={index}>{user.name}</p>
                <p>{user.email}</p>
                </>
            )})
      }
    </RootLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();


  return {
    props: {
      dataUsers
    },
  };
}

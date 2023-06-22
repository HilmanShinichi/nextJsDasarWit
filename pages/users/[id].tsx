import RootLayout from "@/app/layout";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>User Detail Page {id} </p>
    </div>
  );
}

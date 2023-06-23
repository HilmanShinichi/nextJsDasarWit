import RootLayout from "@/app/layout";
import styles from '../styles/Blog.module.css'

interface Post{
  id: number,
  title:string,
  body:string
} 

interface BlogProps{
  dataBlog: Post[]
}

export default function Blog(props: BlogProps) {
  const {dataBlog} = props

  console.log(typeof(dataBlog))

  return (
    <RootLayout pageTitle='Blog Page'>
      {
        dataBlog.map((blog:blogProps) => (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
    </RootLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json()

  return {
    props:{
      dataBlog,
    }
  }
}

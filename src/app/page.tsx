import Image from "next/image";
import styles from "./page.module.css";
import { getAllBook } from "./lib/component/action";
import { Book } from "./lib/component/books";
import Link from "next/link";

export default async function Home() {
  const books=await getAllBook()
  console.log(books)
  return (
    <main className={styles.main}>
        <div className={styles.row}>
            {books.map(elm => (
                <Link key={elm.id} href={`/books/${elm.id}`}>
                    <Book elm={elm} />
                </Link>
            ))}
        </div>
    </main>
);
}

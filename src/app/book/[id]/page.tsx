
import { IBook } from "@/app/lib/component/types";
import { getBookById } from "@/app/lib/component/action";
import { notFound } from "next/navigation";
import Image from "next/image";

interface IProps {
    params: { id: number };
}

export default async function BookPage({ params }: IProps) {

    const book = await getBookById(params.id);

    if (!book) {
        notFound();
    }

    return (
        <div> 
            <p className="is-size-3 p-6 m-6">Book {book.id}</p>
            <img src={book.photo} alt={book.title}  />
            <p>{book.title}</p>
            <p><strong>by {book.author}</strong></p>
            <strong>{book.price} AMD </strong>
        </div>
    );
}

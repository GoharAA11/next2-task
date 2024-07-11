import { readFile } from "fs/promises";
import { IBook } from "./types";

export const getAllBook=async():Promise<IBook[]>=>{
    const data=await readFile("book.json", "utf-8")
    if(data){
        return JSON.parse(data)
    }
    return []

}

export const getBookById=async(id:number):Promise<IBook|null >=>{
    const element=await readFile("book.json","utf-8")
    const books: IBook[] = element ? JSON.parse(element) : []
    return books.find(book => book.id === id) || null 
    
}
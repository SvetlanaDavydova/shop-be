import { data } from "./mock";

export const getProductById = async (id: string) => {
    const books = data;
    const result = books.find((item) => item.id === +id);
    return result;
}
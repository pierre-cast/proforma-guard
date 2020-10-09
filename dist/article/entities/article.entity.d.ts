import { AuthorEntity } from "src/author/entities/author.entity";
export declare class ArticleEntity {
    id: number;
    title: string;
    content: string;
    date: Date;
    published: boolean;
    complete: boolean;
    author: AuthorEntity;
}

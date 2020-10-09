import { ArticleEntity } from "src/article/entities/article.entity";
import { UserEntity } from "src/user/entities/user.entity";
export declare class AuthorEntity {
    id: number;
    familyname: string;
    firstname: string;
    email: string;
    presentation: string;
    active: boolean;
    userId: number;
    user: UserEntity;
    articles: ArticleEntity[];
}

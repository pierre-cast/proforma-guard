import { Repository } from "typeorm";
import { AddArticleDto } from "./dtos/add-article.dto";
import { UpdateArticleDto } from "./dtos/update-article.dto";
import { ArticleEntity } from "./entities/article.Entity";
export declare class ArticleService {
    private articleRepository;
    constructor(articleRepository: Repository<ArticleEntity>);
    getMyArticles(id: number): Promise<ArticleEntity[]>;
    getAllArticles(): Promise<ArticleEntity[]>;
    getArticleById(id: number): Promise<ArticleEntity>;
    addArticle(article: AddArticleDto): Promise<ArticleEntity>;
    updateArticle(id: number, article: UpdateArticleDto): Promise<ArticleEntity>;
    removeArticle(id: number): Promise<void>;
}

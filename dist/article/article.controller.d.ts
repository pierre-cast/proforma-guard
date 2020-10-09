import { ArticleEntity } from './entities/article.entity';
import { ArticleService } from './article.service';
import { AddArticleDto } from './dtos/add-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';
export declare class ArticleController {
    private articleService;
    constructor(articleService: ArticleService);
    getMyArticles(user: any): Promise<ArticleEntity[]>;
    getArticleById(id: number): Promise<ArticleEntity>;
    getAllArticles(): Promise<ArticleEntity[]>;
    addArticle(addArticleDto: AddArticleDto): Promise<ArticleEntity>;
    updateArticle(updateArticleDto: UpdateArticleDto, id: number): Promise<ArticleEntity>;
    removeArticle(id: number): Promise<void>;
}

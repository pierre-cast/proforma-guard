import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AddArticleDto } from "./dtos/add-article.dto";
import { UpdateArticleDto } from "./dtos/update-article.dto";
import { ArticleEntity } from "./entities/article.Entity";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private articleRepository : Repository<ArticleEntity>
    ) {

    }

    async getMyArticles(id: number): Promise<ArticleEntity[]> {
        return await this.articleRepository.find({
            join: {
                alias: "article",
                leftJoinAndSelect: {
                    author: "article.author",
                    user: "author.user"
                }
            }, 
            //where: { author : { user : { id : 41 }} }
        });
       /* return await this.articleRepository.query(`SELECT article.* FROM article 
        INNER JOIN author ON author.id = article."authorId"
        INNER JOIN "user" u ON u.id = author."userId"
        WHERE u.id = ${id}`);
        */
    }

    async getAllArticles(): Promise<ArticleEntity[]> {
        return await this.articleRepository.find();
    }

    async getArticleById(id: number): Promise<ArticleEntity> {
        return await this.articleRepository.findOne(id);
    }

    async addArticle(article: AddArticleDto): Promise<ArticleEntity> {
        return await this.articleRepository.save({
            ...article, 
            author:{id:article.authorId}});
    }

    async updateArticle(id: number, article: UpdateArticleDto): Promise<ArticleEntity> {
        const newArticle = await this.articleRepository.preload({
            id,
            ...article, 
            author:{id:article.authorId}
        });
        if (!newArticle) {
            throw new NotFoundException(`Article ${id} inexistant`);
        }
        return await this.articleRepository.save(newArticle);

    }

    async removeArticle(id:number) {
        const articleToRemove = await this.articleRepository.findOne(id);
        if (!articleToRemove) {
            throw new NotFoundException(`Article ${id} inexistant`);
        }
        this.articleRepository.remove(articleToRemove)
    }
    
}

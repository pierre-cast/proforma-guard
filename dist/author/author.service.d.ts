import { Repository } from 'typeorm';
import { AddAuthorDto } from './dtos/add-author.dto';
import { UpdateAuthorDto } from './dtos/update-author.dto';
import { AuthorEntity } from './entities/author.entity';
export declare class AuthorService {
    private authorRepository;
    constructor(authorRepository: Repository<AuthorEntity>);
    getAllAuthors(): Promise<AuthorEntity[]>;
    getMyAuthorProfile(id: number): Promise<AuthorEntity[]>;
    getAuthorById(id: number): Promise<AuthorEntity>;
    addAuthor(author: AddAuthorDto): Promise<AuthorEntity>;
    updateAuthor(id: number, author: UpdateAuthorDto): Promise<AuthorEntity>;
    removeAuthor(id: number): Promise<void>;
}

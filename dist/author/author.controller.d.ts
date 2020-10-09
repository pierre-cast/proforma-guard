import { AuthorEntity } from './entities/author.entity';
import { AuthorService } from './author.service';
import { AddAuthorDto } from './dtos/add-author.dto';
import { UpdateAuthorDto } from './dtos/update-author.dto';
export declare class AuthorController {
    private authorService;
    constructor(authorService: AuthorService);
    getMyAuthorProfile(user: any): Promise<AuthorEntity[]>;
    getAuthorById(id: number): Promise<AuthorEntity>;
    getAllAuthors(): Promise<AuthorEntity[]>;
    addAuthor(addAuthorDto: AddAuthorDto): Promise<AuthorEntity>;
    updateAuthor(updateAuthorDto: UpdateAuthorDto, id: number): Promise<AuthorEntity>;
    removeAuthor(id: number): Promise<void>;
}

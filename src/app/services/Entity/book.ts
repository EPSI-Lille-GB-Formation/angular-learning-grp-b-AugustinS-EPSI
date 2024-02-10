export class Book {
  constructor(
    public id: number,
    public title: string,
    public resume: string,
    public image: string,
    public createdAt: Date,
    public updatedAt: Date,
    public categoryId: number,
    public authorId: number 
  ) {}
}

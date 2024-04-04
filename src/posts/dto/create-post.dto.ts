import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreatePostDto{
    @IsString()
    @MinLength(3, {
        message: "Title is too short."
    })
    @MaxLength(100, {
        message: "Title is too long."
    })
    @IsNotEmpty({
        message: "Title is required."
    })
    title: string

    @IsString()
    @MaxLength(400, {
        message: "Content is too long."
    })
    content: string

    @IsInt()
    authorId: number
}
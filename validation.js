import {body} from 'express-validator'

export const postsValidation = [
    body('image', 'Неверная ссылка на изображение').isURL(),
    body('title', 'Введите заголовок статьи').isLength({min: 6}).isString(),
    body('title', 'Введите текст статьи').isLength({min: 12}).isString()
]
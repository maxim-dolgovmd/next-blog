import postModels from '../models/Post.js'

export const getPosts = async (req, res) => {

    try {
        
        const posts = await postModels.find().exec()
        
        if (!posts) {
            res.status(404).json({
                message: "Ошибка при получении статей"
            })
        }

        res.json(posts)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось получить статьи'
        })
    }

}

export const getOnePost = async (req, res) => {
    try {
        
        const id = req.params.id
        const post = await postModels.findById(id)

        if (!post) {
            res.status(404).json({
                message: 'Статья отсутствует'
            })
        }

        res.json({post})

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось получить статью'
        })
    }
}

export const createPost = async (req, res) => {
    try {
        
        const doc = postModels({
            image: req.body.image,
            title: req.body.title,
            text: req.body.text
        })

        const post = await doc.save()

        res.json({post})

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось создать статью'
        })
    }
}

export const removePost = async (req, res) => {
    try {
        
        const id = req.params.id

        const post = await postModels.findByIdAndDelete(id)

        if (!post) {
            res.status(404).json({
                message: 'Не удалось удалить статью'
            })
        }

        res.json({
            acsess: true
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось удалить статью'
        })
    }
}


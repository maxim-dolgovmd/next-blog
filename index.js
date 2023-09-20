// const express = require('express')
// const mongoose = require('mongoose')
import express from 'express'
import mongoose  from 'mongoose';
import cors from 'cors'
import {postsValidation} from './validation.js';
import {removePost, getOnePost, getPosts, createPost} from './controller/postController.js';

mongoose
    .connect('mongodb+srv://admin:mmmmmm@cluster0.rqgvfch.mongodb.net/model?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get('/blogs', postsValidation, getPosts)
app.get('/blogs/:id', postsValidation, getOnePost)
app.delete('/blogs/:id', removePost)
app.post('/blogs', postsValidation, createPost)

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})


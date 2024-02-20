import express from "express"
import { PORT, mongoDBURL} from "./config.js"
import mongoose from 'mongoose';
import {Book} from './models/bookmodel.js'

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });


app.post('/book', async(request, response) =>{
    try{
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
        
            return response.status(400).send({
                message: "send all requested fields: tile, author, publishYear",
            })
        }
        const newBook =  {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        }

        const book = await Book.create(newBook);


        return response.status(201).send(book)

    }catch{
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

app.listen(PORT, ()=>{
    console.log(`App is listening to port: ${PORT}`)
})

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

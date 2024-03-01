import express from "express";
import { Book } from "../models/bookmodel.js";

const router = express.Router();

//save

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "send all requested fields: tile, author, publishYear",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

// get all books from database
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

// get one book from database
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await book.findById({ id });
    return response.status(200).json({ Book });
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

//update a book

router.get("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "send all requested fields: tile, author, publishYear",
      });
    }

    const { id } = request.params;

    const result = await Book.findByIDAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "book not found" });
    }

    return response.status(200).json({ message: "book update successfully" });
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

// delete

router.delete("/:id", async (request, response) => {
  try {
    const result = await Book.findByIDAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "book not found" });
    }

    return response.status(200).json({ message: "book Delete successfully" });
  } catch {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

export default router;
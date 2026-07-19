import { Router } from "express";
import {getbooks ,getbookBYId,updatebook, deletebook, createBook } from "../controllers/book.controller.js"

const router = Router()

//get all books
router.get("/",getbooks)

//get single book
router.get("/:id",getbookBYId)

//create new book
router.post("/",createBook)

//update book
router.put("/:id",updatebook)

//delete book
router.delete("/:id",deletebook)

export default router;
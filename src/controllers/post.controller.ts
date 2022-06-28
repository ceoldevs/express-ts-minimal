import {Request, Response} from 'express';

let example_json = [
  {_id: 1, name: "Joe"},
  {_id: 2, name: "Jane"},
]

const findById = (id:number) => {
  return example_json.filter(rec => rec._id == id);
}

export const getPosts = (_: Request, res:Response) => {
  res.json(example_json)
}

export const getPost = (req: Request, res:Response) => {
  let id = req.params.id
  res.json(findById(parseInt(id)))
}

export const createPost = (req: Request, res:Response) => {
  res.json(req.body);
}

export const updatePost = (req: Request, res:Response) => {
  let id = req.params.id
  res.json(findById(parseInt(id)))
}

export const deletePost = (req: Request, res:Response) => {
  let id = req.params.id
  res.json(findById(parseInt(id)))
}


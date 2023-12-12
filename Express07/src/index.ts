import express, { Request, Response } from "express"
import { Iuser } from './type/type.user'
import { v4 as uuidv4 } from 'uuid';
import { Topr } from './type/type.todolist';

const app = express()
app.use(express.json())

let user: Iuser[] = [

    {
        id: '1',
        username: 'john',
        password: '123',
        email: 'test@gmail.com'
    }
]

let Todolist: Topr[] = []

app.get('/api/get', (req: Request, res: Response) => {
    res.json(user)
})

app.post('/api/post', (req: Request, res: Response) => {
    const newuser = req.body as Iuser
    newuser.id = uuidv4()
    user.push(newuser)
    res.json('user added')
})






app.get('/api/Todo', (req: Request, res: Response) => {
    res.json(Todolist)
})
app.post("/api/Todo", (req, res) => {
    const newtodo = req.body as Topr
    newtodo.id = uuidv4()
    Todolist.push(newtodo)
    res.json('todo done')
})







app.put('/api/put/:id', (req:Request,res:Response)=>{
    const {id}=req.params
    const UpdateUser=req.body as Iuser
    const UpdateUserList=user.filter((item)=>{
        return item.id !== id
    })
})
app.delete('/api/delete/:id', (req:Request,res:Response)=>{
    const {id}=req.params
    const UpdateUserList=user.filter((item)=>{
        return item.id !== id
    })
    user=UpdateUserList
    res.json("d done no chatgpt")
})
app.listen(3001, () => {
    console.log(' server listing 3001');

})
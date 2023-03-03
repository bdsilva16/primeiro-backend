import express, {Express, Request, Response} from 'express';

const app: Express = express ();
const port = 3002;
app.use(express.json());



app.get('/users', (req: Request, res: Response) => {
    res.send('GET - Usado para obter dados');

});
app.post('/users', (req: Request, res: Response) => {
    const user = req.body.user;
    res.send(user);

});
app.put('/users/:id', (req: Request, res: Response) => {
    res.send('PUT - Usado para atualizar dados');

});
app.delete('/users/:id', (req: Request, res: Response) => {
    res.send('DELETE - Usado para deletar dados');

});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
  
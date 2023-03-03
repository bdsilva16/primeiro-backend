"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
app.get('/users', (req, res) => {
    res.send('GET - Usado para obter dados');
});
app.post('/users', (req, res) => {
    const user = req.body.user;
    res.send(user);
});
app.put('/users/:id', (req, res) => {
    res.send('PUT - Usado para atualizar dados');
});
app.delete('/users/:id', (req, res) => {
    res.send('DELETE - Usado para deletar dados');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

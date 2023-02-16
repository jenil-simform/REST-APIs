const express = require('express');
const app = express();
app.use(express.json());

const books = [
   {
      title: 'Harry Potter',
      author: 'xyz',
      id: 1
   },
   {
      title: 'Twilight',
      author: 'xyz',
      id: 2
   },
   {
      title: 'Lorien Legacies',
      author: 'xyz',
      id: 3
   }
]


//READ Request Handlers
app.get('/', (req, res) => {
   res.send('Welcome to REST API with Node.js Tutorial!!');
});


app.get('/api/books', (req, res) => {
   res.send(books);
});


app.get('/api/books/:id', (req, res) => {
   const book = books.find(c => c.id === parseInt(req.params.id));

   if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
   res.send(book);
});


//CREATE Request Handler
app.post('/api/books', (req, res) => {
   const book = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author
   };
   books.push(book);
   res.send(book);
});



//UPDATE Request Handler : PUT
app.put('/api/books/:id', (req, res) => {
   const book = books.find(c => c.id === parseInt(req.params.id));
   if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

   book.title = req.body.title;
   book.author = req.body.author;
   res.send(book);
});


//UPDATE Request Handler : PATCH
app.patch('/api/books/:id', (req, res) => {
   const book = books.find(c => c.id === parseInt(req.params.id));
   if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

   book.title = req.body.title;
   book.author = req.body.author;
   res.send(book);
});


//DELETE Request Handler
app.delete('/api/books/:id', (req, res) => {
   const book = books.find(c => c.id === parseInt(req.params.id));
   if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

   const index = books.indexOf(book);
   books.splice(index, 1);

   res.send(book);
});



//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
const host = '127.0.0.1';
app.listen(port, () => console.log(`Listening on ${host}:${port}..`));
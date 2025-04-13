
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post content.' },
  { id: 2, title: 'Second Post', content: 'This is the second post content.' }
];


app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const { title, content } = req.body;
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    post.title = title;
    post.content = content;
    res.status(200).json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(200).json({ message: 'Post deleted' });
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

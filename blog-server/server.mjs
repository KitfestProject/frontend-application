import express from 'express';
import { json } from 'body-parser';
import { writeFileSync, readdirSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const app = express();
const PORT = 5000;

app.use(json());

// Helper function to generate Markdown content
const generateMarkdown = (title, description, image, body) => {
  let markdown = `# ${title}\n\n`;
  markdown += `![${title}](${image})\n\n`;
  markdown += `${description}\n\n`;
  markdown += `${body}\n`;
  return markdown;
};

// Endpoint to save a blog post
app.post('/api/blogs', (req, res) => {
  const { title, description, image, body } = req.body;
  const markdownContent = generateMarkdown(title, description, image, body);
  
  const filePath = join(__dirname, 'blogs', `${title.replace(/\s+/g, '_')}.md`);
  writeFileSync(filePath, markdownContent);

  res.send({ message: 'Blog saved successfully' });
});

// Endpoint to fetch all blog posts
app.get('/api/blogs', (req, res) => {
  const blogsDir = join(__dirname, 'blogs');
  const blogFiles = readdirSync(blogsDir);
  const blogs = blogFiles.map(file => {
    const filePath = join(blogsDir, file);
    const content = readFileSync(filePath, 'utf-8');
    return { title: file.replace('.md', ''), content };
  });

  res.send(blogs);
});

// Ensure blogs directory exists
if (!existsSync(join(__dirname, 'blogs'))) {
  mkdirSync(join(__dirname, 'blogs'));
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const multer = require('multer');
const sass = require('sass');
const css = require('css');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import CORS

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Configure Multer for file uploads
/**
 * Multer disk storage configuration.
 *
 * @type {multer.diskStorage}
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Endpoint for file upload
app.post('/api/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;

  // Compile SCSS to CSS
  if (path.extname(filePath) === '.scss') {
    sass.render({ file: filePath }, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'SCSS compilation error' });
      }
      analyzeCSS(result.css.toString(), res);
    });
  } else if (path.extname(filePath) === '.css') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'CSS file reading error' });
      }
      analyzeCSS(data, res);
    });
  } else {
    res.status(400).json({ error: 'Unsupported file type' });
  }
});

// Analyze CSS function
const analyzeCSS = (cssContent, res) => {
  // Parse CSS
  const parsedCSS = css.parse(cssContent);
  // Perform analysis (example: detect unused CSS rules)
  const report = generateReport(parsedCSS);
  res.json(report);
};

// Example report generation function
const generateReport = (parsedCSS) => {
  // Analyze parsed CSS and generate a report
  // This is a placeholder function, implement your analysis logic here
  return { message: 'CSS analyzed successfully', parsedCSS };
};

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}));

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, `${uniqueSuffix}${ext}`);
    }
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static(uploadDir));

// Nova rota GET para a raiz
app.get('/', (req, res) => {
    res.send('Servidor de upload do CKEditor rodando!');
});

app.post('/upload', upload.single('upload'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            error: {
                message: 'Nenhum arquivo enviado.'
            }
        });
    }

    const fileUrl = `http://localhost:${port}/uploads/${req.file.filename}`;
    res.json({
        url: fileUrl
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
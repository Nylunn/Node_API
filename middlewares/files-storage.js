const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};
console.log("log")

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
          const name = file.originalname.split(' ').join('_');
        console.log(name)
        const extension = MIME_TYPES[file.mimetype];
        callback(null, Date.now() + name);
    }
});

module.exports = multer({storage: storage});
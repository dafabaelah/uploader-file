const multer = require('multer');

const storage = multer.memoryStorage();
const fileSize = 20 * 1024 * 1024;

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg'){
            cb(null, true);
        }else {
            cb(null, false);
        }
}

const upload = multer({storage: storage, fileFilter: filefilter, limits: fileSize});

module.exports = {upload};
const express = require("express");
const router = express.Router();
const { upload_file, upload_files } = require("./controller");
const { upload } = require("../utilities/multer");


router.post("/", upload.single('image'), upload_file);
router.post("/multi", upload.array('image', 2), upload_files);

module.exports = router;
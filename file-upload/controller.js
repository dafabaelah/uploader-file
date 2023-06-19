const cloudinary = require("../utilities/upload");

const upload_file = async (req, res) => {
    const file = req.file;

    try {
        if (!file) {
        return res.status(400).json({ error: "No File Selected" });
        }
        
        const fileBase64 = file.buffer.toString('base64');
        const fileBase = `data:${file.mimetype};base64,${fileBase64}`;
    
        const result = await cloudinary.uploader.upload(fileBase, {
        folder: "file-upload",
        quality: 60,
        width: 500,
        height: 500,
        public_id: `${Date.now()}`,
        resource_type: "auto",
        });
    
        return res.status(200).send({
        public_id: result.public_id,
        url: result.secure_url,
        more_info : {
            result
        }
        });
    } catch (error) {
        return res.status(500).send(error.message);   }
};

const upload_files = async (req, res) => {
    const file = req.file
    console.log(file);

    try {
        if (!file) {
        return res.status(400).json({ error: "No File Selected" });
        }
        
        const fileBase64 = file["image"][0].buffer.toString('base64');
        const fileBase = `data:${file["image"][0].mimetype};base64,${fileBase64}`;
    
        const result = await cloudinary.uploader.upload(fileBase, {
        folder: "file-upload",
        quality: 60,
        width: 500,
        height: 500,
        public_id: `${Date.now()}`,
        resource_type: "auto",
        });
    
        return res.status(200).send({
        public_id: result.public_id,
        url: result.secure_url,
        more_info : {
            result
        }
        });
    } catch (error) {
        return res.status(500).send(error.message);   }
};

module.exports = { upload_file, upload_files };
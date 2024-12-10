const express = require('express');

const router = express.Router();

const service = require('../services/files');

const multer = require('multer');
const { storage } = require('../middlewares/files-storage');
const filesService = require('../services/files');

const private = require('../middlewares/private');

//Configuration de multer pour l'upload du fichier
const upload = multer({ storage: storage });

router.get('/', /*private.checkJWT,*/ service.getAllFiles);

router.post('/', upload.single('upload_file'), filesService.createOneFile);

router.get('/:id', /*private.checkJWT,*/ service.getOneFile);

//router.put('/:id',  multer.any, service.modifyOneFile);

router.delete('/delete', /*private.checkJWT,*/ service.deleteOneFile); 

module.exports = router;
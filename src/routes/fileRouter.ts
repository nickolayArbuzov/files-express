import {Router} from "express";
import { container } from "../composition-root";
import { FileController } from "../controllers/fileController";
import { fileMiddleware } from "../middlewares/fileMiddleware";

const fileController = container.resolve(FileController)

export const fileRouter = Router({})

fileRouter.post('/upload', 
        fileMiddleware.single('file'),
        fileController.upload.bind(fileController))

fileRouter.get('/list', 
        fileController.getList.bind(fileController))

fileRouter.delete('/delete/:id', 
        fileController.deleteById.bind(fileController))

fileRouter.get('/:id', 
        fileController.getInfoById.bind(fileController))

fileRouter.get('/download/:id', 
        fileController.downloadById.bind(fileController))

fileRouter.put('/update/:id', 
        fileController.updateById.bind(fileController))

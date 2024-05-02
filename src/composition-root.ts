import 'reflect-metadata'
import {Container} from 'inversify'
import { AuthController } from './controllers/authController'
import { AuthService } from './services/authService'
import { AuthRepository } from './repositories/authRepo'
import { FileController } from './controllers/fileController'
import { FileService } from './services/fileService'
import { FileRepository } from './repositories/fileRepo'

export const container = new Container()

container.bind(AuthController).to(AuthController)
container.bind(AuthService).to(AuthService)
container.bind(AuthRepository).to(AuthRepository)

container.bind(FileController).to(FileController)
container.bind(FileService).to(FileService)
container.bind(FileRepository).to(FileRepository)
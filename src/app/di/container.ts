import { Container } from 'inversify';
import IUserService from '../services/IUserService';
import UserService from '../services/UserService';
import { TYPES } from './types';

const container = new Container();

container.bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();

export default container;

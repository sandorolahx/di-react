import { injectable } from 'inversify';
import IUserSevice from './IUserService';

@injectable()
class UserService implements IUserSevice {
    public getFullName(firstName: string, lastname: string) {
        return firstName + ' ' + lastname;
    }
}

export default UserService;

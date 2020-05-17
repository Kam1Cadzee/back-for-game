import {Inject, Service} from 'typedi';
import {Context} from '../../context';
import {LoginUserInput} from './User.types';
import {sign} from 'jsonwebtoken';
import {compare, hash} from 'bcryptjs';
import config from '../../config';
import {UserCreateInput} from '../../type-graphql/resolvers/inputs';
import {AuthenticationError} from 'apollo-server-errors';

@Service()
export class UserService {
  constructor(@Inject('PRISMA_CONTEXT') private readonly context: Context) {
  }

  async login(data: LoginUserInput) {
    const {email, password} = data;
    const user = await this.context.prisma.user.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }

    const passwordValid = await compare(password, user.password);

    if (!passwordValid) {
      throw new Error('Invalid password');
    }

    return {
      token: sign({userId: user.id}, config.app_secret),
      user,
    };
  }

  async signup(data: UserCreateInput) {
    const {email, lastName, name, password} = data;
    let user = await this.context.prisma.user.findOne({
      where: {
        email,
      },
    });
    if (user) {
      throw new AuthenticationError('User with that email already exists');
    }
    const hashedPassword = await hash(password, 10);
    user = await this.context.prisma.user.create({
      data: {
        name,
        email,
        lastName,
        password: hashedPassword,
      },
    });
    return {
      token: sign({userId: user.id}, config.app_secret),
      user,
    };
  }
}

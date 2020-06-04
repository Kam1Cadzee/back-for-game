import {Container, Inject, Service} from 'typedi';
import {Context} from '../../context';
import {LoginUserInput, UserSignUpInput} from './User.types';
import {sign} from 'jsonwebtoken';
import {compare, hash} from 'bcryptjs';
import config from '../../config';
import {AuthenticationError} from 'apollo-server-errors';
import {PrismaClient} from '@prisma/client';

@Service()
export class UserService {
  constructor(@Inject('PRISMA_CONTEXT') private readonly prisma: PrismaClient) {
  }

  async login(data: LoginUserInput) {
    const {email, password} = data;
    const user = await this.prisma.user.findOne({
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
      token: sign({userId: user.id, role: user.role}, config.app_secret),
      user,
    };
  }

  async signup(data: UserSignUpInput) {
    const {email, lastName, name, password, repeatPassword} = data;
    if(password !== repeatPassword) {
      throw new AuthenticationError('Password mismatch');
    }
    let user = await this.prisma.user.findOne({
      where: {
        email,
      },
    });
    if (user) {
      throw new AuthenticationError('User with that email already exists');
    }
    const hashedPassword = await hash(password, 10);
    user = await this.prisma.user.create({
      data: {
        name,
        email,
        lastName,
        password: hashedPassword,
      },
    });
    return {
      token: sign({userId: user.id, role: user.role}, config.app_secret),
      user,
    };
  }

  async refreshUser(ctx: Context) {
    return this.prisma.user.findOne({
      where: {
        id: ctx.userId
      }
    });
  }
}

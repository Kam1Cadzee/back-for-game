import {Resolver, Mutation, Args, Ctx} from "type-graphql";
import {User} from '../../type-graphql/models';
import {CreateOneUserArgs} from '../../type-graphql/resolvers/crud/User/args';
import {Context} from '../../context';
import {LoginUserArgs, UserReturn} from './User.types';
import {sign} from 'jsonwebtoken';
import {compare, hash} from 'bcryptjs';
import {AuthenticationError} from 'apollo-server-errors';
import config from '../../config';

@Resolver(_of => User)
export class UserResolver {
  @Mutation(_returns => UserReturn, {
    nullable: true,
    description: undefined
  })
  async signup(@Ctx() ctx: Context, @Args() args: CreateOneUserArgs): Promise<UserReturn | null> {
    const {email, lastName, name, password} = args.data;
    let user = await ctx.prisma.user.findOne({
      where: {
        email,
      },
    });
    if (user) {
      throw new AuthenticationError('User with that email already exists');
    }
    const hashedPassword = await hash(password, 10);
    user = await ctx.prisma.user.create({
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
  @Mutation(_returns => UserReturn, {
    nullable: true,
    description: undefined
  })
  async login(@Ctx() ctx: Context, @Args() args: LoginUserArgs): Promise<UserReturn | null> {
    const {email, password} = args.data;
    const user = await ctx.prisma.user.findOne({
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
}

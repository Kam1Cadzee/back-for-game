import {compare, hash} from 'bcryptjs';
import {Context} from './../context';
import {arg, mutationType, stringArg} from 'nexus';
import {AuthenticationError} from 'apollo-server';
import {sign} from 'jsonwebtoken';
import config from '../config';

const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        email: stringArg({nullable: false}),
        password: stringArg({nullable: false}),
      },
      resolve: async (_parent, {name, email, password}, ctx: Context) => {
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
            password: hashedPassword,
          },
        });
        return {
          token: sign({userId: user.id}, config.app_secret),
          user,
        };
      },
    });

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg({nullable: false}),
        password: stringArg({nullable: false}),
      },
      resolve: async (_parent, {email, password}, ctx) => {
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
      },
    });

  },
});

export default Mutation;

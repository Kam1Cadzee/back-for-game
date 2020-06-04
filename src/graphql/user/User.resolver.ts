import {Ctx, Mutation, Resolver, Arg, Query} from 'type-graphql';
import {User} from '../../type-graphql/models';
import {Context} from '../../context';
import {LoginUserInput, UserReturn, UserSignUpInput} from './User.types';
import {UserService} from './User.service';

@Resolver(_of => User)
export class UserResolver {
  constructor(
    private readonly service: UserService,
  ) {}

  @Mutation(_returns => UserReturn, {
    nullable: true,
    description: undefined
  })
  async signup(@Ctx() ctx: Context, @Arg("data") data: UserSignUpInput): Promise<UserReturn | null> {
    return this.service.signup(data);
  }

  @Mutation(_returns => UserReturn, {
    nullable: true,
    description: undefined
  })
  async login(@Ctx() ctx: Context, @Arg("data") data: LoginUserInput): Promise<UserReturn | null> {
    return this.service.login(data);
  }

  @Mutation(returns => User)
  async refreshUser(@Ctx() ctx: Context) {
    return this.service.refreshUser(ctx);
  }
}

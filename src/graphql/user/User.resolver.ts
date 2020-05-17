import {Ctx, Mutation, Resolver, Arg} from 'type-graphql';
import {User} from '../../type-graphql/models';
import {Context} from '../../context';
import {LoginUserInput, UserReturn} from './User.types';
import {UserService} from './User.service';
import {UserCreateInput} from '../../type-graphql/resolvers/inputs';

@Resolver(_of => User)
export class UserResolver {
  constructor(
    private readonly service: UserService,
  ) {}

  @Mutation(_returns => UserReturn, {
    nullable: true,
    description: undefined
  })
  async signup(@Ctx() ctx: Context, @Arg("data") data: UserCreateInput): Promise<UserReturn | null> {
    return this.service.signup(data);
  }

  @Mutation(_returns => UserReturn, {
    nullable: true,
    description: undefined
  })
  async login(@Ctx() ctx: Context, @Arg("data") data: LoginUserInput): Promise<UserReturn | null> {
    return this.service.login(data);
  }
}

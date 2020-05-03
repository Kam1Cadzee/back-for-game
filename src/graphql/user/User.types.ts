import {ArgsType, Field, ObjectType, InputType, default as TypeGraphQL} from 'type-graphql';
import {User} from '../../type-graphql/models';

@ObjectType()
export class UserReturn {
  @Field()
  user: User;

  @Field()
  token: string;
}

@InputType()
export class LoginUserInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  password: string;
}

@ArgsType()
export class LoginUserArgs {
  @Field(_type => LoginUserInput, { nullable: false })
  data!: LoginUserInput;
}

import {ArgsType, Field, ObjectType, InputType, default as TypeGraphQL} from 'type-graphql';
import {User} from '../../type-graphql/models';
import {EntityCreateManyWithoutUserInput} from '../../type-graphql/resolvers/inputs';

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

@InputType()
export class UserSignUpInput {
  @Field(_type => String)
  email: string;

  @Field(_type => String)
  name: string;

  @Field(_type => String)
  lastName: string;

  @Field(_type => String)
  password: string;

  @Field(_type => String)
  repeatPassword: string;
}

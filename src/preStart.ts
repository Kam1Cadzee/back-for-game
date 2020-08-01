import config from '../configTypeGraph';

const start = async () => {
  await config({
    blackList: [
      'UserCrudResolver',
      'WordCrudResolver',
      'CreateUserResolver',
      'CreateWordResolver',
      'CreateTranslateResolver',
      'TranslateCrudResolver',
      {
        file: 'User',
        fields: ['password', 'createdAt'],
      },
      {
        file: 'UserCreateInput',
        fields: ['createdAt'],
      },
    ],
  });
};

start();

export default start;

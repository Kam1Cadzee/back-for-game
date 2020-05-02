import { objectType } from 'nexus';

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.user();
    t.crud.users({
      filtering: true,
    });
  },
});

export default Query;

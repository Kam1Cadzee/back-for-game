import { ApolloError } from 'apollo-server-errors';
import { PrismaClient } from '@prisma/client';

export const throwErrorIfTestUser = (role: string, error: string) => {
  if (role === 'TEST') {
    throw new ApolloError(error, 'NO ACCESS');
  }
};

interface IOverCount {
  role: string;
  userId: number;
  prisma: PrismaClient;
}

export const throwErrorIfOverCountQuery = async ({
  prisma,
  role,
  userId,
}: IOverCount) => {
  if (role === 'STANDARD') {
    const { countQuery } = await prisma.user.findOne({
      where: {
        id: userId,
      },
      select: {
        countQuery: true,
      },
    });

    //todo HARDCODE
    if (countQuery > 50) {
      throw new ApolloError('Limit queries! For help ask Vadim)', 'LIMIT');
    }
  }
};

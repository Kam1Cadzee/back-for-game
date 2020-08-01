import preStart from './preStart';
import startServer from './app';

const start = async () => {
  await preStart();
  await startServer();
};

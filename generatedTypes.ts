import fs from 'fs';

const fsP = fs.promises;

const srcpath = __dirname + '/prisma/generated/type-graphql';

const generateType = async () => {
  const names: string[] = [];

  await clear(srcpath, names);

  let data = `export type TempTypes =
  `;
  data += names.join(' | \n');
  data += ';';
  await fsP.writeFile(__dirname + '/temp-types.ts', data);
};

const clear = async (path: string, names: string[]) => {
  const dir = await fsP.opendir(path);

  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      await clear(path + '/' + dirent.name, names);
    } else {
      const name = dirent.name.split('.')[0];
      if (name === 'index') continue;
      names.push(`'${name}'`.padStart(40, ' '));
    }
  }
};

generateType();


import fsExtra from 'fs-extra'
import fs from 'fs';
import {TempTypes} from './temp-types';

const fsP = fs.promises;

const srcpath = __dirname + '/prisma/generated/type-graphql';
const dstpath = __dirname + '/src/type-graphql';

interface IField {
  file: TempTypes | string;
  fields: string[];
}

interface IConfig {
  blackList?: Array<TempTypes | IField>;
}

const configTypeGraph = async (config?: IConfig) => {
  const isExist = await fsExtra.pathExists(srcpath);
  if(!isExist) return ;
  if (config.blackList) {
    addExtraFilter(config);
    await clear(srcpath, config.blackList);
  }
  await moveGenerated();
};

const addExtraFilter = (config: IConfig) => {
  const rgx = /[A-Z]/g;

  const findItems = config.blackList.filter(f => {
    if(typeof f === 'string') return false;
    const length = f.file.match(rgx).length;
    return length === 1;
  }) as IField[];

  findItems.forEach(findItem => {
    const fields = findItem.fields;
    const file = findItem.file;
    config.blackList.push({
      fields,
      file: file + 'UpdateInput'
    });
    config.blackList.push({
      fields,
      file: file + 'WhereInput'
    });
    config.blackList.push({
      fields,
      file: file + 'UpdateManyMutationInput'
    });
    config.blackList.push({
      fields,
      file: file + 'OrderByInput'
    });
  })
};

const clear = async (path: string, blackList: Array<TempTypes | IField>) => {
  const dir = await fsP.opendir(path);
  let removeFiles: string[] = [];

  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      await clear(path + '/' + dirent.name, blackList);
    } else {
      const name = dirent.name.split('.')[0];
      for (const entity of blackList) {
        if (typeof entity === 'string') {
          if (name === entity) {
            await fsExtra.remove(`${path}/${dirent.name}`);
            removeFiles.push(name);
          }
        } else {
          if (entity.file === name) {
            const pathIndex = path + '/' + dirent.name;
            let res: any = (await fsExtra.readFile(pathIndex, 'utf8')).split('\n');
            entity.fields.forEach(field => {
              const endIndex = res.findIndex(s => s.indexOf(field) !== -1);
              const startIndex = endIndex - 4;
              res = res.filter((_, i) => i < startIndex || i > endIndex);
            });
            await fsExtra.writeFile(pathIndex, res.join('\n'));
          }
        }
      }
    }
  }
  if (removeFiles.length > 0) {
    let pathIndex = path + '/index.ts';
    if (!await fsExtra.pathExists(pathIndex)) {
      pathIndex = path + '/../index.ts';
    }
    let res = (await fsExtra.readFile(pathIndex, 'utf8')).split('\n');
    res = res.filter(r => {
      return !removeFiles.some(f => r.indexOf(f) !== -1)
    });
    await fsExtra.writeFile(pathIndex, res.join('\n'))
  }
};

const moveGenerated = async () => {
  await fsExtra.remove(dstpath);
  await fsExtra.move(srcpath, dstpath)
};
export default configTypeGraph;

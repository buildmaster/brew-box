import { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';

const generates = {};
generates[path.resolve(__dirname, './src/__generated__/') + '/'] = {
  preset: 'client',
};
console.log({ generates });
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: [`${__dirname}/src/**/*.tsx`, `${__dirname}/src/app/queries/*.ts`],
  generates,
  ignoreNoDocuments: true,
};

export default config;

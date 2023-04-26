import { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';

const generates = {};
generates['./src/__generated__/'] = {
  preset: 'client',
};
console.log({ generates });
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/**/*.tsx', 'src/app/queries/*.ts'],
  generates,
  ignoreNoDocuments: true,
};

export default config;

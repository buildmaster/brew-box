import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { VesselResolver } from './vessel/vessel.resolver';
import { printSchema } from 'graphql';
import fs from 'fs';
import path from 'path';

export async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([VesselResolver]);
  console.log('generating schema');
  fs.writeFileSync(
    path.resolve(__dirname, '../schema.gql'),
    printSchema(schema)
  );
}
generateSchema();

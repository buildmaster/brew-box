import { CreateFermentationInput } from './create-fermentation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFermentationInput extends PartialType(CreateFermentationInput) {
  @Field(() => Int)
  id: number;
}

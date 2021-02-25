import {IngredientDto} from '../../ingredients/dto/ingredient-dto';

export interface CocktailDto {
  nameRU: string;
  nameEN: string;
  associationRU: string;
  associationEN: string;
  typeRU: string;
  typeEN: string;
  ingredients: IngredientDto[];
  methodRU: string;
  methodEN: string;
  noteRU: string;
  noteEN: string;
  garnishRU: string;
  garnishEN: string;
}

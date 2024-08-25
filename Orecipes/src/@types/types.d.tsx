export interface IIngredients {
  id: number;
  quantity: number;
  unit: string;
  name: string;
}

export interface recipes {
  author: string;
  description: string;
  difficulty: string;
  id: number;
  ingredients: IIngredients[];
  instructions: string[];
  slug: string;
  thumbnail: string;
  title: string;
  imageUrl: string;
}

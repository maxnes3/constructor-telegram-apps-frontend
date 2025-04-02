import { CategoryType } from '@shared/types';
import { serviceConfig } from '@shared/configs';

export const CategoryService = {
  getAllCategoriesQueryFn: async (): Promise<CategoryType[]> => {
    try {
      const response = await serviceConfig.get<CategoryType[]>('/category/get');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch categories: ${error}`);
    }
  },
};

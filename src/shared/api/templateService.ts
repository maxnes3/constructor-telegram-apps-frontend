import { TemplateType } from '@shared/types';
import { serviceConfig } from '@shared/configs';

export const TemplateService = {
  getAllTemplatesQueryFn: async (): Promise<TemplateType[]> => {
    try {
      const response = await serviceConfig.get<TemplateType[]>('/template/get');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch templates: ${error}`);
    }
  },
};

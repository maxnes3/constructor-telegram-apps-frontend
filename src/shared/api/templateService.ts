import { TemplateType } from '@shared/types';
import { serviceConfig } from '@shared/configs';

const BASE_URL = '/template';

export const TemplateService = {
  getAllTemplatesQueryFn: async (): Promise<TemplateType[]> => {
    try {
      const response = await serviceConfig.get<TemplateType[]>(
        `${BASE_URL}/get`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch templates: ${error}`);
    }
  },
};

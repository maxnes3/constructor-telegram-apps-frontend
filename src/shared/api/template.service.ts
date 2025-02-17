import axios from 'axios';
import { TemplateType } from '../types';

const TEMPLATE_BASE_URL = `${import.meta.env.VITE_BACK_URL}/template`;

export const TemplateService = {
  getAllTemplatesQueryFn: async (): Promise<TemplateType[]> => {
    try {
      const response = await axios.get<TemplateType[]>(
        `${TEMPLATE_BASE_URL}/get`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch templates: ${error}`);
    }
  },
};

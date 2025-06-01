import { serviceConfig } from '../configs';
import { ProjectRequestType } from '../types';

const BASE_URL = '/project';

export const ProjectService = {
  downloadProjectQueryFn: async (data: ProjectRequestType): Promise<Blob> => {
    const response = await serviceConfig.post(`${BASE_URL}/download`, data, {
      responseType: 'blob',
    });
    return response.data;
  },
};

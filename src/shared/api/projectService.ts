import { serviceConfig } from '../configs';
import { ProjectRequestType } from '../types';

export const ProjectService = {
  downloadProjectQueryFn: async (data: ProjectRequestType): Promise<Blob> => {
    const response = await serviceConfig.post('project/download', data, {
      responseType: 'blob',
    });
    return response.data;
  },
};

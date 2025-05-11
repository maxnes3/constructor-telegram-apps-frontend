import { ProjectService } from '@/shared/api';
import { ProjectRequestType } from '@shared/types';
import { useMutation } from '@tanstack/react-query';

export const useProjectQuery = () => {
  const mutation = useMutation<Blob, Error, ProjectRequestType>({
    mutationFn: ProjectService.downloadProjectQueryFn,
    onSuccess: (data) => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'project.zip');
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    },
    onError: (error) => {
      console.error('Error downloading project:', error);
    },
  });

  const downloadProject = (data: ProjectRequestType) => {
    mutation.mutate(data);
  };

  return { downloadProject, ...mutation };
};

import { ProjectRequestType } from '@shared/types';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const PROJECT_BASE_URL = `${import.meta.env.VITE_BACK_URL}/project`;

const downloadProjectQueryFn = async (
  data: ProjectRequestType,
): Promise<Blob> => {
  const response = await axios.post(`${PROJECT_BASE_URL}/download`, data, {
    responseType: 'blob',
  });
  return response.data;
};

export const useProjectQuery = () => {
  const mutation = useMutation<Blob, Error, ProjectRequestType>({
    mutationFn: downloadProjectQueryFn,
    onSuccess: (data) => {
      // Создаем ссылку для скачивания файла
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'project.zip'); // Имя файла для скачивания
      document.body.appendChild(link);
      link.click();

      // Очищаем ссылку после скачивания
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    },
    onError: (error) => {
      console.error('Error downloading project:', error);
    },
  });

  const handleDownloadProject = (data: ProjectRequestType) => {
    mutation.mutate(data);
  };

  return { handleDownloadProject, ...mutation };
};

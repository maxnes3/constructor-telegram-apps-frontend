import { useState } from 'react';
import { useTemplatesStore } from '../model';
import { TemplateType } from '@shared/types';
import axios from 'axios';

const TEMPLATE_BASE_URL = `${import.meta.env.VITE_BACK_URL}/template`;

const getAllTemplatesQueryFn = async (): Promise<TemplateType[]> => {
  try {
    const response = await axios.get<TemplateType[]>(
      `${TEMPLATE_BASE_URL}/get`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch templates: ${error}`);
  }
};

export const useTemplatesQuery = () => {
  const { templates, setTemplates } = useTemplatesStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleGetAllTemplates = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getAllTemplatesQueryFn();
      setTemplates(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    templates,
    isLoading,
    error,
    handleGetAllTemplates,
  };
};

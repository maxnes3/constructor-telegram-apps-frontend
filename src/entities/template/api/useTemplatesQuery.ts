import { useState } from 'react';
import { useTemplatesStore } from '../store';
import { TemplateService } from '@shared/api';
import { createHandleQueryFn } from '@/shared/utils';

export const useTemplatesQuery = () => {
  const { templates, setTemplates } = useTemplatesStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getAllTemplates = createHandleQueryFn({
    queryFn: TemplateService.getAllTemplatesQueryFn,
    setData: setTemplates,
    setError,
    setIsLoading,
  });

  return {
    templates,
    isLoading,
    error,
    getAllTemplates,
  };
};

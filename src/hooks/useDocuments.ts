import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Document, SearchResult, DashboardStats } from '@/types'
import {
  CreateDocumentRequest,
  UpdateDocumentRequest,
  GenerateDocumentRequest,
  SearchDocumentsRequest,
} from '@/types/api'
import {
  getDocuments,
  getDocument,
  createDocument,
  updateDocument,
  deleteDocument,
  generateDocument,
  searchDocuments,
  getDashboardStats,
} from '@/services/documentService'

export const useDocuments = () => {
  return useQuery({
    queryKey: ['documents'],
    queryFn: getDocuments,
  })
}

export const useDocument = (id: string) => {
  return useQuery({
    queryKey: ['document', id],
    queryFn: () => getDocument(id),
    enabled: !!id,
  })
}

export const useCreateDocument = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateDocumentRequest) => createDocument(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })
    },
  })
}

export const useUpdateDocument = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateDocumentRequest }) =>
      updateDocument(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })
      queryClient.invalidateQueries({ queryKey: ['document', variables.id] })
    },
  })
}

export const useDeleteDocument = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteDocument(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })
    },
  })
}

export const useGenerateDocument = () => {
  return useMutation({
    mutationFn: (data: GenerateDocumentRequest) => generateDocument(data),
  })
}

export const useSearchDocuments = (params: SearchDocumentsRequest) => {
  return useQuery({
    queryKey: ['search', params],
    queryFn: () => searchDocuments(params),
    enabled: !!params.query,
  })
}

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: getDashboardStats,
  })
}

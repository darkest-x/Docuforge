import React, { createContext, useContext, ReactNode } from 'react'
import { Document, DocumentVersion, EditorState } from '@/types'

interface DocumentContextType {
  documents: Document[]
  setDocuments: (documents: Document[]) => void
  currentDocument: Document | null
  setCurrentDocument: (document: Document | null) => void
  editorState: EditorState
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
  versions: DocumentVersion[]
  setVersions: (versions: DocumentVersion[]) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const DocumentContext = createContext<DocumentContextType | undefined>(undefined)

interface DocumentProviderProps {
  children: ReactNode
}

export const DocumentProvider: React.FC<DocumentProviderProps> = ({ children }) => {
  const [documents, setDocuments] = React.useState<Document[]>([])
  const [currentDocument, setCurrentDocument] = React.useState<Document | null>(null)
  const [editorState, setEditorState] = React.useState<EditorState>({
    documentId: null,
    content: '',
    isDirty: false,
    isSaving: false,
    mode: 'markdown',
  })
  const [versions, setVersions] = React.useState<DocumentVersion[]>([])
  const [isLoading, setIsLoading] = React.useState(false)

  const value = React.useMemo(
    () => ({
      documents,
      setDocuments,
      currentDocument,
      setCurrentDocument,
      editorState,
      setEditorState,
      versions,
      setVersions,
      isLoading,
      setIsLoading,
    }),
    [documents, currentDocument, editorState, versions, isLoading]
  )

  return <DocumentContext.Provider value={value}>{children}</DocumentContext.Provider>
}

export const useDocumentContext = () => {
  const context = useContext(DocumentContext)
  if (context === undefined) {
    throw new Error('useDocumentContext must be used within a DocumentProvider')
  }
  return context
}

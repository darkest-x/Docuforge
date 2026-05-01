import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProvider } from './contexts/AppContext'
import { DocumentProvider } from './contexts/DocumentContext'
import { Dashboard, Documents, CreateDocument, DocumentDetail, NotFound } from './pages'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
})

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <DocumentProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/documents/:id" element={<DocumentDetail />} />
              <Route path="/create" element={<CreateDocument />} />
              <Route path="/generate" element={<CreateDocument />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </DocumentProvider>
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App

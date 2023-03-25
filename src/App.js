import React from 'react'
import Router from './shared/Router';
import { GlobalStyle, Layout }  from './css/commenCss.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (  
    <div>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
      <Layout>
        <Router/>
      </Layout>
      </QueryClientProvider>
    </div>
  )
}

export default App;

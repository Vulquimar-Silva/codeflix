import { Box, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { CategoryList } from './features/categories/ListCategory';
import { CategoryCreate } from './features/categories/CreateCategory';
import { CategoryEdit } from './features/categories/EditCategory';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box 
      component="main"
      sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.grey[900],
      }}>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id" element={<CategoryEdit />} />

            <Route path="*" element={
              <Box>
                <h1>404</h1>
                <h1>Page not found</h1>
              </Box>
            } />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App;

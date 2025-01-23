import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../pages/layout/layout'
import PagesShahzod from '../pages/pagesShahzod/pagesShahzod'
import PagesKholid from '../pages/pagesKholid/pagesKholid'
import PagesAnush from '../pages/pagesAnush/pagesAnush'
import PagesSafar from '../pages/pagesSafar/pagesSafar'
import PagesMurodbek from '../pages/pagesMurodbek/pagesMurodbek'
import PagesShuhrat from '../pages/pagesShuhrat/pagesShuhrat'
import PagesAbdulhakim from '../pages/pagesAbdulhakim/pagesAbdulhakim'
import PagesUsmon from '../pages/pagesUsmon/pagesUsmon'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<PagesShahzod/>}/>
        <Route path='kholid' element={<PagesKholid/>}/>
        <Route path='anush' element={<PagesAnush/>}/>
        <Route path='safar' element={<PagesSafar/>}/>
        <Route path='murodbek' element={<PagesMurodbek/>}/>
        <Route path='shuhrat' element={<PagesShuhrat/>}/>
        <Route path='abdulhakim' element={<PagesAbdulhakim/>}/>
        <Route path='usmon' element={<PagesUsmon/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

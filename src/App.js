import {TopnavBar} from "./components/elements/topnavBar";
import {Routes, Route} from 'react-router-dom';

import NotFound from "./components/pages/404page/notfound";

import CodeFolio from "./codepenFolio/codeFolio";

function App() {
  return (
    <>
        <TopnavBar/>

        <Routes>

            <Route path="/MyPortfolio/" element={<CodeFolio/>}></Route>
            
            <Route path="*" element={<NotFound/>}></Route>            
        </Routes>
        
        

    </>
  );
}

export default App;

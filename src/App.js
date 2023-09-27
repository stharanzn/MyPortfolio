import {TopnavBar} from "./components/elements/topnavBar";
import {Routes, Route} from 'react-router-dom';

import NotFound from "./components/pages/404page/notfound";

import CodeFolio from "./codepenFolio/codeFolio";
import Card from "./components/elements/card/card";

// const Card = lazy(()=>import("./components/elements/card/card"))
// const CodeFolio = lazy(()=> import("./codepenFolio/codeFolio"))
// const NotFound = lazy(()=> import("./components/pages/404page/notfound"))

function App() {
  return (
    <>
        <TopnavBar/>
        <Card/>

        <Routes>

            <Route path="/MyPortfolio/" element={<CodeFolio/>}></Route>
            
            <Route path="*" element={<NotFound/>}></Route>            
        </Routes>                   

    </>
  );
}

export default App;

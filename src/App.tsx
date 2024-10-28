import {BrowserRouter, Routes, Route} from "react-router-dom";
import { RecoilRoot } from "recoil";

// page 컴포넌트
import MainPage from '@pages/index/index';

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage />}></Route>
                    <Route path='/search/:id' element={<MainPage />}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
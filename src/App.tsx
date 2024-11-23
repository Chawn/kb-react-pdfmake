import { Route, Routes } from 'react-router-dom'
import './App.css' // เพิ่ม CSS สำหรับการจัด layout
import PageKb1 from './components/PageKb1'
import PageKb2 from './components/PageKb2'
import Sidebar from './components/Sidebar'
import PageKb9 from './components/PageKb9'
import PageKb5 from './components/PageKb5'
// import PageKb3 from './PageKb3';
// import PageKb4 from './PageKb4';
// import PageKb5 from './PageKb5';
// import PageKb6 from './PageKb6';
// import PageKb7 from './PageKb7';
// import PageKb8 from './PageKb8';
// import PageKb9 from './PageKb9';
// import PageKb10 from './PageKb10';

// import K1 from './K1';
// import K2 from './K2';
const App = () => {
    return (
        <div className="h-screen w-screen flex bg-white">
            <Sidebar />
            <div className="grow text-start w-full h-full text-black">
                <Routes>
                    {/* คบ.1 - คบ.10 */}
                    <Route path="/kb1" element={<PageKb1 />} />
                    <Route path="/kb2" element={<PageKb2 />} />
                    <Route path="/kb5" element={<PageKb5 />} />
                    <Route path="/kb9" element={<PageKb9 />} />
                    {/* <Route path='/kb3' element={<PageKb3 />} />
				<Route path='/kb4' element={<PageKb4 />} />
				<Route path='/kb5' element={<PageKb5 />} />
				<Route path='/kb6' element={<PageKb6 />} />
				<Route path='/kb7' element={<PageKb7 />} />
				<Route path='/kb8' element={<PageKb8 />} />
				<Route path='/kb9' element={<PageKb9 />} />
				<Route path='/kb10' element={<PageKb10 />} />
				<Route path='/k1' element={<K1 />} />
				<Route path='/k2' element={<K2 />} /> */}

                    {/* Default Route */}
                    <Route path="*" element={<h1>เลือกเมนูจากด้านซ้าย</h1>} />
                </Routes>
            </div>
        </div>
    )
}

export default App

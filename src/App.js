// import React from 'react';
// import { ColorModeContext, useMode } from './theme';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { Routes, Route } from 'react-router-dom';

// import Sidebar from './scenes/global/Sidebar';
// import Topbar from './scenes/global/Topbar';
// import Dashboard from './scenes/dashboard';
// import MapboxDemo1 from './components/MapBox/Mapbox1';
// import DetailBox from './components/Box/DetailBox';

// // import Team from "./scenes/team";
// // import Invoices from "./scenes/invoices";
// // import Calendar from "./scenes/calendar";
// // import Contacts from "./scenes/contacts";
// // import Form from "./scenes/form";
// // import Bar from "./scenes/bar";
// // import Line from "./scenes/line";
// // import Pie from "./scenes/pie";
// // import FAQ from "./scenes/faq";
// // import Geography from "./scenes/geography";

// const App = () => {
//   const [theme, colorMode] = useMode();

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Sidebar />
//           <main className="content">
//             <Topbar />
//             <DetailBox />
//             <MapboxDemo1 />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               {/* <Route path="/team" element={<Team />} /> */}
//               {/* <Route path="/contacts" element={<Contacts />} /> */}
//               {/* <Route path="/invoices" element={<Invoices />} /> */}
//               {/* <Route path="/form" element={<Form />} /> */}
//               {/* <Route path="/bar" element={<Bar />} /> */}
//               {/* <Route path="/line" element={<Line />} /> */}
//               {/* <Route path="/pie" element={<Pie />} /> */}
//               {/* <Route path="/faq" element={<FAQ />} /> */}
//               {/* <Route path="/geography" element={<Geography />} /> */}
//               {/* <Route path="/calendar" element={<Calendar />} /> */}
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };

// export default App;

// **************************************
// This is the updated / cleaned up code
import React from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import CortevaMap from './components/Mapbox/Mapbox';
import DetailBox from './components/DetailBox/DetailBox';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <DetailBox />
            <CortevaMap />
            <Routes>
              <Route path="/" element={''} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;

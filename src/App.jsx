import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { fetchFixture } from "./lib/fetch-data";
import { data } from "./lib/dummy-data";
import { Table } from "./components/table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fixture from "./components/fixture";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Footer from "./components/footer";

function App() {
  const [fixtures, setFixtures] = useState([]);

  const fetchData = async () => {
  const result = await fetchFixture();
  setFixtures(result);
  }

  useEffect(() => {
    fetchData();
  }, [])

  //console.log("losfixtures son:",fixtures)

  const refresh = () => window.location.reload(true)

  return (
    <div className="w-full md:w-[700px] lg:w-[800px] m-auto">
      <NavBar />

      <button onClick={refresh} className="btn btn-sm fixed bottom-3 right-2 z-40">
        Actualizar
      </button>

      {fixtures.length == 0 ? (
        <div className="h-screen bf-white w-full text-center p-10">
          <Box>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Table data={fixtures} />} />
            <Route
              path="/fixture/:matchID"
              element={<Fixture data={fixtures} />}
            />
          </Routes>
        </BrowserRouter>
      )}

      <Footer />
    </div>
  );
}

export default App;

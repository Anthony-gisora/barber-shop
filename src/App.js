import { Route, Routes } from "react-router-dom";
import DefaultAppLayout from "./layouts/DefaultAppLayout";
import Homepage from "./pages/homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <DefaultAppLayout>
          <Homepage />
        </DefaultAppLayout>
      } />
    </Routes>
  );
}

export default App;

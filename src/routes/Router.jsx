import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/test" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRouter;
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Register from "./pages/Register";
import SigninPage from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import useAuth from "./hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import AppLayout from "./components/layouts/App.Layout";
import TripsPages from "./pages/trips/TripsPages";
import AddTripPage from "./pages/trips/AddTripPage";
import EditTripPage from "./pages/trips/EditTripPage";
import TripsDetails from "./pages/trips/TripsDetails";
import AcceptInvitation from "./pages/AcceptInvitation";
import Baggagepage from "./pages/baggage/Baggagepage";
import Baggagedetails from "./pages/baggage/BaggageDetails";
import BaggageDetails from "./pages/baggage/BaggageDetails";
import ItenerariesPage from "./pages/itineraries/ItenerariesPage";
import ItinerariesDeatils from "./pages/itineraries/ItinerariesDeatils";
import AddItineraries from "./pages/itineraries/AddItineraries";
import { Edit } from "lucide-react";
import EditItinenaries from "./pages/itineraries/EditIteneraries";

export default function App() {
  const { token, logout } = useAuth();
 const decodedToken = token ? jwtDecode(token) : null;
 console.log(decodedToken);
  const ProtectedRoutes = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      const userId = decodedToken?.userId;

      if(decodedToken && decodedToken?.exp){
        const currentTime = Date.now();
        if (decodedToken.exp < currentTime/1000) {
          logout();
          return <Navigate to="/signin" />;

        }
      }

      if(!userId){
        logout();
        return <Navigate to="/signin" />;
      }

      return <AppLayout/>

    } catch (error) {
      console.error(error);
      logout();
      return <Navigate to="/signin" />
    }
  }


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />

          <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trips" element={<TripsPages />} />
          <Route path="/trips/add" element={<AddTripPage />} />
          <Route path="/trips/edit/:id" element={<EditTripPage />} />
          <Route path="/trips/:id" element={<TripsDetails />} />
          <Route path="/trips/:id/invite/accept" element={<AcceptInvitation />} />

          {/* baggage pages */}
          <Route path="/baggage" element={<Baggagepage />} />
          <Route path="/baggage/:id" element={<BaggageDetails />} />

          {/* itinary pages */}
          <Route path="/itineraries" element={<ItenerariesPage  />} />"
          <Route path="/itineraries/:tripId/add" element={<AddItineraries />} />
          <Route path="/itineraries/:id" element={<ItinerariesDeatils />} />
          <Route path="/itineraries/:id/edit/:itinerarryId" element={<EditItinenaries/>} />

          </Route>



          
        </Routes>
    </BrowserRouter>
  )
}

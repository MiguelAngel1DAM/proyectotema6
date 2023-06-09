import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Map.css";

function Information() {
  const positions = [
    {
      latitude: 28.0033198,
      longitude: -15.4163828
    }, {
      latitude: 27.9831833,
      longitude: -15.3870108
    }, {
      latitude: 27.996469,
      longitude: -15.3797842
    }
  ];
  return (
    <>
      <Header />
      <MapContainer center={[28.0033198, -15.4163828]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((p, index) =>
          <Marker key={index} position={[p.latitude, p.longitude]}>
            <Popup>
              Tienda Pricipal
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <Footer />
    </>
  );
};

export default Information;
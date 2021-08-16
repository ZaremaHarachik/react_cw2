
import Geo from "../geo/Geo";

export default function Address({street, suite, city, zipcode, geo}) {

    return (
        <div>
            <h4><u>User's address</u></h4>
            <h5>street - {street}</h5>
            <h5>suite - {suite}</h5>
            <h5>city - {city}</h5>
            <h5>zipcode - {zipcode}</h5>
            <Geo
                lat={geo.lat}
                lng={geo.lng}
            />
        </div>
    );
}
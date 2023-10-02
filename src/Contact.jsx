import MapApi from "./MapApi"


export default function Contact() {
    
      return (
        <div id="contact-us">
            <div id="address">
                <p>JMJ Candy Shop</p>
                <p>Serving the best candy since last week</p>
                <p>Phone: 1(800)OnCandy</p>
                <p>Email: 50cent@candyshop.com</p>
            </div>
            <div id="map"><MapApi /></div>
        </div>
      );
}
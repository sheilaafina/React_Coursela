import Login from "../login";
export default function Footer(){
    return(
        <footer>
        <div className="footer-column">
            <h3>Top Products</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div>
        <div className="footer-column">
            <h3>Top Products</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div>
        <div className="footer-column">
            <h3>Top Products</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div>
        <div className="footer-column">
            <h3>Top Products</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div>

        <div className="footer-col">
            <h3>Newsletter</h3>
            <p>You can trust us. We only send free promos.</p>
            <div className="subscribe">
                <input type="text" placeholder="Your Email Address"/>
                <a href={Login} className="white">SUBSCRIBE</a>
            </div>
        </div>
    </footer>
    )
}
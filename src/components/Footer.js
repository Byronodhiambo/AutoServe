import React from "react";
export default function Footer() {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <div className="container">
          <div class="columns">
            <div class="column">
              <h4
                class="bd-footer-title 
                          has-text-weight-medium
                          has-text-left"
              >
                Auto Serve Ltd.
              </h4>
              <p
                class="bd-footer-link 
                          has-text-left"
              >
                Regular maintenance reduces the probability of a car breakdown
                and, at the same time, extends the vehicle’s life. If there is
                no proper maintenance of your car parts they can easily get
                damaged. This is the main reason why you have to take your
                vehicle to the proper maintenance and also through the proper
                servicing, we have you covered in all the proper and genuine
                parts
              </p>
            </div>
            <div class="column">
              <h4
                class="bd-footer-title 
                          has-text-weight-medium 
                          has-text-justify"
              >
                Explore
              </h4>
              <p class="bd-footer-link">
                <a href="https://">
                  <span class="icon-text">
                    <span>Home</span>
                  </span>
                </a>
                <br />
                <a href="https://">
                  <span class="icon-text">
                    <span>Shop</span>
                  </span>
                </a>
                <br />
                <a href="https://">
                  <span class="icon-text">
                    <span>Contacts</span>
                  </span>
                </a>
              </p>
            </div>
            <div class="column">
              <h4
                class="bd-footer-title
                          has-text-weight-medium
                          has-text-justify"
              >
                Contact us
              </h4>
              <p class="bd-footer-link">
                <a href="https://">
                  <span class="icon-text">
                    <span>Email</span>
                  </span>
                </a>
                <br />
                <a href="https://">
                  <span class="icon-text">
                    <span>Call Us</span>
                  </span>
                </a>
                <br />
                <a href="https://">
                  <span class="icon-text">
                    <span>Chat with us!</span>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <p>© 2022 Auto Serve Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

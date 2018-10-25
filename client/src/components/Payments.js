import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="EMaily"
        description="$5 for 5 Emaily Credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn-small">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;

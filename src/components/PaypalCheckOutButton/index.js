import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  const { product } = props;
  const [err, setErr] = useState(null);
  const [paidFor, setPaidFor] = useState(false);
  const handleApprove = (orderID) => {
    // call backend để xử lý dữu liệu

    setPaidFor(true);
    // tải lại trang làm mới dữu liệu
  };

  if (paidFor) {
    alert("ádasda");
   
  }
  if (err) {
    alert(err);
  }
  return (
    <div>
      <PayPalScriptProvider
        options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
      >
        <PayPalButtons
          style={{
            color: "silver",
            layout: "horizontal",
            tagline: false,
            shape: "pill",
          }}
          createOrder={(data, action) => {
            return action.order.create({
              purchase_units: [
                {
                  amount: {
                    value: product.price,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, action) => {
            const order = await action.order.capture();
            console.log("Order: ", order);
            handleApprove(data.orderID);
          }}
          onError={(err) => {
            setErr(err);
            console.log("Payment checkout error: ", err);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

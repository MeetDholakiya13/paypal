import React from 'react';
import logo from './logo.svg';
import './App.css';
import PayPalBtn from './components/PayPalBtn'
const paypalSubscribe = (data, actions) => {
return actions.subscription.create({
'plan_id': "P-9KV09466G7822553GMODO6NY",
});
};
const paypalOnError = (err) => {
console.log("Error")
}
const paypalOnApprove = (data, detail) => {
// call the backend api to store transaction details

const details={
    "data": {
      "facilitatorAccessToken": data.facilitatorAccessToken,
      "orderID": data.orderID,
      "paymentSource": data.paymentSource,
      "subscriptionID": data.subscriptionID,
    },
    "status": data.status
  }
 
  return details;

};
function App() {
return (
<div className="App">
<PayPalBtn
amount = "5"
currency = "USD"
createSubscription={paypalSubscribe}
onApprove={paypalOnApprove}
catchError={paypalOnError}
onError={paypalOnError}
onCancel={paypalOnError}
/>
</div>
);
}
export default App;

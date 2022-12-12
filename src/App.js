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

console.log('err :>> ', err);

return window.ReactNativeWebView &&
window.ReactNativeWebView.postMessage(
  JSON.stringify({ status: "cancel" })
);

}
const paypalOnCancel = (err) => {


    console.log('err cancel :>> ', err);
   return window.ReactNativeWebView &&
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ status: "cancel" })
    );
    
    }
const paypalOnApprove = (data, detail) => {
// call the backend api to store transaction details

 return window.ReactNativeWebView &&
window.ReactNativeWebView.postMessage(
  JSON.stringify({ data: data, status: "sucess" })
);

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
onCancel={paypalOnCancel}
/>
</div>
);
}
export default App;

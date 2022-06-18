import  React from "react";
import UserStore from "../stores/UserStore";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();

  setTimeout(function () {
    axios
      .delete("/releaseBooking", { data: location.state })
      .then(function (response) {
        if (response.data.success===true) {
          alert("requested time out!");
          window.location.href = "/";

        } else {
          alert("error!");
        }
      });
  }, 10000);

  const confirmBooking = () => {
    axios
      .get("/isReserved", {
        params: location.state,
      })
      .then(function (response) {
        if (response.data.success) {
          if (response.data.data.length === 0) {
            alert("cannot process payment! no reserved seats");
            window.location.href = "/";
          } else {
            axios
              .post("/confirmBooking", location.state)
              .then(function (response) {
                if (response.data.success) {
                  alert("booking confirmed!");
                  window.location.href = "/";
                } else {
                  alert("sorry your booking cannot be confirmed!");
                  console.log(response);
                  window.location.href = "/";
                }
              })
              .catch(function (error) {
                alert("oops an error occured!");
                // window.location.href = "/";
              });
          }
        } else {
          alert("oops an error occured!");
          // window.location.href = "/";
        }
      });
  }

  return (
    <div
      className="paymentPage"
      style={{
        width: "500px",
        height: "250px",
        margin: "auto",
        top: "0",
        right: "0",
        left: "0",
        textAlign: "center",
        marginTop: "300px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        zIndex: 3,
        position: "absolute",
        backgroundColor: "rgba(182, 172, 189, 0.63)",
      }}
    >
      <h2>Click here to process payment</h2>
      <button
        style={{
          backgroundColor: "rgb(44, 37, 49)",
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: "10px",
          marginTop: "10%",
        }}
        onClick={confirmBooking}
      >
        Pay
      </button>
    </div>
  )
    
  
}
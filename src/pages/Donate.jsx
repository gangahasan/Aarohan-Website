import React, { useEffect, useRef,useState } from "react";
import "../styles/donate.css";
import { FaRegCopy } from "react-icons/fa";

const bankInfo = [
  { label: "Account Name", value: "Aarohan", key: "accountName" },
  { label: "Branch Code", value: "8642", key: "branchCode" },
  {
    label: "Bank Account Number",
    value: "864210310000283",
    key: "accountNumber",
  },
  { label: "Branch Name", value: "Saroornagar, Hyderabad", key: "branchName" },
  { label: "Bank", value: "Bank of India", key: "bank" },
  { label: "IFSC Code", value: "BKID0008642", key: "ifsc" },
];
const Donate = () => {
  const formRef = useRef(null);
  const [copiedKey, setCopiedKey] = useState("");
 

  useEffect(() => {
    const button = document.createElement("script");
    button.src = "https://checkout.razorpay.com/v1/payment-button.js";
    button.setAttribute("data-payment_button_id", "pl_QEtavNGw7lqEH7");
    button.async = true;

    // Append to the form container
    if (formRef.current) {
      formRef.current.innerHTML = ""; // Clear existing
      formRef.current.appendChild(button);
    }
  }, []);
  const handleCopy = (value, key) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 1000); // Reset after 2s
    });
  };

  return (
    <div id="donate" className="s-container">
      <div className="scontainer">
        <h3 className="mainheading">Donate to Aarohan</h3>

        <div className="body">
          <p>
            Aarohan requires your support. You can help not just financially but
            more importantly with resources. There may be many books and
            teaching material stacked in your homes that you might not need
            anymore. We will put them to effective use for those who need them.
          </p>
          <p>
            You could donate yourself of course. We’d love it if you could honk
            a horn at your friends who might be interested in donating.
          </p>
          <p>
            The internet hasn't been more useful anytime than today. You can
            either order stuff and donate to us using pre worked out wish-list
            or can take up the long known conventional way of donating via
            Cheque / Demand Draft / Direct Bank transfer.
          </p>
        </div>

        <div className="fund-details">
          <div className="address">
            <p>
              Cheques / Demand Draft should be in the name of{" "}
              <b>"Aarohan Community Center"</b> payable at <b>Hyderabad.</b>
            </p>{" "}
            ‍
            <p>
              Address for mailing Cheques / Demand Draft: <br />
              1/4153a, Dr Vir Sain Clinic, <br />
              Inside Ambedkar Gate, <br />
              Ramnagar, Shahdara, <br />
              Delhi - 110032
            </p>
            <p>
              Aarohan has been granted the tax exemption certificate under 80G
              of Income Tax Act 1961. All donations to our cause will be
              provided with 50% tax exemption. For any queries, please send an
              email to
              <br />
              <a href="# " style={{ color: "#1ABC9C" }}>
                info@aarohaninitiative.org
              </a>
            </p>
          </div>
          <div className="bankdetails">
            <h3>Bank Details</h3>
              <div className="data">
                {bankInfo.map((item) => (
                  <div
                    key={item.key}
                    className="copy-field"
                    onClick={() => handleCopy(item.value, item.key)}
                  >
                    <b>{item.label}</b><br/>
                    <p style={{ cursor: "pointer" }}>
                      {item.value}
                      <span className="copy-btn" style={{ marginLeft: "10px" }}>
                        {copiedKey === item.key ? "✅" : <FaRegCopy />}
                      </span>
                    </p>
                  </div>
                ))} 
                
              <div ref={formRef} className="payment-button"></div>
              </div>
            </div>
          </div>
     
    </div>
    </div>
  );
};

export default Donate;

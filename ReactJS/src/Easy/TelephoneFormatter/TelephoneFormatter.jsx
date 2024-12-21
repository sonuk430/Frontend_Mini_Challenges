import { useState } from "react";
import styles from "./TelephoneFormatter.module.css";

const TelephoneFormatter = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  function handleInputChange(e) {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-digit characters

    // Limit input to 16 digits
    if (inputValue.length > 16) {
      return; // Prevent further input if it exceeds 16 digits
    }

    // Format the number as +(123) - 4567890
    let formattedNumber = "";

    if (inputValue.length > 3) {
      formattedNumber =
        "+(" + inputValue.substring(0, 3) + ")-" + inputValue.substring(3);
    } else {
      formattedNumber = inputValue;
    }

    setMobileNumber(formattedNumber); // Update mobileNumber with formatted input
  }

  console.log(mobileNumber);

  return (
    <div className={styles.telephoneFormatter}>
      <input
        value={mobileNumber}
        type="tel"
        placeholder="Mobile Number"
        onChange={handleInputChange}
        maxLength={16} // Allow for formatted length
      />
      <p>+(123) - 4567890</p>
    </div>
  );
};

export default TelephoneFormatter;

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function IconDatePicker({ value, onChange }) {
  return (
    <div className="date-input-wrapper">

      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="dd-MM-yyyy"
        placeholderText="dd-mm-yyyy"
        customInput={
          <div className="date-display-wrapper">
            <input
              value={value ? value.toLocaleDateString("en-GB") : ""}
              readOnly
              placeholder="dd-mm-yyyy"
              className="date-display"
            />

            <FaCalendarAlt className="date-icon" />

          </div>
        }
      />

    </div>
  );
}
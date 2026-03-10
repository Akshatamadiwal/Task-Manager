import { useRef } from "react";

export default function TimeInput({ value, onChange }) {
  const timeRef = useRef(null);

  const openTimePicker = () => {
    timeRef.current.focus();
    timeRef.current.click();
  };

  return (
    <div className="time-input-wrapper">

      <input
        type="text"
        value={value || ""}
        placeholder="hh:mm"
        readOnly
        className="time-display"
      />

      <span
        className="time-icon"
        onClick={openTimePicker}
      >
        🕝
      </span>

      <input
        type="time"
        ref={timeRef}
        onChange={(e) => onChange(e.target.value)}
        className="time-hidden"
      />

    </div>
  );
}
import { useEffect, useState } from "react";

function DateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <p style={{textAlign:"center"}}>
      {now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}{" "}
      ,{" "}
      {now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}
    </p>
  );
}

export default DateTime;

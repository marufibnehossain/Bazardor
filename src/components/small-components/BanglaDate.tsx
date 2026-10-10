"use client";

import { useEffect, useState } from "react";

const BanglaDate = () => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const formattedDate = new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
      }).format(new Date());

      setDate(formattedDate);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return <p className="text-xs text-heading">{date}</p>;
};

export default BanglaDate;
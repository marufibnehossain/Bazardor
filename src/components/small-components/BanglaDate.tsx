"use client";

import { useEffect, useState } from "react";

interface BanglaDateProps {
  className?: string;
}

const BanglaDate = ({ className }: BanglaDateProps) => {
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

  return <p className={className}>{date}</p>;
};

export default BanglaDate;
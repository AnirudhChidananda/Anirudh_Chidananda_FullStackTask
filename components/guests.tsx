import React, { Suspense } from "react";
import axios from "axios";
import { TextAnimate } from "@/components/text-animate";

function transformToString(data: string[]) {
  let str = "";
  data.map((name: string) => {
    str += `${name}\n\n`;
  });
  return str;
}

export default async function Guests() {
  //   const data = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/guests`);
  const data = { data: ["Anirudh", "Alice", "Bob", "Charlie", "David", "John", "Rose"] };
  let string = "";
  if (data?.data) {
    string = transformToString(data.data);
  }

  return (
    <Suspense fallback={<div>....Loading</div>}>
      <TextAnimate animation="fadeIn" by="line" as="p">
        {string}
      </TextAnimate>
    </Suspense>
  );
}

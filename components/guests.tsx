import React from "react";
import { TextAnimate } from "@/components/text-animate";
import { getGuests } from "@/hooks/fetch-guests";

function transformToString(data: string[]) {
  let str = "";
  data.map((name: string) => {
    str += `${name}\n\n`;
  });
  return str;
}

export default async function Guests() {
  const data = await getGuests();
  let string = "";
  if (data?.data) {
    string = transformToString(data.data);
  }

  return (
    <div>
      <TextAnimate animation="fadeIn" by="line" as="p">
        {string}
      </TextAnimate>
    </div>
  );
}

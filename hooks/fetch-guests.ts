import axios from "axios";

export async function getGuests() {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/guests`);
  //replce above line with the following to access Live API url
  // const data = await axios.get(`https://anirudh-chidananda-full-stack-task.vercel.app/api/guests`);
  return data;
}

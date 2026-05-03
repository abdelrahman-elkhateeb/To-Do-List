import axios from "axios";

export async function getTodos() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
  return data.data;
}

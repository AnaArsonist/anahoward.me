import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;

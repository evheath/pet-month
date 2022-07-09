import { NextApiRequest, NextApiResponse } from "next";
import { updatePetData } from "@/utils/firestore";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { numPets }
  } = req
  await updatePetData(parseInt(numPets as string));
  res.status(200).json({});
}

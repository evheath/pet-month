// firestore boilerplate
import { initializeApp, getApp, getApps, cert } from 'firebase-admin/app';
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);
const app = getApps().length === 0 ? initializeApp({ credential: cert(serviceAccount) }) : getApp();
import { getFirestore } from 'firebase-admin/firestore';
const db = getFirestore(app);

import { PetData } from '@/utils/PetData';
export async function updatePetData(numPets: number) {
  console.log(`updating pet data for ${numPets} pets`);
  const index = numPets - 1;
  const petData = await getPetData();
  petData[index]!.families += 1;
  console.log("New pet data:", petData);
  await db.doc("surveys/pets-per-family").set({ data: petData });
}

export async function getPetData(): Promise<PetData[]> {
  const snapshot = await db.doc("surveys/pets-per-family").get();
  const snapData = snapshot.data();
  const petData = snapData && snapData.data ? snapData.data : getDummyData();
  return petData;
}

function getDummyData(): PetData[] {
  return [
    {
      name: '1 Pet',
      families: 16,
    },
    {
      name: '2 Pets',
      families: 1398,
    },
    {
      name: '3 Pets',
      families: 9800,
    },
    {
      name: '4 Pets',
      families: 3908,
    },
    {
      name: '5 Pets',
      families: 4800,
    },
    {
      name: '6+ Pets',
      families: 3800,
    },
  ];
}
import { PetData } from '@/utils/PetData';
import { initializeApp, getApp, getApps } from 'firebase-admin/app';
const app = getApps().length === 0 ? initializeApp() : getApp();
import { getFirestore } from 'firebase-admin/firestore';
const db = getFirestore(app);

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
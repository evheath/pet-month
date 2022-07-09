import Router from "next/router";
import { useState } from "react";
import styles from "@/styles/button.module.css"
import LoadingSpinner from "@/components/LoadingSpinner";
export default function ButtonGrid() {
  const [loading, setLoading] = useState(false);
  async function submitPets(numPets: number) {
    setLoading(true);
    await fetch(`/api/${numPets}`);
    Router.push(`/${numPets}`);
  }

  if (loading) {
    return (
      <div className="flex justify-center" >
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="mx-16 grid grid-cols-2 md:grid-cols-3 gap-6 h-64">
      <button className={styles.button} onClick={() => submitPets(1)}>1</button>
      <button className={styles.button} onClick={() => submitPets(2)}>2</button>
      <button className={styles.button} onClick={() => submitPets(3)}>3</button>
      <button className={styles.button} onClick={() => submitPets(4)}>4</button>
      <button className={styles.button} onClick={() => submitPets(5)}>5</button>
      <button className={styles.button} onClick={() => submitPets(6)}>6+</button>
    </div>
  )
}
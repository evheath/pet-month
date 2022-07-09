import { Button } from "./Button";

export default function ButtonGrid() {
  return (
    <div className="mx-16 grid grid-cols-2 md:grid-cols-3 gap-6 h-64">
      <Button href={"/1"}>1</Button>
      <Button href={"/2"}>2</Button>
      <Button href={"/3"}>3</Button>
      <Button href={"/4"}>4</Button>
      <Button href={"/5"}>5</Button>
      <Button href={"/6+"}>6+</Button>
    </div>
  )
}
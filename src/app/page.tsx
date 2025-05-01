import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h2>Let's Explore </h2>
      <Button href="/knn">Go To KNN</Button>
    </div>
  );
}

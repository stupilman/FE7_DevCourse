import { Metadata } from "next";
import image from "@/asset/images/image (4).png";
import { nanumPenScript, doldam, anton } from "./layout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Next.js Page",
  description: "Page by Next.js",
};

export default function HomePage() {
  return (
    <>
      <h1 className={nanumPenScript.className}>HomePage</h1>
      <h1 className={anton.className}>anton</h1>
      <h1 className={doldam.className}>혼저옵서예</h1>
      <Image
        src={
          "https://cdn.pixabay.com/photo/2023/12/06/17/34/grill-8434113_1280.jpg"
        }
        alt="이미지"
        width={400}
        height={400}
      />
    </>
  );
}

import fs from "fs";
import { PresentationMetadata } from "@/components/PresentationMetadata";

function convertDateFormat(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

const getPresentations = (): PresentationMetadata[] => {
  const filePath = "public/data/presentations.json";
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const presentations = JSON.parse(fileContents);

  // Sort presentations by date in descending order (most recent first)
  const sortedPresentations = presentations.map((pres: PresentationMetadata) => ({
    ...pres,
    formattedDate: convertDateFormat(pres.date)
  })).sort((a: any, b: any) =>
    new Date(b.formattedDate).getTime() - new Date(a.formattedDate).getTime()
  );

  return sortedPresentations;
};

export default getPresentations;

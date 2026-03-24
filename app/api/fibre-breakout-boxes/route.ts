import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CACHE_TTL, getOrSetCache } from "@/utils/cache";

export async function GET() {
  try {
    const data = await getOrSetCache("catalog:fibre-breakout-boxes:list",CACHE_TTL.CATALOG_LIST,
      async () => {
        const breakoutBoxes = await prisma.structuredBreakoutBoxes.findMany();

        return breakoutBoxes.map((box: any) => ({
          id: box.id.toString(),
          title: box.titleHead || "",
          partNumber: box.indepthPartCode || "",
          description: box.description || "",
          image: box.indepthImage || "",
          specifications: box.indepthKeyFeatures
            ? box.indepthKeyFeatures.split("\n").filter(Boolean)
            : [],
          features: box.indepthKeyFeatures
            ? box.indepthKeyFeatures.split("\n").filter(Boolean)
            : [],
          detailedDescription: box.indepthDescription || "",
          additionalImages: box.indepthImage ? [box.indepthImage] : [],
        }));
      }
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching fibre breakout boxes:", error);
    return NextResponse.json(
      { error: "Failed to fetch fibre breakout boxes" },
      { status: 500 }
    );
  }
}

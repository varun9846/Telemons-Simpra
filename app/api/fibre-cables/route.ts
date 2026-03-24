import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { CACHE_TTL, getOrSetCache } from '@/utils/cache';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const transformedData = await getOrSetCache("catalog:fibre-cables:list", CACHE_TTL.CATALOG_LIST,
      async () => {
        const cables = await prisma.structuredFibreCable.findMany();

        return cables.map((cable) => ({
          id: cable.id.toString(),
          title: cable.titleHead || "",
          partNumber: cable.indepthPartCode || "",
          description: cable.description || "",
          image: cable.indepthImage || "",
          specifications: cable.indepthKeyFeatures ? cable.indepthKeyFeatures.split("\n").filter(Boolean) : [],
          features: cable.indepthKeyFeatures ? cable.indepthKeyFeatures.split("\n").filter(Boolean) : [],
          detailedDescription: cable.indepthDescription || "",
          additionalImages: [],
        }));
      }
    );
    return NextResponse.json(transformedData);

  } catch (error) {
    console.error('Error fetching fibre cables:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fibre cables' },
      { status: 500 }
    );
  }
} 
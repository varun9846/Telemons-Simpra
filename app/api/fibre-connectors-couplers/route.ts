import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { CACHE_TTL, getOrSetCache } from "@/utils/cache";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getOrSetCache("catalog:fibre-connectors-couplers:list", CACHE_TTL.CATALOG_LIST,
      async () => {
        const connectors = await prisma.structuredFibreConnectorsCouplers.findMany({ orderBy: { createdAt: 'desc' } });
        // Transform the data to match the frontend interface
        return connectors.map(connector => ({
          id: connector.id.toString(),
          title: connector.titleHead || '',
          partNumber: connector.indepthPartCode || '',
          description: connector.description || '',
          image: connector.indepthImage || '',
          specifications: connector.indepthKeyFeatures ? connector.indepthKeyFeatures.split('\n').filter(Boolean) : [],
          features: connector.indepthKeyFeatures ? connector.indepthKeyFeatures.split('\n').filter(Boolean) : [],
          detailedDescription: connector.indepthDescription || '',
          additionalImages: connector.indepthImage ? [connector.indepthImage] : []
        }));
      }
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching fibre connectors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fibre connectors' },
      { status: 500 }
    );
  }
} 
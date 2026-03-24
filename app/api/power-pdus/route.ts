import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CACHE_TTL, getOrSetCache, deleteCacheByPattern } from "@/utils/cache";


export async function GET() {
  try {
     const powerPdus = await getOrSetCache("catalog:power-pdus:list",CACHE_TTL.CATALOG_LIST,
      async () => {
        return prisma.structuredPowerPdu.findMany({
          orderBy: { createdAt: "desc" },
        });
      }
    );


    return NextResponse.json(powerPdus);
  } catch (error) {
    console.error('Error fetching Power PDUs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Power PDUs' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const powerPdu = await prisma.structuredPowerPdu.create({
      data: body,
    });
    
    await deleteCacheByPattern("catalog:power-pdus:*");
    return NextResponse.json(powerPdu);
  } catch (error) {
    console.error('Error creating Power PDU:', error);
    return NextResponse.json(
      { error: 'Failed to create Power PDU' },
      { status: 500 }
    );
  }
} 
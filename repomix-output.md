This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: app/**/*.{ts,tsx}, components/**/*.{ts,tsx}, lib/**/*.{ts,tsx}, hooks/**/*.{ts,tsx}, types/**/*.{ts,tsx}, services/**/*.{ts,tsx}
- Files matching these patterns are excluded: **/node_modules/**, **/.next/**, **/out/**, **/public/**, **/*.log, package-lock.json, yarn.lock, pnpm-lock.yaml, **/tsconfig.tsbuildinfo, **/next-env.d.ts, .eslintrc.json, .prettierrc, postcss.config.mjs, tailwind.config.ts
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
app/api/backboxes/route.ts
app/api/connectors-products-enterprises/route.ts
app/api/copper-cables/route.ts
app/api/data-centre-racks/route.ts
app/api/enterprise-copper-cables/route.ts
app/api/fibre-attenuators/route.ts
app/api/fibre-breakout-boxes/route.ts
app/api/fibre-cables/route.ts
app/api/fibre-connectors-couplers/route.ts
app/api/fibre-duct/route.ts
app/api/fibre-patch-boxes/route.ts
app/api/fibre-patch-panel-cassettes/route.ts
app/api/fibre-patch-panels/route.ts
app/api/fibre-tools-accessories/route.ts
app/api/floor-standing-racks/route.ts
app/api/keystone-jackshutters/route.ts
app/api/liquid-cooling/route.ts
app/api/modules-faceplates/route.ts
app/api/mpo-cassettes/route.ts
app/api/mpo-chassis/route.ts
app/api/mpo-fibre-assemblies/route.ts
app/api/open-racks/route.ts
app/api/pdf-data/[category]/[id]/route.ts
app/api/power-cords-extension-leads/route.ts
app/api/power-pdus/route.ts
app/api/telephone-networking/route.ts
app/api/wall-racks/route.ts
app/auth/callback/page.tsx
app/components/products/CopperPatchPanels.tsx
app/fibre-networking/[category]/page.tsx
app/fibre-networking/page.tsx
app/layout.tsx
app/login/page.tsx
app/markets/[market]/page.tsx
app/markets/page.tsx
app/page.tsx
app/power-and-data/[category]/page.tsx
app/power-and-data/page.tsx
app/products/[category]/page.tsx
app/products/page.tsx
app/racks-and-cabinets/[category]/page.tsx
app/racks-and-cabinets/page.tsx
app/signup/page.tsx
app/test-pdf/page.tsx
app/test/page.tsx
components/auth/callback.tsx
components/auth/LoginForm.tsx
components/auth/LogoutButton.tsx
components/auth/PrivateRoute.tsx
components/auth/ProtectedRoute.tsx
components/auth/PublicRoute.tsx
components/auth/SignupForm.tsx
components/common/Footer.tsx
components/common/ImageCarousel.tsx
components/common/Loader.tsx
components/common/LoadingSpinner.tsx
components/common/Navbar.tsx
components/common/PDFDownloadButton.tsx
components/FibreNetworks/FibreAttenuatorDetail.tsx
components/FibreNetworks/FibreAttenuators.tsx
components/FibreNetworks/FibreBreakoutBoxDetail.tsx
components/FibreNetworks/FibreBreakoutBoxes.tsx
components/FibreNetworks/FibreCableDetail.tsx
components/FibreNetworks/FibreCables.tsx
components/FibreNetworks/FibreConnectorCouplerDetail.tsx
components/FibreNetworks/FibreConnectorsCouplers.tsx
components/FibreNetworks/FibrePatchBoxDetail.tsx
components/FibreNetworks/FibrePatchBoxes.tsx
components/FibreNetworks/FibrePatchPanelCassetteDetail.tsx
components/FibreNetworks/FibrePatchPanelCassettes.tsx
components/FibreNetworks/FibrePatchPanelDetail.tsx
components/FibreNetworks/FibrePatchPanels.tsx
components/FibreNetworks/FibreToolsAccessories.tsx
components/FibreNetworks/FibreToolsAccessoriesDetail.tsx
components/home/CertificatesSection.tsx
components/home/InnovationSection.tsx
components/home/MottoSection.tsx
components/home/ProductShowcase.tsx
components/home/ProductsMarketsSection.tsx
components/layout/MainLayout.tsx
components/PowerData/DataCentreRacksDetail.tsx
components/PowerData/DataCentreRacksList.tsx
components/PowerData/FibreDuctDetail.tsx
components/PowerData/FibreDuctList.tsx
components/PowerData/LiquidCoolingDetail.tsx
components/PowerData/LiquidCoolingList.tsx
components/PowerData/MpoCassetteDetail.tsx
components/PowerData/MpoCassetteList.tsx
components/PowerData/MpoChassisDetail.tsx
components/PowerData/MpoChassisList.tsx
components/PowerData/MpoFibreAssemblyDetail.tsx
components/PowerData/MpoFibreAssemblyList.tsx
components/PowerData/PowerCordDetail.tsx
components/PowerData/PowerCordList.tsx
components/PowerData/PowerPduDetail.tsx
components/PowerData/PowerPduList.tsx
components/products/BackboxDetail.tsx
components/products/Backboxes.tsx
components/products/CopperPatchPanels.tsx
components/products/EnterpriseCables.tsx
components/products/EnterpriseCopperCableDetail.tsx
components/products/EnterpriseCopperCables.tsx
components/products/KeystoneDetail.tsx
components/products/KeystoneJacks.tsx
components/products/ModuleFaceplateDetail.tsx
components/products/ModulesFaceplates.tsx
components/products/TelephoneNetworking.tsx
components/products/TelephoneNetworkingDetail.tsx
components/providers/SupabaseProvider.tsx
components/RacksCabinets/FloorStandingRackDetail.tsx
components/RacksCabinets/FloorStandingRacks.tsx
components/RacksCabinets/OpenRackDetail.tsx
components/RacksCabinets/OpenRacks.tsx
components/RacksCabinets/WallRackDetail.tsx
components/RacksCabinets/WallRacks.tsx
hooks/usePDFDownload.ts
lib/constants/fibre-networking.ts
lib/constants/power-and-data.ts
lib/imageUtils.ts
lib/prisma.ts
lib/redis.ts
lib/services/pdfGenerationService.ts
lib/supabase.ts
lib/utils/pdfDataConverter.ts
types/backbox.ts
types/data-centre-racks.ts
types/enterprise-copper-cables.ts
types/fibre-attenuator.ts
types/fibre-breakout-box.ts
types/fibre-cable.ts
types/fibre-connector-coupler.ts
types/fibre-duct.ts
types/fibre-patch-box.ts
types/fibre-patch-panel-cassette.ts
types/fibre-patch-panel.ts
types/fibre-tools-accessories.ts
types/floor-standing-rack.ts
types/keystone.ts
types/liquid-cooling.ts
types/module-faceplate.ts
types/mpo-cassettes.ts
types/mpo-chassis.ts
types/mpo-fibre-assemblies.ts
types/open-rack.ts
types/pdf-generation.ts
types/power-cords.ts
types/power-pdu.ts
types/telephone-networking.ts
types/wall-rack.ts
```

# Files

## File: lib/redis.ts
```typescript
import Redis from "ioredis";
declare global {
    var redis: Redis | undefined;
}
const redisUrl = process.env.REDIS_URL;
function createRedisClient() {
    if (!redisUrl) {
        throw new Error("REDIS_URL is not defined");
    }
    return new Redis(redisUrl, {
        maxRetriesPerRequest: 2,
        enableReadyCheck: true,
        lazyConnect: true,
    });
}
export const redis = global.redis ?? (() => {
    const client = createRedisClient();
    client.on("error", (err) => {
        console.error("Redis error:", err);
    });
    if (process.env.NODE_ENV !== "production") {
        global.redis = client;
    }
    return client;
})();
```

## File: app/api/connectors-products-enterprises/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET() {
    try {
        const connectors = await prisma.structuredConnectorsProductsEnterPrises.findMany();
        const transformedData = connectors.map((connector: any) => ({
            id: connector.id.toString(),
            title: connector.titleHead || '',
            partNumber: connector.indepthPartCode || '',
            description: connector.description || '',
            image: connector.indepthImage || '',
            // The frontend expects a rich specifications object; we don't have discrete fields
            specifications: {
                model: connector.indepthPartCode || '',
                connectorType: '',
                shielded: '',
                category: '',
                requiresTerminationTool: '',
                suitableForRoundCable: '',
                performanceLevel: '',
                cableConstruction: '',
                conductorGauge: '',
                conductorType: '',
                overallLength: '',
                flammabilityRating: '',
                availableColors: []
            },
            // Split key features into a list for display
            features: connector.indepthKeyFeatures ? connector.indepthKeyFeatures.split('\n').filter(Boolean) : [],
            detailedDescription: connector.indepthDescription || '',
            additionalImages: []
        }));
        return NextResponse.json(transformedData);
    } catch (error) {
        console.error('Error fetching connectors products enterprises:', error);
        return NextResponse.json(
            { error: 'Failed to fetch connectors products enterprises' },
            { status: 500 }
        );
    }
}
```

## File: app/api/copper-cables/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET() {
    try {
        const cables = await prisma.structuredCopperCables.findMany();
        const transformedData = cables.map((cable: any) => ({
            id: cable.id.toString(),
            title: cable.titleHead || '',
            partNumber: cable.indepthPartCode || '',
            description: cable.description || '',
            image: cable.indepthImage || '',
            // The frontend expects a rich specifications object; we don't have discrete fields
            specifications: {
                model: cable.indepthPartCode || '',
                connectorType: '',
                shielded: '',
                category: '',
                requiresTerminationTool: '',
                suitableForRoundCable: '',
                performanceLevel: '',
                cableConstruction: '',
                conductorGauge: '',
                conductorType: '',
                overallLength: '',
                flammabilityRating: '',
                availableColors: []
            },
            // Split key features into a list for display
            features: cable.indepthKeyFeatures ? cable.indepthKeyFeatures.split('\n').filter(Boolean) : [],
            detailedDescription: cable.indepthDescription || '',
            additionalImages: []
        }));
        return NextResponse.json(transformedData);
    } catch (error) {
        console.error('Error fetching copper cables:', error);
        return NextResponse.json(
            { error: 'Failed to fetch copper cables' },
            { status: 500 }
        );
    }
}
```

## File: app/api/data-centre-racks/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET() {
  try {
    const racks = await prisma.structuredDataCentreRacks.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(racks);
  } catch (error) {
    console.error('Error fetching data centre racks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data centre racks' },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const rack = await prisma.structuredDataCentreRacks.create({
      data,
    });
    return NextResponse.json(rack);
  } catch (error) {
    console.error('Error creating data centre rack:', error);
    return NextResponse.json(
      { error: 'Failed to create data centre rack' },
      { status: 500 }
    );
  }
}
```

## File: app/api/fibre-cables/route.ts
```typescript
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
```

## File: app/api/fibre-duct/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET() {
  try {
    const fibreDucts = await prisma.structuredDataFibreDuct.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(fibreDucts);
  } catch (error) {
    console.error('Error fetching Fibre Duct data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Fibre Duct data' },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const fibreDuct = await prisma.structuredDataFibreDuct.create({
      data,
    });
    return NextResponse.json(fibreDuct);
  } catch (error) {
    console.error('Error creating Fibre Duct entry:', error);
    return NextResponse.json(
      { error: 'Failed to create Fibre Duct entry' },
      { status: 500 }
    );
  }
}
```

## File: app/api/fibre-patch-boxes/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET() {
  try {
    const patchBoxes = await prisma.structuredFibrePatchBoxes.findMany();
    const transformedData = patchBoxes.map((box: any) => ({
      id: box.id.toString(),
      title: box.titleHead || '',
      partNumber: box.indepthPartCode || '',
      description: box.description || '',
      image: box.indepthImage || '',
      specifications: box.indepthKeyFeatures ? box.indepthKeyFeatures.split('\n').filter(Boolean) : [],
      features: box.indepthKeyFeatures ? box.indepthKeyFeatures.split('\n').filter(Boolean) : [],
      detailedDescription: box.indepthDescription || '',
      additionalImages: box.indepthImage ? [box.indepthImage] : []
    }));
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('Error fetching fibre patch boxes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fibre patch boxes' },
      { status: 500 }
    );
  }
}
```

## File: app/api/fibre-patch-panel-cassettes/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export async function GET() {
  try {
    const cassettes = await prisma.structuredFibreCassetes.findMany();
    const transformedData = cassettes.map((cassette) => ({
      id: cassette.id.toString(),
      title: cassette.titleHead || '',
      partNumber: cassette.indepthPartCode || '',
      description: cassette.description || '',
      image: cassette.indepthImage || '',
      specifications: cassette.indepthKeyFeatures ? cassette.indepthKeyFeatures.split('\n').filter(Boolean) : [],
      features: cassette.indepthKeyFeatures ? cassette.indepthKeyFeatures.split('\n').filter(Boolean) : [],
      detailedDescription: cassette.indepthDescription || '',
      additionalImages: []
    }));
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('Error fetching fibre patch panel cassettes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fibre patch panel cassettes' },
      { status: 500 }
    );
  }
}
```

## File: app/api/fibre-patch-panels/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { CACHE_TTL, getOrSetCache } from "@/utils/cache";
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export async function GET() {
  try {
    const data = await getOrSetCache("catalog:fibre-patch-panels:list", CACHE_TTL.CATALOG_LIST,
      async () => {
        const panels = await prisma.structuredFibrePatchPanels.findMany();
        return panels.map((panel) => ({
          id: panel.id.toString(),
          title: panel.titleHead || "",
          partNumber: panel.indepthPartCode || "",
          description: panel.description || "",
          image: panel.indepthImage || "",
          specifications: panel.indepthKeyFeatures ? panel.indepthKeyFeatures.split("\n").filter(Boolean) : [],
          features: panel.indepthKeyFeatures ? panel.indepthKeyFeatures.split("\n").filter(Boolean) : [],
          detailedDescription: panel.indepthDescription || "",
          additionalImages: [],
        }));
      }
    );
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching fibre patch panels:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fibre patch panels' },
      { status: 500 }
    );
  }
}
```

## File: app/api/fibre-tools-accessories/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET() {
  try {
    const tools = await prisma.structuredFibreToolsAccessories.findMany();
    const transformedData = tools.map((tool) => ({
      id: tool.id.toString(),
      title: tool.titleHead || '',
      partNumber: tool.indepthPartCode || '',
      description: tool.description || '',
      image: tool.indepthImage || '',
      specifications: tool.indepthKeyFeatures ? tool.indepthKeyFeatures.split('\n').filter(Boolean) : [],
      features: tool.indepthKeyFeatures ? tool.indepthKeyFeatures.split('\n').filter(Boolean) : [],
      detailedDescription: tool.indepthDescription || '',
      additionalImages: []
    }));
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('Error in fibre-tools-accessories API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## File: app/api/keystone-jackshutters/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET(){
    try{
        const jacks= await prisma.structuredKeyStoneJackShutters.findMany();
        const transformedData=jacks.map((jack)=>({
            id: jack.id.toString(),
            title: jack.titleHead || '',
            partNumber: jack.indepthPartCode || '',
            description: jack.description || '',
            image: jack.indepthImage || '',
            // The frontend expects a rich specifications object; we don't have discrete fields
            specifications: {
                model: jack.indepthPartCode || '',
                connectorType: '',
                shielded: '',
                category: '',
                requiresTerminationTool: '',
                suitableForRoundCable: '',
                performanceLevel: '',
                cableConstruction: '',
                conductorGauge: '',
                conductorType: '',
                overallLength: '',
                flammabilityRating: '',
                availableColors: []
            },
            // Split key features into a list for display
            features: jack.indepthKeyFeatures ? jack.indepthKeyFeatures.split('\n').filter(Boolean) : [],
            detailedDescription: jack.indepthDescription || '',
            additionalImages: []
        }));
        return NextResponse.json(transformedData);
    }catch(error){
        console.error('Error fetching keystone jacks and shutters:', error);
        return NextResponse.json(
            { error: 'Failed to fetch keystone jacks and shutters' },
            { status: 500 }
        );
    }
}
```

## File: app/api/liquid-cooling/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET() {
  try {
    const coolingSystems = await prisma.structuredDataLiquidCooling.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(coolingSystems);
  } catch (error) {
    console.error('Error fetching liquid cooling systems:', error);
    return NextResponse.json(
      { error: 'Failed to fetch liquid cooling systems' },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const coolingSystem = await prisma.structuredDataLiquidCooling.create({
      data,
    });
    return NextResponse.json(coolingSystem);
  } catch (error) {
    console.error('Error creating liquid cooling system:', error);
    return NextResponse.json(
      { error: 'Failed to create liquid cooling system' },
      { status: 500 }
    );
  }
}
```

## File: app/api/mpo-cassettes/route.ts
```typescript
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function GET() {
  try {
    const mpoCassettes = await prisma.structuredDataMpoCassettes.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(mpoCassettes);
  } catch (error) {
    console.error('Error fetching MPO Cassettes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch MPO Cassettes' },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const mpoCassette = await prisma.structuredDataMpoCassettes.create({
      data
    });
    return NextResponse.json(mpoCassette);
  } catch (error) {
    console.error('Error creating MPO Cassette:', error);
    return NextResponse.json(
      { error: 'Failed to create MPO Cassette' },
      { status: 500 }
    );
  }
}
```

## File: app/api/mpo-chassis/route.ts
```typescript
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function GET() {
  try {
    const mpoChassis = await prisma.structuredDataMpoChassis.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(mpoChassis);
  } catch (error) {
    console.error('Error fetching MPO Chassis:', error);
    return NextResponse.json(
      { error: 'Failed to fetch MPO Chassis data' },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const mpoChassis = await prisma.structuredDataMpoChassis.create({
      data,
    });
    return NextResponse.json(mpoChassis);
  } catch (error) {
    console.error('Error creating MPO Chassis:', error);
    return NextResponse.json(
      { error: 'Failed to create MPO Chassis' },
      { status: 500 }
    );
  }
}
```

## File: app/api/mpo-fibre-assemblies/route.ts
```typescript
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function GET() {
  try {
    const mpoFibreAssemblies = await prisma.structuredDataMpoFibreAssemblies.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(mpoFibreAssemblies);
  } catch (error) {
    console.error('Error fetching MPO Fibre Assemblies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch MPO Fibre Assemblies' },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const mpoFibreAssembly = await prisma.structuredDataMpoFibreAssemblies.create({
      data
    });
    return NextResponse.json(mpoFibreAssembly);
  } catch (error) {
    console.error('Error creating MPO Fibre Assembly:', error);
    return NextResponse.json(
      { error: 'Failed to create MPO Fibre Assembly' },
      { status: 500 }
    );
  }
}
```

## File: app/api/power-cords-extension-leads/route.ts
```typescript
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function GET() {
  try {
    const powerCords = await prisma.structuredPowerCords.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(powerCords);
  } catch (error) {
    console.error('Error fetching power cords:', error);
    return NextResponse.json(
      { error: 'Failed to fetch power cords' },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const powerCord = await prisma.structuredPowerCords.create({
      data
    });
    return NextResponse.json(powerCord);
  } catch (error) {
    console.error('Error creating power cord:', error);
    return NextResponse.json(
      { error: 'Failed to create power cord' },
      { status: 500 }
    );
  }
}
```

## File: app/api/power-pdus/route.ts
```typescript
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
```

## File: app/auth/callback/page.tsx
```typescript
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLoader } from '@/context/LoaderContext'
import { toast } from 'react-hot-toast'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { FaGoogle, FaSpinner } from 'react-icons/fa'
export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const { showLoader, hideLoader } = useLoader()
  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        showLoader()
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) throw error
        if (session) {
          toast.success('Successfully authenticated with Google')
          router.push('/test')
        } else {
          toast.error('Authentication failed')
          router.push('/login')
        }
      } catch (error: any) {
        console.error('Auth callback error:', error)
        toast.error(error.message || 'Authentication failed')
        router.push('/login')
      } finally {
        hideLoader()
      }
    }
    handleAuthCallback()
  }, [router, showLoader, hideLoader, supabase])
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-xl p-8">
        <div className="flex flex-col items-center justify-center">
          {}
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
            <FaGoogle className="text-2xl text-yellow-600" />
          </div>
          {}
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
            Authenticating
          </h2>
          <p className="text-center text-sm text-gray-600 mb-8">
            Please wait while we complete your Google sign-in...
          </p>
          {}
          <div className="w-full space-y-6">
            {}
            <div className="flex justify-center">
              <FaSpinner className="animate-spin text-4xl text-yellow-600" />
            </div>
            {}
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="h-1 rounded-full bg-yellow-600 transition-all duration-1000"
                style={{
                  width: '100%',
                  animation: 'pulse 1.5s infinite'
                }}
              />
            </div>
            {}
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-yellow-600 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-yellow-600 animate-bounce delay-100" />
              <div className="w-2 h-2 rounded-full bg-yellow-600 animate-bounce delay-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## File: app/test-pdf/page.tsx
```typescript
'use client';
import React, { useState } from 'react';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { PDFProductData } from '@/types/pdf-generation';
const sampleProducts: { [key: string]: PDFProductData } = {
  backbox: {
    id: 'test-backbox-1',
    title: 'Telemons Professional Backbox 35mm Deep',
    partNumber: 'TLM-BB-35-001',
    description: 'High-quality professional backbox designed for structured cabling installations. Features robust construction and easy installation.',
    image: '/images/Backbox-floorboxes/telemons-professional-backbox-35mm-deep.jpg',
    specifications: {
      depth: '35mm',
      material: 'Galvanized Steel',
      mounting: 'Wall Mount',
      type: 'Single Gang',
      model: 'BB-35-PRO',
      suitableForRoundCable: 'Yes'
    },
    features: [
      'Robust galvanized steel construction',
      'Easy wall mounting system',
      'Compatible with standard faceplates',
      'Suitable for round cable installations',
      'Professional grade finish',
      'Long-lasting durability'
    ],
    detailedDescription: 'This professional-grade backbox is engineered for demanding structured cabling environments. The 35mm depth provides ample space for cable management while maintaining a compact profile suitable for modern installations.'
  },
  fibreCable: {
    id: 'test-fibre-cable-1',
    title: 'Telemons OM3 Fibre Optic Patch Lead LC-LC Multimode 50/125 DX LS0H Aqua 5m',
    partNumber: 'TLM110-238F05212',
    description: 'This 5m OM3 multimode LC-LC patch lead with an aqua LS0H sheath is designed for high-speed network connectivity.',
    image: '/images/fibre-cables/om3-patch-lead.jpg',
    specifications: [
      'Connector Type: LC-LC',
      'Cable Type: OM3 Multimode',
      'Core/Cladding: 50/125µm',
      'Length: 5 meters',
      'Jacket: LS0H (Low Smoke Zero Halogen)',
      'Color: Aqua',
      'Duplex Configuration: Yes',
      'Polish: UPC (Ultra Physical Contact)'
    ],
    features: [
      'Low-loss ceramic connectors',
      'Bend-insensitive fibers',
      'Reliable performance in data centers',
      'Flexible polarity options',
      'Easy configuration',
      'High-speed data transmission capability'
    ],
    detailedDescription: 'Featuring low-loss ceramic connectors and bend-insensitive fibers, it ensures reliable performance in data centers with flexible polarity options for easy configuration.'
  },
  powerPdu: {
    id: 'test-power-pdu-1',
    title: 'Telemons 19" Rack Mount PDU 8-Way IEC C13 with C14 Input',
    partNumber: 'TLM-PDU-19-8C13',
    description: 'Professional 19-inch rack mount power distribution unit with 8 IEC C13 outlets and C14 input connection.',
    specifications: [
      'Outlets: 8x IEC C13',
      'Input: IEC C14',
      'Mounting: 19" Rack Mount',
      'Current Rating: 10A',
      'Voltage: 230V AC',
      'Frequency: 50/60Hz',
      'Material: Steel Construction',
      'Finish: Black Powder Coat'
    ],
    features: [
      'Professional 19" rack mounting',
      '8 individually switched outlets',
      'Robust steel construction',
      'LED power indicators',
      'Surge protection built-in',
      'Space-efficient design',
      'Easy installation',
      'Reliable power distribution'
    ],
    detailedDescription: 'This professional-grade PDU is designed for data center and server room applications, providing reliable power distribution with individual outlet control and monitoring capabilities.'
  }
};
export default function PDFTestPage() {
  const [selectedProduct, setSelectedProduct] = useState<string>('backbox');
  const [showProductData, setShowProductData] = useState<boolean>(false);
  const currentProduct = sampleProducts[selectedProduct];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-telemons-blue-primary mb-4">
            PDF Generation Test Suite
          </h1>
          <p className="text-xl text-gray-600">
            Test PDF download functionality across different product categories
          </p>
        </div>
        {}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-telemons-blue-100">
          <h2 className="text-2xl font-bold text-telemons-blue-primary mb-6">
            Select Product Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {Object.entries(sampleProducts).map(([key, product]) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  selectedProduct === key
                    ? 'border-telemons-blue-primary bg-telemons-blue-50 text-telemons-blue-primary'
                    : 'border-gray-200 hover:border-telemons-blue-200 hover:bg-gray-50'
                }`}
              >
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.partNumber}</p>
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowProductData(!showProductData)}
              className="px-4 py-2 bg-telemons-blue-100 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-200 transition-colors duration-300"
            >
              {showProductData ? 'Hide' : 'Show'} Product Data
            </button>
          </div>
        </div>
        {}
        {showProductData && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-telemons-blue-100">
            <h3 className="text-xl font-bold text-telemons-blue-primary mb-4">
              Product Data Structure
            </h3>
            <pre className="bg-gray-100 p-4 rounded-xl overflow-auto text-sm">
              {JSON.stringify(currentProduct, null, 2)}
            </pre>
          </div>
        )}
        {}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
          <h2 className="text-2xl font-bold text-telemons-blue-primary mb-6">
            PDF Generation Test
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {}
            <div className="space-y-6">
              <div className="border border-telemons-blue-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-telemons-blue-primary mb-4">
                  Selected Product
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Title:</h4>
                    <p className="text-gray-600">{currentProduct.title}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Part Number:</h4>
                    <p className="text-gray-600">{currentProduct.partNumber}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Description:</h4>
                    <p className="text-gray-600">{currentProduct.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {currentProduct.features?.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                      {currentProduct.features && currentProduct.features.length > 3 && (
                        <li className="text-gray-400">... and {currentProduct.features.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-6">
              <div className="border border-telemons-orange-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-telemons-orange-primary mb-4">
                  PDF Generation Options
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Standard PDF</h4>
                    <PDFDownloadButton
                      product={currentProduct}
                      variant="secondary"
                      className="w-full"
                      showError={true}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Minimal PDF (No Images)</h4>
                    <PDFDownloadButton
                      product={currentProduct}
                      variant="secondary"
                      className="w-full"
                      options={{
                        includeImages: false,
                        includeSpecifications: true,
                        includeFeatures: true
                      }}
                      showError={true}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Features Only</h4>
                    <PDFDownloadButton
                      product={currentProduct}
                      variant="secondary"
                      className="w-full"
                      options={{
                        includeImages: false,
                        includeSpecifications: false,
                        includeFeatures: true
                      }}
                      showError={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="mt-8 p-6 bg-telemons-blue-50 rounded-2xl border border-telemons-blue-200">
            <h3 className="text-lg font-bold text-telemons-blue-primary mb-3">
              Test Instructions
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>• Select different product types to test various data structures</p>
              <p>• Try different PDF generation options to see how they affect the output</p>
              <p>• Check that PDFs include proper branding, formatting, and product information</p>
              <p>• Verify that error handling works correctly for invalid data</p>
              <p>• Test on different devices and browsers for compatibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: components/auth/callback.tsx
```typescript

```

## File: components/auth/PrivateRoute.tsx
```typescript
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useLoader } from '@/context/LoaderContext'
export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const { showLoader, hideLoader } = useLoader()
  useEffect(() => {
    if (loading) {
      showLoader()
    } else {
      hideLoader()
      if (!user) {
        router.push('/login')
      }
    }
  }, [user, loading, router, showLoader, hideLoader])
  if (loading) {
    return null
  }
  return user ? <>{children}</> : null
}
```

## File: components/auth/PublicRoute.tsx
```typescript
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useLoader } from '@/context/LoaderContext'
export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const { showLoader, hideLoader } = useLoader()
  useEffect(() => {
    if (loading) {
      showLoader()
    } else {
      hideLoader()
      if (user) {
        router.push('/test')
      }
    }
  }, [user, loading, router, showLoader, hideLoader])
  if (loading || user) {
    return null
  }
  return <>{children}</>
}
```

## File: components/common/LoadingSpinner.tsx
```typescript
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );
}
```

## File: components/home/CertificatesSection.tsx
```typescript
import React from 'react';
import { motion } from 'framer-motion';
const certificates = [
  {
    title: 'Number One Cabling Brand',
    description: 'Leading the industry with innovative and reliable networking solutions.',
    icon: '⭐',
    color: 'from-amber-400 to-amber-500'
  },
  {
    title: 'Sustainable Choice',
    description: '100% Plastic Free Packaging, FSC Certification, EcoVadis Verified and more.',
    icon: '♻️',
    color: 'from-green-400 to-green-500'
  },
  {
    title: '25-Year Warranty',
    description: 'Comprehensive warranty on installations completed by an Excel Partner.',
    icon: '✅',
    color: 'from-blue-400 to-blue-500'
  },
  {
    title: 'CPR-Compliant',
    description: 'Fully CPR-compliant products for safe and secure installations.',
    icon: '🛡️',
    color: 'from-purple-400 to-purple-500'
  },
  {
    title: 'Specialist Support',
    description: 'Expert support tailored to your project needs, from start to finish.',
    icon: '🧑‍🔧',
    color: 'from-red-400 to-red-500'
  }
];
const CertificatesSection: React.FC = () => (
  <section className="bg-gradient-to-br from-gray-900 to-blue-300 py-24 relative overflow-hidden">
    {}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFFFFF\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }} />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Why Choose Telemons?
          </h2>
          <p className="text-xl text-gray-300">
            Trusted. Compliant. Supported.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative bg-gray-800 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
              {}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              {}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                {cert.icon}
              </div>
              {}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
              {}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
      {}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center space-x-2 text-white bg-gray-800 rounded-full px-6 py-3 hover:bg-gray-700 transition-colors">
          <span className="text-sm font-medium">Discover More Features</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </div>
  </section>
);
export default CertificatesSection;
```

## File: components/home/InnovationSection.tsx
```typescript
import React from 'react';
import { motion } from 'framer-motion';
const InnovationSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 py-24 overflow-hidden">
      {}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Innovating the Future of Network Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Delivering tomorrow's connectivity solutions today with cutting-edge technology and sustainable practices
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Advanced Infrastructure",
              description: "State-of-the-art cabling solutions designed for next-generation network demands",
              icon: "🌐"
            },
            {
              title: "Sustainable Innovation",
              description: "Eco-friendly products and practices that protect our planet while delivering superior performance",
              icon: "🌱"
            },
            {
              title: "Future-Ready Solutions",
              description: "Scalable infrastructure that grows with your business needs",
              icon: "🚀"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InnovationSection;
```

## File: components/home/MottoSection.tsx
```typescript
import React from 'react';
import { motion } from 'framer-motion';
const MottoSection: React.FC = () => (
  <section className="relative py-24 overflow-hidden">
    {}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-200">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5563' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Empowering Connectivity,
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Enabling Innovation
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-2xl text-gray-700 font-medium leading-relaxed">
            Telemons Cables is dedicated to delivering world-class networking, data cabling, infrastructure, and telecommunication solutions for the digital age.
          </p>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to connect people and businesses with reliable, high-performance cabling systems that drive progress and innovation. From enterprise data centers to smart homes, our products are engineered for excellence, sustainability, and future-ready performance—ensuring your network is always a step ahead.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center gap-6"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Learn More
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);
export default MottoSection;
```

## File: components/home/ProductsMarketsSection.tsx
```typescript
import React from 'react';
import { motion } from 'framer-motion';
const productCategories = [
  {
    title: 'Copper Solutions',
    description: 'High-performance copper cabling for enterprise and data center networks.',
    icon: '🔌',
    color: 'from-amber-500 to-amber-600'
  },
  {
    title: 'Fibre Solutions',
    description: 'Cutting-edge fiber optic solutions for ultra-fast connectivity.',
    icon: '💡',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Rack Solutions',
    description: 'Robust racks and cabinets for secure, scalable infrastructure.',
    icon: '🏗️',
    color: 'from-gray-700 to-gray-800'
  },
  {
    title: 'FTTx Solutions',
    description: 'Future-ready FTTx products for next-generation broadband.',
    icon: '🌐',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Power Solutions',
    description: 'Reliable power distribution and management for all environments.',
    icon: '⚡',
    color: 'from-red-500 to-red-600'
  },
];
const markets = [
  {
    title: 'Data Centres',
    description: 'Optimized cabling and infrastructure for mission-critical data centers.',
    icon: '💻',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Enterprise',
    description: 'Comprehensive solutions for modern business networks.',
    icon: '🏢',
    color: 'from-blue-600 to-blue-700'
  },
  {
    title: 'Education',
    description: 'Secure, scalable networks for schools and universities.',
    icon: '🎓',
    color: 'from-green-600 to-green-700'
  },
  {
    title: 'Healthcare',
    description: 'Reliable connectivity for hospitals and medical facilities.',
    icon: '🏥',
    color: 'from-red-600 to-red-700'
  },
  {
    title: 'Residential',
    description: 'Smart home cabling and networking for connected living.',
    icon: '🏠',
    color: 'from-amber-600 to-amber-700'
  },
];
const ProductsMarketsSection: React.FC = () => (
  <section className="relative bg-gray-900 py-24 overflow-hidden">
    {}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFFFFF\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }} />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Solutions & Markets
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Delivering excellence across diverse industries with our comprehensive range of networking solutions
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Product Categories</h3>
          <div className="grid gap-6">
            {productCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-gray-800 rounded-xl p-6 overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex items-start gap-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${cat.color} text-white text-2xl`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cat.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Markets We Serve</h3>
          <div className="grid gap-6">
            {markets.map((market, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-gray-800 rounded-xl p-6 overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex items-start gap-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${market.color} text-white text-2xl`}>
                    {market.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{market.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{market.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
export default ProductsMarketsSection;
```

## File: components/products/EnterpriseCables.tsx
```typescript
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
interface EnterpriseCable {
  id: string
  title: string
  partNumber: string
  description: string
  image: string
  specifications: {
    performanceLevel: string
    cableConstruction: string
    conductorGauge: string
    conductorType: string
    flammabilityRating?: string[]
    euroClassFlameRating?: string
    availableColors: string[]
    numberOfPairs?: string[]
    overallLength?: string
  }
  features: string[]
  detailedDescription: string
  additionalImages: string[]
}
interface EnterpriseCablesProps {
  cables: EnterpriseCable[]
}
const EnterpriseCables: React.FC<EnterpriseCablesProps> = ({ cables }) => {
  const [expandedCable, setExpandedCable] = useState<string | null>(null)
  const toggleExpand = (id: string) => {
    setExpandedCable(expandedCable === id ? null : id)
  }
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight text-center md:text-left">
        Enterprise Data Center Copper Cables
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cables.map((cable) => (
          <div
            key={cable.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            role="region"
            aria-labelledby={`cable-title-${cable.id}`}
          >
            {}
            <div className="relative h-56 w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src={cable.image}
                alt={cable.title}
                fill
                className="object-contain p-6 transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={cables.indexOf(cable) < 3}
                placeholder="blur"
                blurDataURL="/placeholder-image.png"
              />
            </div>
            {}
            <div className="p-6">
              <h2 id={`cable-title-${cable.id}`} className="text-2xl font-bold text-gray-900 mb-3">
                {cable.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">Part Number: {cable.partNumber}</p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">{cable.description}</p>
              {}
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Specifications</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="font-medium w-32">Performance:</span>
                    <span>{cable.specifications.performanceLevel}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium w-32">Construction:</span>
                    <span>{cable.specifications.cableConstruction}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium w-32">Conductor:</span>
                    <span>{cable.specifications.conductorGauge} {cable.specifications.conductorType}</span>
                  </li>
                  {cable.specifications.flammabilityRating && (
                    <li className="flex items-center">
                      <span className="font-medium w-32">Flammability:</span>
                      <span>{cable.specifications.flammabilityRating.join(', ')}</span>
                    </li>
                  )}
                </ul>
              </div>
              {}
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Features</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  {cable.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaChevronRight className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {}
              <button
                onClick={() => toggleExpand(cable.id)}
                className="w-full flex items-center justify-between text-blue-600 hover:text-blue-800 font-semibold py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-expanded={expandedCable === cable.id}
                aria-controls={`expanded-content-${cable.id}`}
              >
                <span>{expandedCable === cable.id ? 'Hide Details' : 'View Details'}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 text-blue-600 ${
                    expandedCable === cable.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {}
              {expandedCable === cable.id && (
                <div id={`expanded-content-${cable.id}`} className="mt-5 pt-5 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Detailed Specifications</h3>
                  <ul className="text-sm text-gray-600 space-y-2 mb-5">
                    {Object.entries(cable.specifications).map(([key, value]) => (
                      <li key={key} className="flex justify-between">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span>{Array.isArray(value) ? value.join(', ') : value}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">All Features</h3>
                  <ul className="text-sm text-gray-600 space-y-2 mb-5">
                    {cable.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaChevronRight className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 leading-relaxed">{cable.detailedDescription}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default EnterpriseCables
```

## File: components/providers/SupabaseProvider.tsx
```typescript
'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() => createClientComponentClient())
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}
```

## File: hooks/usePDFDownload.ts
```typescript
import { useState, useCallback } from 'react';
import { pdfService } from '@/lib/services/pdfGenerationService';
import { PDFProductData, PDFGenerationOptions } from '@/types/pdf-generation';
interface UsePDFDownloadReturn {
  isGenerating: boolean;
  error: string | null;
  downloadPDF: (productData: PDFProductData, options?: Partial<PDFGenerationOptions>) => Promise<void>;
  clearError: () => void;
}
export function usePDFDownload(): UsePDFDownloadReturn {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const downloadPDF = useCallback(async (
    productData: PDFProductData,
    options?: Partial<PDFGenerationOptions>
  ) => {
    try {
      setIsGenerating(true);
      setError(null);
      if (!productData.title || !productData.description) {
        throw new Error('Product title and description are required for PDF generation');
      }
      const result = await pdfService.generateProductPDF(productData, options);
      if (!result.success || !result.blob || !result.fileName) {
        throw new Error(result.error || 'Failed to generate PDF');
      }
      pdfService.downloadPDF(result.blob, result.fileName);
      console.log(`PDF downloaded successfully: ${result.fileName}`);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      console.error('PDF Download Error:', err);
    } finally {
      setIsGenerating(false);
    }
  }, []);
  const clearError = useCallback(() => {
    setError(null);
  }, []);
  return {
    isGenerating,
    error,
    downloadPDF,
    clearError
  };
}
```

## File: lib/imageUtils.ts
```typescript
export function addCacheBuster(imageUrl: string): string {
  if (!imageUrl) return imageUrl;
  if (imageUrl.startsWith('http') || imageUrl.startsWith('data:')) {
    return imageUrl;
  }
  const separator = imageUrl.includes('?') ? '&' : '?';
  return `${imageUrl}${separator}v=${Date.now()}`;
}
export function getImageSrc(
  dbImageUrl?: string | null,
  fallbackUrl?: string,
  addCacheBusting: boolean = true
): string {
  const imageUrl = dbImageUrl || fallbackUrl || '';
  return addCacheBusting ? addCacheBuster(imageUrl) : imageUrl;
}
/**
 * Formats a title to match expected image filename patterns
 * @param title - The title to format
 * @returns Formatted filename
 */
export function formatImageName(title: string): string {
  if (!title) return '';
  return title.replace(/\s+/g, '_');
}
```

## File: lib/supabase.ts
```typescript
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## File: lib/utils/pdfDataConverter.ts
```typescript
import { PDFProductData } from '@/types/pdf-generation';
export function convertToPDFData(product: any): PDFProductData {
  return {
    id: product.id?.toString() || '',
    title: product.title || product.titleHead || 'Untitled Product',
    partNumber: product.partNumber || product.indepthPartCode || undefined,
    description: product.description || 'No description available',
    image: product.image || product.indepthImage || undefined,
    specifications: product.specifications || {},
    features: product.features || [],
    detailedDescription: product.detailedDescription || product.indepthDescription || undefined,
    additionalImages: product.additionalImages || []
  };
}
export function convertDatabaseRecordToPDFData(record: any): PDFProductData {
  let features: string[] = [];
  if (record.indepthKeyFeatures) {
    if (typeof record.indepthKeyFeatures === 'string') {
      features = record.indepthKeyFeatures
        .split(/[\n,]/)
        .map((feature: string) => feature.trim())
        .filter((feature: string) => feature.length > 0);
    } else if (Array.isArray(record.indepthKeyFeatures)) {
      features = record.indepthKeyFeatures;
    }
  }
  return {
    id: record.id?.toString() || '',
    title: record.titleHead || record.title || 'Untitled Product',
    partNumber: record.indepthPartCode || record.partNumber || undefined,
    description: record.description || 'No description available',
    image: record.indepthImage || record.image || undefined,
    specifications: features.length > 0 ? features : {},
    features: features,
    detailedDescription: record.indepthDescription || record.detailedDescription || undefined,
    additionalImages: record.indepthImage ? [record.indepthImage] : []
  };
}
export function validatePDFData(data: PDFProductData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!data.title || data.title.trim().length === 0) {
    errors.push('Product title is required');
  }
  if (!data.description || data.description.trim().length === 0) {
    errors.push('Product description is required');
  }
  if (!data.id || data.id.trim().length === 0) {
    errors.push('Product ID is required');
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}
```

## File: types/backbox.ts
```typescript
export interface Backbox {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: {
    model: string;
    type: string;
    depth: string;
    material: string;
    mounting: string;
    suitableForRoundCable: string;
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/data-centre-racks.ts
```typescript
export interface DataCentreRack {
  id: number;
  createdAt: Date;
  titleHead: string | null;
  description: string | null;
  indepthTitle: string | null;
  indepthPartCode: string | null;
  indepthDescription: string | null;
  indepthKeyFeatures: string | null;
  indepthImage: string | null;
}
export interface DataCentreRackDetail extends DataCentreRack {
  specifications: {
    partCode: string;
    title: string;
    description: string;
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/fibre-attenuator.ts
```typescript
export interface FibreAttenuator {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/fibre-breakout-box.ts
```typescript
export interface FibreBreakoutBox {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/fibre-cable.ts
```typescript
export interface FibreCable {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/fibre-connector-coupler.ts
```typescript
export interface FibreConnectorCoupler {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/fibre-duct.ts
```typescript
export interface FibreDuct {
  id: number;
  createdAt: Date;
  titleHead: string | null;
  description: string | null;
  indepthTitle: string | null;
  indepthPartCode: string | null;
  indepthDescription: string | null;
  indepthKeyFeatures: string | null;
  indepthImage: string | null;
}
export interface FibreDuctDetail extends FibreDuct {
  specifications: {
    model: string;
    type: string;
    material: string;
    size: string;
    color: string;
    features: string[];
  };
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/fibre-patch-box.ts
```typescript
export interface FibrePatchBox {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/fibre-patch-panel-cassette.ts
```typescript
export interface FibrePatchPanelCassette {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/fibre-patch-panel.ts
```typescript
export interface FibrePatchPanel {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/fibre-tools-accessories.ts
```typescript
export interface FibreToolsAccessories {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/floor-standing-rack.ts
```typescript
export interface FloorStandingRack {
    id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/keystone.ts
```typescript
export interface KeystoneJack {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: {
    model: string;
    connectorType: string;
    shielded: string;
    category: string;
    requiresTerminationTool: string;
    suitableForRoundCable: string;
    performanceLevel?: string;
    cableConstruction?: string;
    conductorGauge?: string;
    conductorType?: string;
    overallLength?: string;
    flammabilityRating?: string;
    availableColors?: string[];
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/liquid-cooling.ts
```typescript
export interface LiquidCooling {
  id: number;
  createdAt: Date;
  titleHead: string | null;
  description: string | null;
  indepthTitle: string | null;
  indepthPartCode: string | null;
  indepthDescription: string | null;
  indepthKeyFeatures: string | null;
  indepthImage: string | null;
}
export interface LiquidCoolingDetail extends LiquidCooling {
  specifications: {
    partCode: string;
    title: string;
    description: string;
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/module-faceplate.ts
```typescript
export interface ModuleFaceplate {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: {
    model: string;
    connectorType: string;
    shielded: string;
    category: string;
    requiresTerminationTool: string;
    suitableForRoundCable: string;
    performanceLevel?: string;
    cableConstruction?: string;
    conductorGauge?: string;
    conductorType?: string;
    overallLength?: string;
    flammabilityRating?: string;
    availableColors?: string[];
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/mpo-cassettes.ts
```typescript
export interface MpoCassette {
  id: number;
  createdAt: Date;
  titleHead: string | null;
  description: string | null;
  indepthTitle: string | null;
  indepthPartCode: string | null;
  indepthDescription: string | null;
  indepthKeyFeatures: string | null;
  indepthImage: string | null;
}
export interface MpoCassetteDetail extends MpoCassette {
  specifications: {
    model: string;
    type: string;
    fiberCount: string;
    connectorType: string;
    features: string[];
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/mpo-chassis.ts
```typescript
export interface MpoChassis {
  id: number;
  createdAt: Date;
  titleHead: string | null;
  description: string | null;
  indepthTitle: string | null;
  indepthPartCode: string | null;
  indepthDescription: string | null;
  indepthKeyFeatures: string | null;
  indepthImage: string | null;
}
export interface MpoChassisDetail extends MpoChassis {
  specifications: {
    model: string;
    type: string;
    fiberCount: string;
    connectorType: string;
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/mpo-fibre-assemblies.ts
```typescript
export interface MpoFibreAssembly {
  id: number;
  createdAt: Date;
  titleHead: string | null;
  description: string | null;
  indepthTitle: string | null;
  indepthPartCode: string | null;
  indepthDescription: string | null;
  indepthKeyFeatures: string | null;
  indepthImage: string | null;
}
export interface MpoFibreAssemblyDetail extends MpoFibreAssembly {
  specifications: {
    model: string;
    type: string;
    fiberCount: string;
    connectorType: string;
    length: string;
    features: string[];
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/open-rack.ts
```typescript
export interface OpenRack {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/pdf-generation.ts
```typescript
export interface PDFProductData {
  id: string;
  title: string;
  partNumber?: string;
  description: string;
  image?: string;
  specifications?: any;
  features?: string[];
  detailedDescription?: string;
  additionalImages?: string[];
}
export interface PDFGenerationOptions {
  includeImages?: boolean;
  includeSpecifications?: boolean;
  includeFeatures?: boolean;
  includeBranding?: boolean;
  pageFormat?: 'A4' | 'letter';
  orientation?: 'portrait' | 'landscape';
}
export interface PDFGenerationResult {
  success: boolean;
  fileName?: string;
  error?: string;
  blob?: Blob;
}
export interface PDFBrandingInfo {
  companyName: string;
  logo?: string;
  website?: string;
  contactInfo?: string;
  address?: string;
}
export interface PDFSectionConfig {
  header: boolean;
  productInfo: boolean;
  specifications: boolean;
  features: boolean;
  images: boolean;
  footer: boolean;
}
```

## File: types/power-cords.ts
```typescript
export interface PowerCord {
  id: number;
  createdAt: Date;
  titleHead: string | null;
  description: string | null;
  indepthTitle: string | null;
  indepthPartCode: string | null;
  indepthDescription: string | null;
  indepthKeyFeatures: string | null;
  indepthImage: string | null;
}
export interface PowerCordDetail extends PowerCord {
  specifications: {
    model: string;
    type: string;
    length: string;
    rating: string;
    certification: string;
    color: string;
    features: string[];
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/power-pdu.ts
```typescript
export interface PowerPdu {
  id: number;
  createdAt: Date;
  titleHead: string | null;
  description: string | null;
  indepthTitle: string | null;
  indepthPartCode: string | null;
  indepthDescription: string | null;
  indepthKeyFeatures: string | null;
  indepthImage: string | null;
}
export interface PowerPduDetail extends PowerPdu {
  specifications?: {
    model?: string;
    powerRating?: string;
    inputVoltage?: string;
    outputVoltage?: string;
    mountingType?: string;
    features?: string[];
  };
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: types/wall-rack.ts
```typescript
export interface WallRack {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: string[];
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: app/api/enterprise-copper-cables/route.ts
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function GET(request: NextRequest) {
  try {
    const copperCables = await prisma.structuredCopperCables.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    const transformedData = copperCables.map((cable: any, index: number) => ({
      id: cable.id.toString(),
      title: cable.titleHead || `Enterprise Copper Cable ${index + 1}`,
      partNumber: cable.indepthPartCode || 'N/A',
      description: cable.description || 'High-performance enterprise copper cable',
      image: cable.indepthImage || '/images/products/enterprise-cables.jpg',
      specifications: {
        performanceLevel: 'Enterprise Grade',
        cableConstruction: 'Shielded',
        conductorGauge: '24 AWG',
        conductorType: 'Copper',
        flammabilityRating: ['CM', 'CMR', 'CMP'],
        euroClassFlameRating: 'B2ca',
        availableColors: ['Blue', 'Gray', 'Black', 'White'],
        numberOfPairs: ['4 Pair', '6 Pair', '8 Pair'],
        overallLength: '305m (1000ft)'
      },
      features: cable.indepthKeyFeatures
        ? cable.indepthKeyFeatures.split(',').map((feature: string) => feature.trim())
        : [
            'High-speed data transmission',
            'Shielded construction for EMI protection',
            'Compliant with industry standards',
            'Durable and long-lasting',
            'Easy installation and termination'
          ],
      detailedDescription: cable.indepthDescription || cable.description || 'Professional-grade enterprise copper cable designed for high-performance data center applications.',
      additionalImages: [
        '/images/products/enterprise-cables-detail-1.jpg',
        '/images/products/enterprise-cables-detail-2.jpg'
      ]
    }));
    return NextResponse.json(transformedData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('Error fetching enterprise copper cables:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch enterprise copper cables',
        message: 'An error occurred while retrieving the data. Please try again later.'
      },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.titleHead || !body.description) {
      return NextResponse.json(
        { error: 'Missing required fields: titleHead and description' },
        { status: 400 }
      );
    }
    const newCable = await prisma.structuredCopperCables.create({
      data: {
        titleHead: body.titleHead,
        description: body.description,
        indepthTitle: body.indepthTitle,
        indepthPartCode: body.indepthPartCode,
        indepthDescription: body.indepthDescription,
        indepthKeyFeatures: body.indepthKeyFeatures,
        indepthImage: body.indepthImage
      }
    });
    return NextResponse.json(newCable, { status: 201 });
  } catch (error) {
    console.error('Error creating enterprise copper cable:', error);
    return NextResponse.json(
      { error: 'Failed to create enterprise copper cable' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
```

## File: app/api/fibre-attenuators/route.ts
```typescript
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export async function GET() {
  try {
    const attenuators = await prisma.structuredFibreAttenuators.findMany({
      orderBy: {
        id: 'asc'
      }
    });
    const transformedAttenuators = attenuators.map((attenuator) => ({
      id: attenuator.id.toString(),
      title: attenuator.titleHead || '',
      partNumber: attenuator.indepthPartCode || '',
      description: attenuator.description || '',
      image: attenuator.indepthImage || '',
      specifications: attenuator.indepthKeyFeatures ? attenuator.indepthKeyFeatures.split('\n').filter(Boolean) : [],
      features: attenuator.indepthKeyFeatures ? attenuator.indepthKeyFeatures.split('\n').filter(Boolean) : [],
      detailedDescription: attenuator.indepthDescription || '',
      additionalImages: []
    }));
    return NextResponse.json(transformedAttenuators);
  } catch (error) {
    console.error('Error fetching fibre attenuators:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fibre attenuators' },
      { status: 500 }
    );
  }
}
```

## File: app/api/fibre-breakout-boxes/route.ts
```typescript
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
```

## File: app/api/fibre-connectors-couplers/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { CACHE_TTL, getOrSetCache } from "@/utils/cache";
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const data = await getOrSetCache("catalog:fibre-connectors-couplers:list", CACHE_TTL.CATALOG_LIST,
      async () => {
        const connectors = await prisma.structuredFibreConnectorsCouplers.findMany({ orderBy: { createdAt: 'desc' } });
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
```

## File: app/api/floor-standing-racks/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export async function GET() {
  try {
    const racks = await prisma.structuredFloorStandingRacks.findMany();
    const transformedData = racks.map((rack) => {
      return {
        id: rack.id.toString(),
        title: rack.titleHead || '',
        partNumber: rack.indepthPartCode || '',
        description: rack.description || '',
        image: rack.indepthImage || '',
        specifications: rack.indepthKeyFeatures ? rack.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        features: rack.indepthKeyFeatures ? rack.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        detailedDescription: rack.indepthDescription || '',
        additionalImages:''
      }
    });
    return NextResponse.json(transformedData, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error fetching floor standing racks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch floor standing racks' },
      { status: 500 }
    );
  }
}
```

## File: app/api/open-racks/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export async function GET() {
  try {
    const racks = await prisma.structuredOpenRacks.findMany();
    const transformedData = racks.map((rack) => {
      return {
        id: rack.id.toString(),
        title: rack.titleHead || '',
        partNumber: rack.indepthPartCode || '',
        description: rack.description || '',
        image: rack.indepthImage || '',
        specifications: rack.indepthKeyFeatures ? rack.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        features: rack.indepthKeyFeatures ? rack.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        detailedDescription: rack.indepthDescription || '',
        additionalImages: ''
      }
    });
    return NextResponse.json(transformedData, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error fetching open racks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch open racks' },
      { status: 500 }
    );
  }
}
```

## File: app/api/pdf-data/[category]/[id]/route.ts
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { convertDatabaseRecordToPDFData } from '@/lib/utils/pdfDataConverter';
export async function GET(
  request: NextRequest,
  { params }: { params: { category: string; id: string } }
) {
  try {
    const { category, id } = params;
    if (!category || !id) {
      return NextResponse.json(
        { error: 'Category and ID are required' },
        { status: 400 }
      );
    }
    const categoryModelMap: { [key: string]: string } = {
      'backboxes': 'structuredBackboxes',
      'modules-faceplates': 'structuredModules',
      'telephone-networking': 'structuredTelephonenetworking',
      'floor-standing-racks': 'structuredFloorStandingRacks',
      'wall-racks': 'structuredWallRacks',
      'open-racks': 'structuredOpenRacks',
      'enterprise-copper-cables': 'structuredCopperCables',
      'fibre-cables': 'structuredFibreCable',
      'fibre-patch-panels': 'structuredFibrePatchPanels',
      'fibre-patch-panel-cassettes': 'structuredFibreCassetes',
      'fibre-patch-boxes': 'structuredFibrePatchBoxes',
      'fibre-breakout-boxes': 'structuredBreakoutBoxes',
      'fibre-connectors-couplers': 'structuredFibreConnectorsCouplers',
      'fibre-attenuators': 'structuredFibreAttenuators',
      'fibre-tools-accessories': 'structuredFibreToolsAccessories',
      'power-pdus': 'structuredPowerPdu',
      'power-cords-extension-leads': 'structuredPowerCords',
      'mpo-fibre-assemblies': 'structuredDataMpoFibreAssemblies',
      'mpo-cassettes': 'structuredDataMpoCassettes',
      'mpo-chassis': 'structuredDataMpoChassis',
      'fibre-duct': 'structuredDataFibreDuct',
      'data-centre-racks': 'structuredDataCentreRacks',
      'liquid-cooling': 'structuredDataLiquidCooling'
    };
    const modelName = categoryModelMap[category];
    if (!modelName) {
      return NextResponse.json(
        { error: `Unsupported category: ${category}` },
        { status: 400 }
      );
    }
    const model = (prisma as any)[modelName];
    if (!model) {
      return NextResponse.json(
        { error: `Model not found for category: ${category}` },
        { status: 500 }
      );
    }
    const product = await model.findUnique({
      where: { id: parseInt(id) }
    });
    if (!product) {
      return NextResponse.json(
        { error: `Product not found with ID: ${id}` },
        { status: 404 }
      );
    }
    const pdfData = convertDatabaseRecordToPDFData(product);
    return NextResponse.json({
      success: true,
      data: pdfData,
      category,
      id
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      }
    });
  } catch (error) {
    console.error('PDF Data API Error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
```

## File: app/api/wall-racks/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export async function GET() {
  try {
    const racks = await prisma.structuredWallRacks.findMany();
    const transformedData = racks.map((rack) => {
      return {
        id: rack.id.toString(),
        title: rack.titleHead || '',
        partNumber: rack.indepthPartCode || '',
        description: rack.description || '',
        image: rack.indepthImage || '',
        specifications: rack.indepthKeyFeatures ? rack.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        features: rack.indepthKeyFeatures ? rack.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        detailedDescription: rack.indepthDescription || '',
        additionalImages: ''
      }
    });
    return NextResponse.json(transformedData, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error fetching wall racks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch wall racks' },
      { status: 500 }
    );
  }
}
```

## File: app/components/products/CopperPatchPanels.tsx
```typescript
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
interface Frame {
  name: string;
  partCode: string;
  outlets?: number;
  ports?: number;
  category: string;
  rackUnits: string;
  colour: string;
  mounting: string;
  shielded: boolean;
  height?: string;
  connector?: string;
  connectionType?: string;
  description: string;
}
interface CopperPatchPanelsProps {
  frames: Frame[];
}
export const CopperPatchPanels: React.FC<CopperPatchPanelsProps> = ({ frames }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {frames.map((frame, idx) => (
        <div
          key={frame.partCode}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{frame.name}</h3>
            <p className="text-gray-600 mb-2 text-sm">{frame.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part Code: {frame.partCode}</span>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">{frame.rackUnits} Rack Unit</span>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">{frame.colour}</span>
              {
}
            </div>
            <button
              onClick={() => handleToggle(idx)}
              className="mt-auto flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Details {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  {frame.outlets !== undefined && <li><b>Outlets:</b> {frame.outlets}</li>}
                  {frame.ports !== undefined && <li><b>Ports:</b> {frame.ports}</li>}
                  {frame.connector && <li><b>Connector:</b> {frame.connector}</li>}
                  {frame.connectionType && <li><b>Connection Type:</b> {frame.connectionType}</li>}
                  <li><b>Category:</b> {frame.category}</li>
                  <li><b>Rack Units:</b> {frame.rackUnits}</li>
                  <li><b>Colour:</b> {frame.colour}</li>
                  <li><b>Mounting:</b> {frame.mounting}</li>
                  {frame.height && <li><b>Height:</b> {frame.height}</li>}
                  {}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
```

## File: app/login/page.tsx
```typescript
'use client'
import { LoginForm } from '@/components/auth/LoginForm'
import { PublicRoute } from '@/components/auth/PublicRoute'
export default function LoginPage() {
  return (
    <PublicRoute>
      <LoginForm />
    </PublicRoute>
  )
}
```

## File: app/markets/page.tsx
```typescript
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import axios from 'axios';
interface Market {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  solutions: string[];
  detailedDescription: string;
  specifications: { [key: string]: string };
  additionalImages: string[];
}
export default function MarketsPage() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await axios.get('/data/markets.json');
        setMarkets(response.data.markets);
      } catch (error) {
        console.error('Error fetching markets:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMarkets();
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 font-inter flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading markets...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      {}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Industry <span className="text-blue-300">Solutions</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our specialized network infrastructure solutions for various industries.
          </p>
        </div>
      </section>
      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market) => (
            <Link
              key={market.id}
              href={`/markets/${market.id}`}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={market.image}
                    alt={market.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-[-8px] transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{market.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2 opacity-90">{market.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {market.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transform transition-all duration-300 hover:bg-blue-100 hover:scale-105"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{market.solutions.length} Solutions</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{market.features.length} Features</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
```

## File: app/power-and-data/page.tsx
```typescript
import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
const heroImage = '/images/pdu.jpg';
const rackImage = '/images/racks.jpg';
const cableImage = '/images/power-data/Part Code_ 202-026.jpg';
const powerSolutions = [
  {
    title: 'Specialized Power Distribution Units (PDUs)',
    description:
      'Excel Networking offers a variety of PDUs, including horizontal and vertical models for 19-inch racks, constructed from durable aluminum with features like fully shrouded switches and LED power indicators. Input options include 16A, 32A, and 63A, with multiple socket types (BS1363, IEC C13/C19, Schuko).',
    image: heroImage,
    badge: 'Premium',
  },
  {
    title: 'Complementary Power Products',
    description:
      'Power cords and extension leads ensure secure and adaptable power connectivity, supporting the demanding needs of modern IT environments.',
    image: cableImage,
    badge: 'Essential',
  },
  {
    title: 'Sustainability & Support',
    description:
      'Products are designed to reduce environmental impact, supported by certifications like CIBSE TM65 for embodied carbon assessment. Excel provides pre-sales consultation, customized solutions, and a 25-year warranty for certified installations.',
    image: '/images/Tool.jpg',
    badge: '25-Year Warranty',
  },
];
const dataCenterCatalog = [
  {
    title: 'End-to-End Infrastructure Solutions',
    description:
      'Excel delivers scalable, high-speed, and secure connectivity through copper and fiber cabling systems, containment solutions, racks, and intelligent PDUs.',
    image: cableImage,
    icon: '🏗️',
  },
  {
    title: 'Advanced Data Center Products',
    description:
      'Pre-terminated mini-breakout cables (3.8mm diameter, MTP/MPO for 40G/100G Ethernet), singlemode fiber for high data rates and long distances, and the Environ rack series (SR, CL, OR) for durability and flexibility.',
    image: rackImage,
    icon: '⚡',
  },
  {
    title: 'Intelligent PDUs & Environmental Focus',
    description:
      'Intelligent PDUs offer real-time monitoring (temperature, humidity). Sustainability is emphasized with EPDs and plastic-free packaging. Excel provides global support, on-site training, and proof-of-concept services.',
    image: heroImage,
    icon: '🌱',
  },
];
export default function PowerAndDataPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      {}
      <div className="relative overflow-hidden">
        {}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/20 rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-lg animate-pulse delay-300"></div>
        </div>
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Power & Data Solutions"
            fill
            className="object-cover opacity-15 mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Industry Leading Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Power & Data Center
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed mb-10">
              Delivering cutting-edge, sustainable, and scalable solutions for data center power and connectivity needs, catering to a global audience of IT professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Solutions
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
        {}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-slate-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Power Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Enterprise-grade power distribution solutions designed for mission-critical environments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {powerSolutions.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold rounded-full shadow-lg">
                  {item.badge}
                </span>
              </div>
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-700 p-4"
                />
                {}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                  {item.description}
                </p>
                <button className="self-start px-6 py-2 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 border border-blue-200 hover:border-blue-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Data Center Catalog
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Comprehensive infrastructure solutions for next-generation data centers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataCenterCatalog.map((item, index) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {}
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-700 p-4"
                  />
                  {}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="px-6 py-2 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-300 border border-indigo-200 hover:border-indigo-300">
                      Explore →
                    </button>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-indigo-200 rounded-full group-hover:bg-indigo-400 transition-colors duration-300"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="relative py-20 overflow-hidden">
        {}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 lg:p-16 border border-white/20">
            {}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                🌍 Global Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                  Sustainability & Global Commitment
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>
            {}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Excel Networking is committed to reducing environmental impact through sustainable product design, third-party certifications, and plastic-free packaging. With a global presence in over 70 countries and a significant share of the UK copper cabling market, Excel leads in innovative, reliable, and environmentally responsible infrastructure.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Specialist support includes on-site training, proof-of-concept services, and a 25-year warranty for certified installations, ensuring long-term operational efficiency and expert guidance for data center professionals.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm font-medium">70+ Countries</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm font-medium">25-Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-sm font-medium">CIBSE TM65 Certified</span>
                  </div>
                </div>
              </div>
              {}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                  <div className="text-3xl mb-2">🌱</div>
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Plastic-Free Packaging</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">25</div>
                  <div className="text-sm text-gray-600">Year Warranty</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border border-indigo-200">
                  <div className="text-3xl mb-2">🌍</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">70+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-100 rounded-2xl border border-purple-200">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
```

## File: app/racks-and-cabinets/[category]/page.tsx
```typescript
'use client'
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import EnterpriseCables from '@/components/products/EnterpriseCables';
import CopperPatchPanels from '@/components/products/CopperPatchPanels';
import KeystoneJacks from '@/components/products/KeystoneJacks';
import ModulesFaceplates from '@/components/products/ModulesFaceplates';
import { ModuleFaceplate } from '@/types/module-faceplate';
import axios from 'axios';
import Backboxes from '@/components/products/Backboxes';
import { Backbox } from '@/types/backbox';
import TelephoneNetworking from '@/components/products/TelephoneNetworking';
import type { TelephoneNetworking as TelephoneNetworkingType } from '@/types/telephone-networking';
import FloorStandingRacks from '@/components/RacksCabinets/FloorStandingRacks';
import WallRacks from '@/components/RacksCabinets/WallRacks';
import OpenRacks from '@/components/RacksCabinets/OpenRacks';
import { FloorStandingRack } from '@/types/floor-standing-rack';
import { WallRack } from '@/types/wall-rack';
import { OpenRack } from '@/types/open-rack';
interface ProductCategory {
    title: string;
    description: string;
    iconType: string;
    iconColor: string;
    features: string[];
    image: string;
    detailedDescription: string;
    specifications: { [key: string]: string };
    additionalImages: string[];
    frames?: {
        name: string;
        partCode: string;
        outlets?: number;
        ports?: number;
        category: string;
        rackUnits: string;
        colour: string;
        mounting: string;
        shielded: boolean;
        height?: string;
        connector?: string;
        connectionType?: string;
        description: string;
    }[];
}
interface EnterpriseCable {
    id: string;
    title: string;
    partNumber: string;
    description: string;
    image: string;
    specifications: {
        performanceLevel: string;
        cableConstruction: string;
        conductorGauge: string;
        conductorType: string;
        flammabilityRating?: string[];
        euroClassFlameRating?: string;
        availableColors: string[];
        numberOfPairs?: string[];
        overallLength?: string;
    };
    features: string[];
    detailedDescription: string;
    additionalImages: string[];
}
interface DefaultCategory {
    title: string;
    description: string;
    image: string;
    detailedDescription: string;
    features: string[];
    specifications: { [key: string]: string };
    additionalImages: string[];
}
interface KeystoneJack {
    id: string;
    title: string;
    partNumber: string;
    description: string;
    image: string;
    specifications: {
        model: string;
        connectorType: string;
        shielded: string;
        category: string;
        requiresTerminationTool: string;
        suitableForRoundCable: string;
    };
    features: string[];
    detailedDescription: string;
}
export default function CategoryPage() {
    const params = useParams();
    const router = useRouter();
    const category = params.category as string;
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState<ProductCategory | null>(null);
    const [enterpriseCables, setEnterpriseCables] = useState<EnterpriseCable[]>([]);
    const [defaultCategories, setDefaultCategories] = useState<DefaultCategory[]>([]);
    const [selectedDefaultCategory, setSelectedDefaultCategory] = useState<DefaultCategory | null>(null);
    const [showSelectedCategory, setShowSelectedCategory] = useState(false);
    const [floorStandingRacks, setFloorStandingRacks] = useState<FloorStandingRack[]>([]);
    const [wallRacks, setWallRacks] = useState<WallRack[]>([]);
    const [openRacks, setOpenRacks] = useState<OpenRack[]>([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                if (category === 'data-center-copper-cable') {
                    const response = await axios.get('/data/enterpriseCables.json');
                    setEnterpriseCables(response.data);
                } else if (category === 'floor-standing') {
                    const response = await axios.get('/api/floor-standing-racks');
                    setFloorStandingRacks(response.data);
                } else if (category === 'wall-frames') {
                    const response = await axios.get('/api/wall-racks');
                    setWallRacks(response.data);
                } else if (category === 'open-racks') {
                    const response = await axios.get('/api/open-racks');
                    setOpenRacks(response.data);
                } else {
                    const response = await axios.get('/data/productCategories.json');
                    const products = response.data;
                    const matchingProduct = products.find(
                        (p: ProductCategory) => p.title.toLowerCase().replace(/\s+/g, '-') === category
                    );
                    if (!matchingProduct) {
                        router.push('/products');
                        return;
                    }
                    setProductData(matchingProduct);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                router.push('/products');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [category, router]);
    const handleBack = () => {
        router.push('/');
        setShowSelectedCategory(false);
    };
    const handleCategoryBack = () => {
        router.push('/products/products-enterprises');
        setShowSelectedCategory(false);
    };
    const handleCategoryClick = (category: DefaultCategory) => {
        setSelectedDefaultCategory(category);
        setShowSelectedCategory(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const renderDefaultCategoriesList = () => (
        <div className="min-h-screen bg-gray-50 font-inter">
            <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Connectors, Products & Enterprises
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Discover high-performance products designed for modern infrastructure.
                    </p>
                </div>
            </section>
            <>
                {}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {defaultCategories?.map((category: any, idx: number) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col"
                            >
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src={category?.image}
                                        alt={category?.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-lg md:text-xl font-bold text-white">{category?.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <p className="text-gray-600 mb-4 text-base leading-relaxed line-clamp-2 flex-1">{category.description}</p>
                                    <button
                                        onClick={() => handleCategoryClick(category)}
                                        className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition-colors font-medium mt-auto"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </div>
    );
    const renderDefaultCategoryDetail = () => {
        if (selectedDefaultCategory) {
            return (
                <>
                    <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Connectors, Products & Enterprises
                            </h1>
                            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                                Discover high-performance products designed for modern infrastructure.
                            </p>
                        </div>
                    </section>
                    <div className="max-width-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <button
                            onClick={handleCategoryBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products & Enterprises</span>
                        </button>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex flex-col md:flex-row md:space-x-8">
                                <div className="md:w-1/2 relative aspect-[4/3] mb-6 md:mb-0">
                                    <Image
                                        src={selectedDefaultCategory.image}
                                        alt={selectedDefaultCategory.title}
                                        fill
                                        className="object-cover rounded-lg"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedDefaultCategory.title}</h1>
                                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedDefaultCategory.detailedDescription}</p>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                                    <ul className="space-y-2 mb-6">
                                        {selectedDefaultCategory?.features?.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start text-gray-700">
                                                <svg
                                                    className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Specifications</h3>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {selectedDefaultCategory?.specifications &&
                                                Object.entries(selectedDefaultCategory?.specifications).map(([key, value]: [string, unknown], idx: number) => (
                                                    <div key={idx} className="border-b border-gray-200 pb-3">
                                                        <h4 className="font-medium text-gray-900">{key}</h4>
                                                        <p className="text-gray-600 mt-1">{String(value)}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {}
                            {selectedDefaultCategory?.additionalImages && selectedDefaultCategory?.additionalImages?.length > 0 && (
                                <div className="mt-10">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {selectedDefaultCategory?.additionalImages?.map((img: string, idx: number) => (
                                            <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                                                <Image
                                                    src={img}
                                                    alt={`${selectedDefaultCategory?.title} - Image ${idx + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )
        }
    }
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 font-inter flex items-center justify-center">
                <Navbar />
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading product details...</p>
                </div>
            </div>
        );
    }
    if (category === 'products-enterprises') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                {showSelectedCategory ? renderDefaultCategoryDetail() : renderDefaultCategoriesList()}
                <Footer />
            </div>
        );
    }
    if (category === 'floor-standing') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Floor Standing Racks
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Bulk pack of floor standing racks with tool-less termination and enhanced performance.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <FloorStandingRacks racks={floorStandingRacks} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'wall-frames') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Wall Frames
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Professional wall frames for efficient space utilization.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Racks & Cabinets</span>
                        </button>
                        <WallRacks racks={wallRacks} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'open-racks') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Open Racks
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Open racks for flexible and adaptable storage solutions.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Racks & Cabinets</span>
                        </button>
                        <OpenRacks racks={openRacks} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (!productData) {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <div className="pt-20 text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
                    <p className="mt-4 text-gray-600">The requested product category could not be found.</p>
                    <button
                        onClick={handleBack}
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Return to Products
                    </button>
                </div>
                <Footer />
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            <Navbar />
            <div className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {}
                    <button
                        onClick={() => router.push('/racks-and-cabinets')}
                        className="group flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-all duration-300 mb-8"
                    >
                        <div className="p-2.5 rounded-xl bg-gray-100/80 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                            <FaArrowLeft className="text-sm" />
                        </div>
                        <span className="font-semibold text-sm">Back to Racks & Cabinets</span>
                    </button>
                    {}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex flex-col md:flex-row md:space-x-8">
                            <div className="md:w-1/2 relative aspect-[4/3] mb-6 md:mb-0">
                                <Image
                                    src={productData?.image}
                                    alt={productData?.title}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">{productData?.title}</h1>
                                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{productData?.detailedDescription}</p>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                                <ul className="space-y-2 mb-6">
                                    {productData?.features?.map((feature: string, idx: number) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                            <svg
                                                className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Specifications</h3>
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {Object?.entries(productData?.specifications || {})?.map(([key, value], idx) => (
                                            <div key={idx} className="border-b border-gray-200 pb-3">
                                                <h4 className="font-medium text-gray-900">{key}</h4>
                                                <p className="text-gray-600 mt-1">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {}
                        {productData?.additionalImages && productData?.additionalImages?.length > 0 && (
                            <div className="mt-10">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {productData?.additionalImages?.map((img, idx) => (
                                        <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                                            <Image
                                                src={img}
                                                alt={`${productData?.title} - Image ${idx + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
```

## File: app/racks-and-cabinets/page.tsx
```typescript
'use client'
import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
const heroImage = '/images/power-data/Environ OR 52U 2-Post Open Rack 75mm Deep Profile to Profile.jpg';
const rackImage = '/images/power-data/546-42610-VDBN-BK.jpg';
const cableImage = '/images/power-data/460-100-IRS45.jpg';
const rackCategories = [
  {
    title: 'Equipment & Communications Racks (ER & CR Series)',
    description: 'Designed for everyday deployment across data, security, AV, and telecom sectors. They support up to 600 kg, offer modular customization, and come in assembled or flat-packed forms. Adjustable 19″ profiles, cable entry openings, vented roofs, lockable doors, and wheels or jacking feet enhance usability.',
    image: heroImage,
    badge: '25-Year Warranty',
  },
  {
    title: 'Server Racks (SR Series)',
    description: 'Heavy-duty racks that handle up to 1 500 kg, featuring mesh doors for improved cooling, split side panels, and multiple configurations. Accessories include RFID/Biometric locking systems. These are ideal for dense server setups and data centres.',
    image: rackImage,
    badge: 'Premium',
  },
  {
    title: 'Co‑Location Racks (CL Series)',
    description: 'Built from the ER chassis, these racks are optimized for shared-hosting facilities, offering 2 or 4 compartment layouts, secure locking, brush strip cable entries, removable sides, and simultaneous castor/jackfoot options.',
    image: cableImage,
    badge: 'Enterprise',
  },
];
const additionalRacks = [
  {
    title: 'Open-frame Racks (OR Series)',
    description: 'Ideal for high-density patching or compact server mounting, OR racks are durable aluminium frames with heavy-duty supports, bearing up to 1 500 kg. They include lockable doors and versatile cable management.',
    image: heroImage,
    icon: '🏗️',
  },
  {
    title: 'Wall Racks (WR Series)',
    description: 'Compact and tidy, designed for small-scale installations (LAN, AV, security). They support up to 63 kg, in various depths (390/500/600 mm), glass doors, adjustable mounting rails, and lockable panels.',
    image: '/images/power-data/Environ OR Conversion Kit to 4-Post 500mm to 800mm.jpg',
    icon: '⚡',
  },
  {
    title: 'Data Centre Racks (DCR Series)',
    description: 'Enhanced Environ racks with up to 1 500 kg capacity. Features high-ventilation mesh doors (80% airflow), airflow baffles, roof brush strip entry, side cable routing, and finger cable organisers.',
    image: cableImage,
    icon: '🌱',
  },
];
export default function RacksAndCabinetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      <Navbar />
      {}
      <div className="relative overflow-hidden">
        {}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/20 rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-lg animate-pulse delay-300"></div>
        </div>
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Racks & Cabinets Solutions"
            fill
            className="object-cover opacity-15 mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Industry Leading Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Racks & Cabinets
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed mb-10">
              Discover our comprehensive range of high-quality racks and cabinets designed for optimal organization, durability, and performance in any environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Solutions
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
        {}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-slate-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Rack Categories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Enterprise-grade rack solutions designed for mission-critical environments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rackCategories.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold rounded-full shadow-lg">
                  {item.badge}
                </span>
              </div>
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-700 p-4"
                />
                {}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                  {item.description}
                </p>
                <button className="self-start px-6 py-2 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 border border-blue-200 hover:border-blue-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Additional Rack Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Specialized rack solutions for specific use cases and environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalRacks.map((item, index) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {}
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-700 p-4"
                  />
                  {}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="px-6 py-2 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-300 border border-indigo-200 hover:border-indigo-300">
                      Explore →
                    </button>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-indigo-200 rounded-full group-hover:bg-indigo-400 transition-colors duration-300"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="relative py-20 overflow-hidden">
        {}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 lg:p-16 border border-white/20">
            {}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                🌟 Key Features
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                  Why Choose Our Racks?
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>
            {}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our racks are designed with high durability and versatility, covering weight loads from 63 kg to 1 500 kg, fitting various environments from residential to data centres. Each rack family addresses specific scenarios—from everyday comms to secure multi-tenant colocation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Smart cable & airflow management with integrated brush strips, vented panels, baffles, and cable trays ensure neat, efficient setups. All products come with a 25-year warranty if installed by an authorised Telemons-Cables partner.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm font-medium">25-Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm font-medium">Smart Management</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-sm font-medium">Secure Locking</span>
                  </div>
                </div>
              </div>
              {}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                  <div className="text-3xl mb-2">🏗️</div>
                  <div className="text-2xl font-bold text-green-600 mb-1">1,500kg</div>
                  <div className="text-sm text-gray-600">Max Load Capacity</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">25</div>
                  <div className="text-sm text-gray-600">Year Warranty</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border border-indigo-200">
                  <div className="text-3xl mb-2">🌡️</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Airflow Efficiency</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-100 rounded-2xl border border-purple-200">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
```

## File: app/signup/page.tsx
```typescript
'use client'
import { SignupForm } from '@/components/auth/SignupForm'
import { PublicRoute } from '@/components/auth/PublicRoute'
export default function SignupPage() {
  return (
    <PublicRoute>
      <SignupForm />
    </PublicRoute>
  )
}
```

## File: components/auth/ProtectedRoute.tsx
```typescript
'use client'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useLoader } from '@/context/LoaderContext'
const PROTECTED_ROUTES = ['/test', '/dashboard', '/profile']
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const { showLoader, hideLoader } = useLoader()
  useEffect(() => {
    if (loading) {
      showLoader()
    } else {
      hideLoader()
      if (!user && PROTECTED_ROUTES.includes(pathname)) {
        router.push('/')
      }
    }
  }, [user, loading, router, pathname, showLoader, hideLoader])
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-600"></div>
      </div>
    )
  }
  if (PROTECTED_ROUTES.includes(pathname) && !user) {
    return null
  }
  return <>{children}</>
}
```

## File: components/common/Footer.tsx
```typescript
'use client'
import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
interface FooterProps {
  className?: string
}
export const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={`bg-gradient-to-br from-telemons-blue-900 via-telemons-blue-800 to-telemons-blue-900 text-white py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-telemons-orange-primary">Telemons Cable</h3>
            <p className="text-telemons-blue-100 leading-relaxed">
              Leading provider of innovative cable solutions for industries worldwide.
            </p>
            <div className="mt-4">
              <div className="w-16 h-1 bg-telemons-orange-primary rounded-full"></div>
            </div>
          </div>
          {}
          <div>
            <h3 className="text-xl font-bold mb-4 text-telemons-orange-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-telemons-blue-100 hover:text-telemons-orange-primary transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-telemons-orange-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/markets" className="text-telemons-blue-100 hover:text-telemons-orange-primary transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-telemons-orange-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Markets
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-telemons-blue-100 hover:text-telemons-orange-primary transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-telemons-orange-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-telemons-blue-100 hover:text-telemons-orange-primary transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-telemons-orange-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          {}
          <div>
            <h3 className="text-xl font-bold mb-4 text-telemons-orange-primary">Contact Us</h3>
            <ul className="space-y-3 text-telemons-blue-100">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-telemons-orange-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>123 Cable Street</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-telemons-orange-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Tech City, TC 12345</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-telemons-orange-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Phone: (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-telemons-orange-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Email: info@telemons.com</span>
              </li>
            </ul>
          </div>
          {}
          <div>
            <h3 className="text-xl font-bold mb-4 text-telemons-orange-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-telemons-blue-100 hover:text-telemons-orange-primary transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-telemons-blue-100 hover:text-telemons-orange-primary transition-all duration-300 transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-telemons-blue-100 hover:text-telemons-orange-primary transition-all duration-300 transform hover:scale-110">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-telemons-blue-100 hover:text-telemons-orange-primary transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
            </div>
            {}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-telemons-blue-100">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-telemons-blue-800 border border-telemons-blue-600 rounded-l-lg focus:outline-none focus:border-telemons-orange-primary text-white placeholder-telemons-blue-300"
                />
                <button className="px-4 py-2 bg-telemons-orange-primary hover:bg-telemons-orange-dark text-white text-sm font-semibold rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="border-t border-telemons-blue-700 mt-8 pt-8 text-center">
          <p className="text-telemons-blue-200">&copy; {currentYear} Telemons Cable. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6 text-sm">
            <Link href="/privacy" className="text-telemons-blue-200 hover:text-telemons-orange-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-telemons-blue-200 hover:text-telemons-orange-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-telemons-blue-200 hover:text-telemons-orange-primary transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

## File: components/common/ImageCarousel.tsx
```typescript
'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
const carouselImages = [
  {
    url: '/images/carousel-1.jpg',
    title: 'Innovative Cable Solutions',
    description: 'Leading the industry with cutting-edge technology',
  },
  {
    url: '/images/carousel-2.jpg',
    title: 'Quality & Reliability',
    description: 'Trusted by professionals worldwide',
  },
  {
    url: '/images/carousel-3.jpg',
    title: 'Global Connectivity',
    description: 'Connecting businesses across continents',
  },
]
export const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.url}
            alt={image.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
            <p className="text-xl">{image.description}</p>
          </div>
        </div>
      ))}
      {}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-yellow-500' : 'bg-white'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
```

## File: components/common/Loader.tsx
```typescript
'use client'
import React from 'react'
export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-telemons-blue-900/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        {}
        <div className="animate-spin rounded-full h-32 w-32 border-4 border-telemons-blue-200 border-t-telemons-blue-primary"></div>
        {}
        <div className="absolute inset-4 animate-spin rounded-full border-4 border-telemons-orange-200 border-t-telemons-orange-primary" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        {}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-telemons-orange-primary font-bold text-lg">Telemons</div>
        </div>
      </div>
    </div>
  )
}
```

## File: components/common/PDFDownloadButton.tsx
```typescript
import React from 'react';
import { FaDownload, FaSpinner, FaFilePdf } from 'react-icons/fa';
import { usePDFDownload } from '@/hooks/usePDFDownload';
import { convertToPDFData } from '@/lib/utils/pdfDataConverter';
import { PDFGenerationOptions } from '@/types/pdf-generation';
interface PDFDownloadButtonProps {
  product: any;
  className?: string;
  options?: Partial<PDFGenerationOptions>;
  variant?: 'primary' | 'secondary' | 'elevated';
  showError?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
export function PDFDownloadButton({
  product,
  className = "",
  options = {},
  variant = 'elevated',
  showError = true,
  size = 'lg'
}: PDFDownloadButtonProps) {
  const { isGenerating, error, downloadPDF, clearError } = usePDFDownload();
  /**
   * Handle PDF download click
   */
  const handleDownload = async () => {
    try {
      clearError();
      const pdfData = convertToPDFData(product);
      const finalOptions = {
        includeImages: true,
        includeSpecifications: true,
        includeFeatures: true,
        includeBranding: true,
        ...options
      };
      await downloadPDF(pdfData, finalOptions);
    } catch (err) {
      console.error('PDF download failed:', err);
    }
  };
  // Size configurations
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2.5",
    lg: "px-8 py-4 text-lg gap-3"
  };
  const getButtonClasses = () => {
    const baseClasses = `
      inline-flex items-center justify-center font-semibold
      rounded-2xl transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed
      relative overflow-hidden group
      ${sizeClasses[size]}
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-telemons-blue-300
    `;
    if (variant === 'primary') {
      return `${baseClasses}
        bg-gradient-to-r from-telemons-blue-primary via-telemons-blue-600 to-telemons-orange-primary
        text-white shadow-[0_12px_35px_-12px_rgba(29,78,216,0.55)]
        hover:shadow-[0_16px_40px_-18px_rgba(249,115,22,0.55)]
        hover:from-telemons-blue-700 hover:via-telemons-blue-700 hover:to-telemons-orange-500
        transform hover:-translate-y-1 active:translate-y-0
        border border-telemons-blue-500`;
    }
    if (variant === 'elevated') {
      return `${baseClasses}
        bg-white/80 text-gray-800
        shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_-18px_rgba(59,130,246,0.35)]
        border border-gray-200/80 hover:border-telemons-blue-200
        transform hover:-translate-y-1 active:translate-y-0
        backdrop-blur-md`;
    }
    return `${baseClasses}
      bg-telemons-blue-50 text-telemons-blue-primary
      border border-telemons-blue-200/70
      hover:bg-white hover:border-telemons-blue-300
      shadow-[0_6px_20px_-12px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_30px_-14px_rgba(37,99,235,0.35)]`;
  };
  return (
    <div className="flex flex-col w-full">
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={`${getButtonClasses()} ${className}`}
        title="Download product specifications as PDF"
      >
        {}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
        {}
        <div className="relative flex items-center gap-3">
          {isGenerating ? (
            <>
              <FaSpinner className="animate-spin text-xl" />
              <span className="font-semibold">Generating PDF...</span>
            </>
          ) : (
            <>
              <div className="relative">
                <FaFilePdf className="text-xl text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <FaDownload className="absolute -bottom-1 -right-1 text-xs bg-white rounded-full p-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </div>
              <span className="font-semibold whitespace-nowrap">Download PDF Specs</span>
            </>
          )}
        </div>
      </button>
      {}
      {!error && !isGenerating && (
        <div className="mt-2 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <FaFilePdf className="text-red-400" />
            Click to download product specifications
          </p>
        </div>
      )}
      {}
      {showError && error && (
        <div className="mt-4 p-4 bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg shadow-sm animate-shake">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-800 font-semibold text-sm">PDF Generation Failed</span>
              </div>
              <p className="text-red-700 text-sm leading-relaxed">{error}</p>
            </div>
            <button
              onClick={clearError}
              className="ml-3 text-red-400 hover:text-red-600 transition-colors p-1 hover:bg-red-200 rounded"
              aria-label="Dismiss error"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```

## File: components/FibreNetworks/FibreAttenuators.tsx
```typescript
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { FibreAttenuator } from '@/types/fibre-attenuator';
import FibreAttenuatorDetail from '@/components/FibreNetworks/FibreAttenuatorDetail';
interface FibreAttenuatorsProps {
  attenuators: FibreAttenuator[];
}
export default function FibreAttenuators({ attenuators }: FibreAttenuatorsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedAttenuator, setSelectedAttenuator] = useState<FibreAttenuator | null>(null);
  useEffect(() => {
    if (selectedAttenuator) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedAttenuator]);
  const toggleSpecifications = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const handleViewDetails = (attenuator: FibreAttenuator) => {
    setSelectedAttenuator(attenuator);
  };
  if (selectedAttenuator) {
    return (
      <FibreAttenuatorDetail
        product={selectedAttenuator}
        onBack={() => setSelectedAttenuator(null)}
      />
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {attenuators.map((attenuator, index) => (
        <div
          key={attenuator.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48 w-full">
            <Image
              src={attenuator.image}
              alt={attenuator.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {attenuator.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Part Number: {attenuator.partNumber}
            </p>
            <p className="text-gray-700 mb-4 line-clamp-2">
              {attenuator.description}
            </p>
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => toggleSpecifications(index)}
                  className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  <span>Specifications</span>
                  {expandedIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </button>
                {expandedIndex === index && (
                  <div className="mt-2 space-y-2">
                    {attenuator.specifications.map((spec, i) => (
                      <p key={i} className="text-sm text-gray-600">
                        {spec}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => handleViewDetails(attenuator)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

## File: components/FibreNetworks/FibreBreakoutBoxes.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import FibreBreakoutBoxDetail from './FibreBreakoutBoxDetail';
import { FibreBreakoutBox } from '@/types/fibre-breakout-box';
interface FibreBreakoutBoxesProps {
  boxes: FibreBreakoutBox[];
}
const FibreBreakoutBoxes: React.FC<FibreBreakoutBoxesProps> = ({ boxes }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<FibreBreakoutBox | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: FibreBreakoutBox) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <FibreBreakoutBoxDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {boxes.map((box, idx) => (
        <div
          key={box.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {box?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={box?.image}
                alt={box.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{box.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{box.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {box.partNumber}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(box)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  {box.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FibreBreakoutBoxes;
```

## File: components/FibreNetworks/FibreCables.tsx
```typescript
import React, { useState, useEffect } from 'react';
import FibreCableDetail from './FibreCableDetail';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import { FibreCable } from '@/types/fibre-cable';
interface FibreCablesProps {
  cables: FibreCable[];
}
const FibreCables: React.FC<FibreCablesProps> = ({ cables }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<FibreCable | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: FibreCable) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <FibreCableDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cables.map((cable, idx) => (
        <div
          key={cable.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {cable?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={cable?.image}
                alt={cable.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{cable.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{cable.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part: {cable.partNumber}</span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(cable)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              {
}
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  {cable.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FibreCables;
```

## File: components/FibreNetworks/FibreConnectorsCouplers.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import FibreConnectorCouplerDetail from './FibreConnectorCouplerDetail';
import { FibreConnectorCoupler } from '@/types/fibre-connector-coupler';
interface FibreConnectorsCouplersProps {
  connectors: FibreConnectorCoupler[];
}
const FibreConnectorsCouplers: React.FC<FibreConnectorsCouplersProps> = ({ connectors }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<FibreConnectorCoupler | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: FibreConnectorCoupler) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <FibreConnectorCouplerDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {connectors.map((connector, idx) => (
        <div
          key={connector.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {connector?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={connector?.image}
                alt={connector.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{connector.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{connector.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {connector.partNumber}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(connector)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  {connector.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FibreConnectorsCouplers;
```

## File: components/FibreNetworks/FibrePatchPanelCassettes.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import { FibrePatchPanelCassette } from '@/types/fibre-patch-panel-cassette';
import FibrePatchPanelCassetteDetail from './FibrePatchPanelCassetteDetail';
interface FibrePatchPanelCassettesProps {
  cassettes: FibrePatchPanelCassette[];
}
const FibrePatchPanelCassettes: React.FC<FibrePatchPanelCassettesProps> = ({ cassettes }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<FibrePatchPanelCassette | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: FibrePatchPanelCassette) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <FibrePatchPanelCassetteDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cassettes.map((cassette, idx) => (
        <div
          key={cassette.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {cassette?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={cassette?.image}
                alt={cassette.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{cassette.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{cassette.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part: {cassette.partNumber}</span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(cassette)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  {cassette.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FibrePatchPanelCassettes;
```

## File: components/FibreNetworks/FibrePatchPanels.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import FibrePatchPanelDetail from './FibrePatchPanelDetail';
import { FibrePatchPanel } from '@/types/fibre-patch-panel';
interface FibrePatchPanelsProps {
  panels: FibrePatchPanel[];
}
const FibrePatchPanels: React.FC<FibrePatchPanelsProps> = ({ panels }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<FibrePatchPanel | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: FibrePatchPanel) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <FibrePatchPanelDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {panels.map((panel, idx) => (
        <div
          key={panel.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {panel?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={panel?.image}
                alt={panel.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{panel.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{panel.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part: {panel.partNumber}</span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(panel)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  {panel.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FibrePatchPanels;
```

## File: components/layout/MainLayout.tsx
```typescript
'use client'
import React from 'react'
import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { useLoader } from '@/context/LoaderContext'
import { useAuth } from '@/context/AuthContext'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/utils/constants'
interface MainLayoutProps {
  children: React.ReactNode
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  const { loading } = useAuth()
  const { showLoader, hideLoader } = useLoader()
  const pathname = usePathname()
  const isAuthPage = [ROUTES.LOGIN, ROUTES.SIGNUP].includes(pathname)
  React.useEffect(() => {
    if (loading) {
      showLoader()
    } else {
      hideLoader()
    }
  }, [loading, showLoader, hideLoader])
  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </div>
  )
}
```

## File: components/PowerData/DataCentreRacksList.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import DataCentreRacksDetail from './DataCentreRacksDetail';
import { DataCentreRack } from '@/types/data-centre-racks';
interface DataCentreRacksListProps {
  racks: DataCentreRack[];
}
const DataCentreRacksList: React.FC<DataCentreRacksListProps> = ({ racks }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<DataCentreRack | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: DataCentreRack) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <DataCentreRacksDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {racks.map((rack, idx) => (
        <div
          key={rack.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {rack.indepthImage && (
            <div className="relative h-48 w-full">
              <Image
                src={rack.indepthImage}
                alt={rack.titleHead || 'Data Centre Rack'}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{rack.titleHead}</h3>
            <p className="text-gray-600 mb-2 text-sm">{rack.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {rack.indepthPartCode}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(rack)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Title:</b> {rack.indepthTitle}</li>
                  <li><b>Part Code:</b> {rack.indepthPartCode}</li>
                  <li><b>Description:</b> {rack.indepthDescription}</li>
                  {rack.indepthKeyFeatures && (
                    <li><b>Key Features:</b> {rack.indepthKeyFeatures}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default DataCentreRacksList;
```

## File: components/PowerData/FibreDuctList.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import FibreDuctDetail from './FibreDuctDetail';
import { FibreDuct } from '@/types/fibre-duct';
interface FibreDuctListProps {
  ducts: FibreDuct[];
}
const FibreDuctList: React.FC<FibreDuctListProps> = ({ ducts }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<FibreDuct | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: FibreDuct) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <FibreDuctDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {ducts.map((duct, idx) => (
        <div
          key={duct.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {duct.indepthImage && (
            <div className="relative h-48 w-full">
              <Image
                src={duct.indepthImage}
                alt={duct.titleHead || 'Fibre Duct'}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              {duct.titleHead}
            </h3>
            <p className="text-gray-600 mb-2 text-sm">{duct.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {duct.indepthPartCode}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(duct)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Title:</b> {duct.indepthTitle}</li>
                  <li><b>Part Code:</b> {duct.indepthPartCode}</li>
                  <li><b>Description:</b> {duct.indepthDescription}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FibreDuctList;
```

## File: components/PowerData/LiquidCoolingList.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import LiquidCoolingDetail from './LiquidCoolingDetail';
import { LiquidCooling } from '@/types/liquid-cooling';
interface LiquidCoolingListProps {
  coolingSystems: LiquidCooling[];
}
const LiquidCoolingList: React.FC<LiquidCoolingListProps> = ({ coolingSystems }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<LiquidCooling | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: LiquidCooling) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <LiquidCoolingDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {coolingSystems.map((system, idx) => (
        <div
          key={system.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {system.indepthImage && (
            <div className="relative h-48 w-full">
              <Image
                src={system.indepthImage}
                alt={system.titleHead || 'Liquid Cooling System'}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{system.titleHead}</h3>
            <p className="text-gray-600 mb-2 text-sm">{system.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {system.indepthPartCode}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(system)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Title:</b> {system.indepthTitle}</li>
                  <li><b>Part Code:</b> {system.indepthPartCode}</li>
                  <li><b>Description:</b> {system.indepthDescription}</li>
                  {system.indepthKeyFeatures && (
                    <li><b>Key Features:</b> {system.indepthKeyFeatures}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default LiquidCoolingList;
```

## File: components/PowerData/MpoCassetteList.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import { MpoCassette } from '@/types/mpo-cassettes';
import MpoCassetteDetail from './MpoCassetteDetail';
interface MpoCassetteListProps {
  cassettes: MpoCassette[];
}
const MpoCassetteList: React.FC<MpoCassetteListProps> = ({ cassettes }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<MpoCassette | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: MpoCassette) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <MpoCassetteDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cassettes.map((cassette, idx) => (
        <div
          key={cassette.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {cassette.indepthImage && (
            <div className="relative h-48 w-full">
              <Image
                src={cassette.indepthImage}
                alt={cassette.titleHead || 'MPO Cassette'}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{cassette.titleHead}</h3>
            <p className="text-gray-600 mb-2 text-sm">{cassette.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {cassette.indepthPartCode}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(cassette)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Title:</b> {cassette.indepthTitle}</li>
                  <li><b>Part Code:</b> {cassette.indepthPartCode}</li>
                  <li><b>Key Features:</b> {cassette.indepthKeyFeatures}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default MpoCassetteList;
```

## File: components/PowerData/MpoChassisList.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import { MpoChassis } from '@/types/mpo-chassis';
import MpoChassisDetail from './MpoChassisDetail';
interface MpoChassisListProps {
  chassis: MpoChassis[];
}
const MpoChassisList: React.FC<MpoChassisListProps> = ({ chassis }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<MpoChassis | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: MpoChassis) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <MpoChassisDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {chassis.map((chassis, idx) => (
        <div
          key={chassis.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {chassis.indepthImage && (
            <div className="relative h-48 w-full">
              <Image
                src={chassis.indepthImage}
                alt={chassis.titleHead || 'MPO Chassis'}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{chassis.titleHead}</h3>
            <p className="text-gray-600 mb-2 text-sm">{chassis.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {chassis.indepthPartCode}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(chassis)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Title:</b> {chassis.indepthTitle}</li>
                  <li><b>Part Code:</b> {chassis.indepthPartCode}</li>
                  <li><b>Key Features:</b> {chassis.indepthKeyFeatures}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default MpoChassisList;
```

## File: components/PowerData/MpoFibreAssemblyList.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import MpoFibreAssemblyDetail from './MpoFibreAssemblyDetail';
import { MpoFibreAssembly } from '@/types/mpo-fibre-assemblies';
interface MpoFibreAssemblyListProps {
  assemblies: MpoFibreAssembly[];
}
const MpoFibreAssemblyList: React.FC<MpoFibreAssemblyListProps> = ({ assemblies }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<MpoFibreAssembly | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: MpoFibreAssembly) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <MpoFibreAssemblyDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {assemblies.map((assembly, idx) => (
        <div
          key={assembly.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {assembly.indepthImage && (
            <div className="relative h-48 w-full">
              <Image
                src={assembly.indepthImage}
                alt={assembly.titleHead || 'MPO Fibre Assembly'}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{assembly.titleHead}</h3>
            <p className="text-gray-600 mb-2 text-sm">{assembly.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {assembly.indepthPartCode}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(assembly)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Title:</b> {assembly.indepthTitle}</li>
                  <li><b>Part Code:</b> {assembly.indepthPartCode}</li>
                  <li><b>Key Features:</b> {assembly.indepthKeyFeatures}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default MpoFibreAssemblyList;
```

## File: components/PowerData/PowerCordList.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import PowerCordDetail from './PowerCordDetail';
import { PowerCord } from '@/types/power-cords';
interface PowerCordListProps {
  cords: PowerCord[];
}
const PowerCordList: React.FC<PowerCordListProps> = ({ cords }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<PowerCord | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: PowerCord) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <PowerCordDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cords.map((cord, idx) => (
        <div
          key={cord.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {cord.indepthImage && (
            <div className="relative h-48 w-full">
              <Image
                src={cord.indepthImage}
                alt={cord.titleHead || 'Power Cord'}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{cord.titleHead}</h3>
            <p className="text-gray-600 mb-2 text-sm">{cord.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {cord.indepthPartCode}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(cord)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Title:</b> {cord.indepthTitle}</li>
                  <li><b>Part Code:</b> {cord.indepthPartCode}</li>
                  <li><b>Key Features:</b> {cord.indepthKeyFeatures}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default PowerCordList;
```

## File: components/PowerData/PowerPduList.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import { PowerPdu } from '@/types/power-pdu';
import PowerPduDetail from './PowerPduDetail';
interface PowerPduListProps {
  pdus: PowerPdu[];
}
const PowerPduList: React.FC<PowerPduListProps> = ({ pdus }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<PowerPdu | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: PowerPdu) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <PowerPduDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {pdus.map((pdu, idx) => (
        <div
          key={pdu.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {pdu.indepthImage && (
            <div className="relative h-48 w-full">
              <Image
                src={pdu.indepthImage}
                alt={pdu.titleHead || 'Power PDU'}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              {pdu.titleHead}
            </h3>
            <p className="text-gray-600 mb-2 text-sm">{pdu.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                Part: {pdu.indepthPartCode}
              </span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(pdu)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Part Code:</b> {pdu.indepthPartCode}</li>
                  <li><b>Description:</b> {pdu.description}</li>
                  {pdu.indepthKeyFeatures && (
                    <li><b>Key Features:</b> {pdu.indepthKeyFeatures}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default PowerPduList;
```

## File: components/products/EnterpriseCopperCableDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { EnterpriseCopperCable } from '@/types/enterprise-copper-cables';
interface EnterpriseCopperCableDetailProps {
  product: EnterpriseCopperCable;
  onBack: () => void;
}
const EnterpriseCopperCableDetail: React.FC<EnterpriseCopperCableDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Enterprise Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.specifications.performanceLevel}</div>
                  <div className="text-sm text-gray-500">Performance</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">{product.specifications.cableConstruction}</div>
                  <div className="text-sm text-gray-500">Construction</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription || product.description}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding enterprise environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">High-speed data transmission with optimal signal integrity</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship for long-term reliability</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-telemons-blue-50 rounded-xl border border-telemons-blue-100">
                          <FaCheck className="text-telemons-orange-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-telemons-blue-primary mb-4">Physical Specifications</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b border-telemons-blue-100">
                            <span className="font-medium text-gray-700">Performance Level</span>
                            <span className="text-telemons-blue-primary">{product.specifications.performanceLevel}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-telemons-blue-100">
                            <span className="font-medium text-gray-700">Cable Construction</span>
                            <span className="text-telemons-blue-primary">{product.specifications.cableConstruction}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-telemons-blue-100">
                            <span className="font-medium text-gray-700">Conductor Gauge</span>
                            <span className="text-telemons-blue-primary">{product.specifications.conductorGauge}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-telemons-blue-100">
                            <span className="font-medium text-gray-700">Conductor Type</span>
                            <span className="text-telemons-blue-primary">{product.specifications.conductorType}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-telemons-blue-100">
                            <span className="font-medium text-gray-700">Overall Length</span>
                            <span className="text-telemons-blue-primary">{product.specifications.overallLength}</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-telemons-blue-primary mb-4">Compliance & Ratings</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b border-telemons-blue-100">
                            <span className="font-medium text-gray-700">Euro Class Flame Rating</span>
                            <span className="text-telemons-blue-primary">{product.specifications.euroClassFlameRating}</span>
                          </div>
                          {product.specifications.flammabilityRating && product.specifications.flammabilityRating.length > 0 && (
                            <div className="flex justify-between py-2 border-b border-telemons-blue-100">
                              <span className="font-medium text-gray-700">Flammability Rating</span>
                              <span className="text-telemons-blue-primary">{product.specifications.flammabilityRating.join(', ')}</span>
                            </div>
                          )}
                          {product.specifications.availableColors && product.specifications.availableColors.length > 0 && (
                            <div className="flex justify-between py-2 border-b border-telemons-blue-100">
                              <span className="font-medium text-gray-700">Available Colors</span>
                              <span className="text-telemons-blue-primary">{product.specifications.availableColors.join(', ')}</span>
                            </div>
                          )}
                          {product.specifications.numberOfPairs && product.specifications.numberOfPairs.length > 0 && (
                            <div className="flex justify-between py-2 border-b border-telemons-blue-100">
                              <span className="font-medium text-gray-700">Number of Pairs</span>
                              <span className="text-telemons-blue-primary">{product.specifications.numberOfPairs.join(', ')}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 11801 Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">TIA/EIA Standards</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default EnterpriseCopperCableDetail;
```

## File: components/products/EnterpriseCopperCables.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import EnterpriseCopperCableDetail from './EnterpriseCopperCableDetail';
import { EnterpriseCopperCable } from '@/types/enterprise-copper-cables';
interface EnterpriseCopperCablesProps {
  cables: EnterpriseCopperCable[];
}
const EnterpriseCopperCables: React.FC<EnterpriseCopperCablesProps> = ({ cables }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<EnterpriseCopperCable | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: EnterpriseCopperCable) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <EnterpriseCopperCableDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cables.map((cable, idx) => (
        <div
          key={cable.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-telemons-blue-100"
        >
          {cable?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={cable?.image}
                alt={cable.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-telemons-blue-primary mb-2">{cable.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{cable.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-telemons-blue-50 text-telemons-blue-primary px-2 py-1 rounded text-xs font-medium">Part: {cable.partNumber}</span>
              {
}
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(cable)}
                className="w-full px-4 py-2 bg-telemons-blue-primary text-white rounded-lg hover:bg-telemons-blue-dark transition-colors font-medium"
              >
                View Details
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Performance Level:</b> {cable.specifications.performanceLevel}</li>
                  <li><b>Cable Construction:</b> {cable.specifications.cableConstruction}</li>
                  <li><b>Conductor Gauge:</b> {cable.specifications.conductorGauge}</li>
                  <li><b>Conductor Type:</b> {cable.specifications.conductorType}</li>
                  <li><b>Overall Length:</b> {cable.specifications.overallLength}</li>
                  <li><b>Euro Class Flame Rating:</b> {cable.specifications.euroClassFlameRating}</li>
                  {cable.specifications.flammabilityRating && cable.specifications.flammabilityRating.length > 0 && (
                    <li><b>Flammability Rating:</b> {cable.specifications.flammabilityRating.join(', ')}</li>
                  )}
                  {cable.specifications.availableColors && cable.specifications.availableColors.length > 0 && (
                    <li><b>Available Colors:</b> {cable.specifications.availableColors.join(', ')}</li>
                  )}
                  {cable.specifications.numberOfPairs && cable.specifications.numberOfPairs.length > 0 && (
                    <li><b>Number of Pairs:</b> {cable.specifications.numberOfPairs.join(', ')}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default EnterpriseCopperCables;
```

## File: components/RacksCabinets/FloorStandingRacks.tsx
```typescript
'use client'
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import FloorStandingRackDetail from './FloorStandingRackDetail';
import { FloorStandingRack } from '@/types/floor-standing-rack';
interface FloorStandingRacksProps {
  racks: FloorStandingRack[];
}
const FloorStandingRacks: React.FC<FloorStandingRacksProps> = ({ racks }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<FloorStandingRack | null>(null);
  const toggleSpecifications = useCallback((id: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);
  const handleViewDetails = useCallback((rack: FloorStandingRack) => {
    setSelectedProduct(rack);
  }, []);
  const handleBack = useCallback(() => {
    setSelectedProduct(null);
  }, []);
  if (selectedProduct) {
    return (
      <FloorStandingRackDetail
        product={selectedProduct}
        onBack={handleBack}
      />
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {racks.map((rack) => (
        <div
          key={rack.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-64 w-full">
            <Image
              src={rack.image || '/images/placeholder.png'}
              alt={rack.title || 'Floor Standing Rack'}
              fill
              className="object-contain"
              priority={false}
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{rack.title}</h3>
            <p className="text-gray-600 mb-4">{rack.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">Part: {rack.partNumber}</span>
              <button
                onClick={() => toggleSpecifications(Number(rack.id))}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedItems[rack.id] ? 'Hide Specs' : 'Quick Specs'}
              </button>
            </div>
            {expandedItems[rack.id] && (
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {rack.specifications?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={() => handleViewDetails(rack)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              View Details
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FloorStandingRacks;
```

## File: components/RacksCabinets/OpenRacks.tsx
```typescript
'use client'
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import OpenRackDetail from './OpenRackDetail';
import { OpenRack } from '@/types/open-rack';
interface OpenRacksProps {
  racks: OpenRack[];
}
const OpenRacks: React.FC<OpenRacksProps> = ({ racks }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<OpenRack | null>(null);
  const toggleSpecifications = useCallback((id: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);
  const handleViewDetails = useCallback((rack: OpenRack) => {
    setSelectedProduct(rack);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const handleBack = useCallback(() => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  if (selectedProduct) {
    return (
      <OpenRackDetail
        product={selectedProduct}
        onBack={handleBack}
      />
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {racks.map((rack) => (
        <div
          key={rack.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-64 w-full">
            <Image
              src={rack.image || '/images/placeholder.png'}
              alt={rack.title || 'Open Rack'}
              fill
              className="object-contain"
              priority={false}
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{rack.title}</h3>
            <p className="text-gray-600 mb-4">{rack.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">Part: {rack.partNumber}</span>
              <button
                onClick={() => toggleSpecifications(Number(rack.id))}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedItems[rack.id] ? 'Hide Specs' : 'Quick Specs'}
              </button>
            </div>
            {expandedItems[rack.id] && (
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {rack.specifications?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={() => handleViewDetails(rack)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              View Details
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OpenRacks;
```

## File: components/RacksCabinets/WallRacks.tsx
```typescript
'use client'
import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { WallRack } from '@/types/wall-rack';
import WallRackDetail from './WallRackDetail';
interface WallRacksProps {
  racks: WallRack[];
}
const WallRacks: React.FC<WallRacksProps> = ({ racks }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<WallRack | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const toggleSpecifications = useCallback((id: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);
  const handleViewDetails = useCallback((rack: WallRack) => {
    setSelectedProduct(rack);
  }, []);
  const handleBack = useCallback(() => {
    setSelectedProduct(null);
  }, []);
  if (selectedProduct) {
    return (
      <WallRackDetail
        product={selectedProduct}
        onBack={handleBack}
      />
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {racks.map((rack) => (
        <div
          key={rack.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-64 w-full">
            <Image
              src={rack.image || '/images/placeholder.png'}
              alt={rack.title || 'Wall Rack'}
              fill
              className="object-contain"
              priority={false}
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{rack.title}</h3>
            <p className="text-gray-600 mb-4">{rack.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">Part: {rack.partNumber}</span>
              <button
                onClick={() => toggleSpecifications(Number(rack.id))}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedItems[rack.id] ? 'Hide Specs' : 'Quick Specs'}
              </button>
            </div>
            {expandedItems[rack.id] && (
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {rack.specifications?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={() => handleViewDetails(rack)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              View Details
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default WallRacks;
```

## File: lib/constants/fibre-networking.ts
```typescript
import axios from 'axios';
import { FibreCable } from '@/types/fibre-cable';
import { FibrePatchPanel } from '@/types/fibre-patch-panel';
import { FibrePatchPanelCassette } from '@/types/fibre-patch-panel-cassette';
import { FibreBreakoutBox } from '@/types/fibre-breakout-box';
import { FibrePatchBox } from '@/types/fibre-patch-box';
import { FibreConnectorCoupler } from '@/types/fibre-connector-coupler';
import { FibreAttenuator } from '@/types/fibre-attenuator';
import { FibreToolsAccessories } from '@/types/fibre-tools-accessories';
export const API_ENDPOINTS = {
  FIBRE_CABLES: '/api/fibre-cables',
  FIBRE_PATCH_PANELS: '/api/fibre-patch-panels',
  FIBRE_PATCH_PANEL_CASSETTES: '/api/fibre-patch-panel-cassettes',
  FIBRE_BREAKOUT_BOXES: '/api/fibre-breakout-boxes',
  FIBRE_PATCH_BOXES: '/api/fibre-patch-boxes',
  FIBRE_CONNECTORS_COUPLERS: '/api/fibre-connectors-couplers',
  FIBRE_ATTENUATORS: '/api/fibre-attenuators',
  FIBRE_TOOLS_ACCESSORIES: '/api/fibre-tools-accessories',
};
export const CATEGORY_TITLES = {
  'fibre-cable': 'Fibre Cables',
  'fibre-patch-panels': 'Fibre Patch Panels',
  'fibre-patch-panel-cassettes': 'Fibre Patch Panel Cassettes',
  'fibre-breakout-boxes': 'Fibre Breakout Boxes',
  'fibre-patch-boxes': 'Fibre Patch Boxes',
  'fibre-connectors-couplers': 'Fibre Connectors & Couplers',
  'fibre-attenuators': 'Fibre Attenuators',
  'fibre-tools-accessories': 'Fibre Tools & Accessories',
};
export const fetchFibreCables = async (): Promise<FibreCable[]> => {
  const response = await axios.get(API_ENDPOINTS.FIBRE_CABLES);
  return response.data;
};
export const fetchFibrePatchPanels = async (): Promise<FibrePatchPanel[]> => {
  const response = await axios.get(API_ENDPOINTS.FIBRE_PATCH_PANELS);
  return response.data;
};
export const fetchFibrePatchPanelCassettes = async (): Promise<FibrePatchPanelCassette[]> => {
  const response = await axios.get(API_ENDPOINTS.FIBRE_PATCH_PANEL_CASSETTES);
  return response.data;
};
export const fetchFibreBreakoutBoxes = async (): Promise<FibreBreakoutBox[]> => {
  const response = await axios.get(API_ENDPOINTS.FIBRE_BREAKOUT_BOXES);
  return response.data;
};
export const fetchFibrePatchBoxes = async (): Promise<FibrePatchBox[]> => {
  const response = await axios.get(API_ENDPOINTS.FIBRE_PATCH_BOXES);
  return response.data;
};
export const fetchFibreConnectorsCouplers = async (): Promise<FibreConnectorCoupler[]> => {
  const response = await axios.get(API_ENDPOINTS.FIBRE_CONNECTORS_COUPLERS);
  return response.data;
};
export const fetchFibreAttenuators = async (): Promise<FibreAttenuator[]> => {
  const response = await axios.get(API_ENDPOINTS.FIBRE_ATTENUATORS);
  return response.data;
};
export const fetchFibreToolsAccessories = async (): Promise<FibreToolsAccessories[]> => {
  const response = await axios.get(API_ENDPOINTS.FIBRE_TOOLS_ACCESSORIES);
  return response.data;
};
export const CATEGORY_API_MAP = {
  'fibre-cable': fetchFibreCables,
  'fibre-patch-panels': fetchFibrePatchPanels,
  'fibre-patch-panel-cassettes': fetchFibrePatchPanelCassettes,
  'fibre-breakout-boxes': fetchFibreBreakoutBoxes,
  'fibre-patch-boxes': fetchFibrePatchBoxes,
  'fibre-connectors-couplers': fetchFibreConnectorsCouplers,
  'fibre-attenuators': fetchFibreAttenuators,
  'fibre-tools-accessories': fetchFibreToolsAccessories,
};
```

## File: lib/constants/power-and-data.ts
```typescript
import axios from 'axios';
import { PowerPdu } from '@/types/power-pdu';
import { PowerCord } from '@/types/power-cords';
import { MpoFibreAssembly } from '@/types/mpo-fibre-assemblies';
import { MpoCassette } from '@/types/mpo-cassettes';
import { MpoChassis } from '@/types/mpo-chassis';
import { FibreDuct } from '@/types/fibre-duct';
import { DataCentreRack } from '@/types/data-centre-racks';
import { LiquidCooling } from '@/types/liquid-cooling';
import { EnterpriseCopperCable } from '@/types/enterprise-copper-cables';
export const API_ENDPOINTS = {
    POWER_PDUS: '/api/power-pdus',
    POWER_CORDS: '/api/power-cords-extension-leads',
    MPO_FIBRE_ASSEMBLIES: '/api/mpo-fibre-assemblies',
    MPO_CASSETTES: '/api/mpo-cassettes',
    MPO_CHASSIS: '/api/mpo-chassis',
    FIBRE_DUCT: '/api/fibre-duct',
    DATA_CENTRE_RACKS: '/api/data-centre-racks',
    KEYSTONE_JACKS: '/api/keystone-jacks',
    LIQUID_COOLING: '/api/liquid-cooling',
    ENTERPRISE_COPPER_CABLES: '/api/enterprise-copper-cables',
};
export const CATEGORY_TITLES = {
    'power-pdus': 'Power PDUs',
    'power-cords-extension-leads': 'Power Cords & Extension Leads',
    'mpo-fibre-assemblies': 'MPO Fibre Assemblies',
    'mpo-cassettes': 'MPO Cassettes',
    'mpo-chassis': 'MPO Chassis',
    'fibre-duct': 'Fibre Duct',
    'data-centre-racks': 'Data Centre Racks',
    'aisle-containment': 'Aisle Containment',
    'liquid-cooling': 'Liquid Cooling',
    'intelligent-power': 'Intelligent Power',
    'enterprise-copper-cables': 'Enterprise Copper Cables',
} as const;
export const fetchPowerPdus = async (): Promise<PowerPdu[]> => {
    const response = await axios.get(API_ENDPOINTS.POWER_PDUS);
    return response.data;
};
export const fetchPowerCords = async (): Promise<PowerCord[]> => {
    const response = await axios.get(API_ENDPOINTS.POWER_CORDS);
    return response.data;
};
export const fetchMpoFibreAssemblies = async (): Promise<MpoFibreAssembly[]> => {
    const response = await axios.get(API_ENDPOINTS.MPO_FIBRE_ASSEMBLIES);
    return response.data;
};
export const fetchMpoCassettes = async (): Promise<MpoCassette[]> => {
    const response = await axios.get(API_ENDPOINTS.MPO_CASSETTES);
    return response.data;
};
export const fetchMpoChassis = async (): Promise<MpoChassis[]> => {
    const response = await axios.get(API_ENDPOINTS.MPO_CHASSIS);
    return response.data;
};
export const fetchFibreDuct = async (): Promise<FibreDuct[]> => {
    const response = await axios.get(API_ENDPOINTS.FIBRE_DUCT);
    return response.data;
};
export const fetchDataCentreRacks = async (): Promise<DataCentreRack[]> => {
    const response = await axios.get(API_ENDPOINTS.DATA_CENTRE_RACKS);
    return response.data;
};
export const fetchLiquidCooling = async (): Promise<LiquidCooling[]> => {
    const response = await axios.get(API_ENDPOINTS.LIQUID_COOLING);
    return response.data;
};
export const fetchEnterpriseCopperCables = async (): Promise<EnterpriseCopperCable[]> => {
    const response = await axios.get(API_ENDPOINTS.ENTERPRISE_COPPER_CABLES);
    return response.data;
};
export const CATEGORY_API_MAP = {
    'power-pdus': fetchPowerPdus,
    'power-cords-extension-leads': fetchPowerCords,
    'mpo-fibre-assemblies': fetchMpoFibreAssemblies,
    'mpo-cassettes': fetchMpoCassettes,
    'mpo-chassis': fetchMpoChassis,
    'fibre-duct': fetchFibreDuct,
    'data-centre-racks': fetchDataCentreRacks,
    'liquid-cooling': fetchLiquidCooling,
    'enterprise-copper-cables': fetchEnterpriseCopperCables,
} as const;
```

## File: types/enterprise-copper-cables.ts
```typescript
export interface EnterpriseCopperCable {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: {
    performanceLevel: string;
    cableConstruction: string;
    conductorGauge: string;
    conductorType: string;
    flammabilityRating: string[];
    euroClassFlameRating: string;
    availableColors: string[];
    numberOfPairs: string[];
    overallLength: string;
    category?: string;
    shielded?: string;
    terminationType?: string;
    suitableForRoundCable?: string;
    model?: string;
    connectorType?: string;
    requiresTerminationTool?: string;
  };
  features: string[];
  detailedDescription: string;
  additionalImages: string[];
}
export interface StructuredCopperCable {
  id: number;
  createdAt: Date;
  titleHead: string | null;
  description: string | null;
  indepthTitle: string | null;
  indepthPartCode: string | null;
  indepthDescription: string | null;
  indepthKeyFeatures: string | null;
  indepthImage: string | null;
}
```

## File: types/telephone-networking.ts
```typescript
export interface TelephoneNetworkingSpecifications {
  model: string;
  type: string;
  category: string;
  material: string;
  mounting: string;
  suitableForRoundCable: string;
}
export interface TelephoneNetworking {
  id: string;
  title: string;
  description: string;
  image: string;
  partNumber: string;
  specifications: TelephoneNetworkingSpecifications;
  features: string[];
  detailedDescription: string;
  additionalImages?: string[];
}
```

## File: app/fibre-networking/[category]/page.tsx
```typescript
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import FibreCables from "@/components/FibreNetworks/FibreCables";
import FibrePatchPanels from "@/components/FibreNetworks/FibrePatchPanels";
import FibrePatchPanelCassettes from "@/components/FibreNetworks/FibrePatchPanelCassettes";
import FibreBreakoutBoxes from "@/components/FibreNetworks/FibreBreakoutBoxes";
import FibrePatchBoxes from '@/components/FibreNetworks/FibrePatchBoxes';
import FibreConnectorsCouplers from '@/components/FibreNetworks/FibreConnectorsCouplers';
import FibreAttenuators from '@/components/FibreNetworks/FibreAttenuators';
import FibreToolsAccessories from '@/components/FibreNetworks/FibreToolsAccessories';
import { FibreCable } from "@/types/fibre-cable";
import { FibrePatchPanel } from "@/types/fibre-patch-panel";
import { FibrePatchPanelCassette } from "@/types/fibre-patch-panel-cassette";
import { FibreBreakoutBox } from "@/types/fibre-breakout-box";
import { FibrePatchBox } from '@/types/fibre-patch-box';
import { FibreConnectorCoupler } from '@/types/fibre-connector-coupler';
import { FibreAttenuator } from '@/types/fibre-attenuator';
import { CATEGORY_TITLES, CATEGORY_API_MAP } from '@/lib/constants/fibre-networking';
interface PageProps {
  params: {
    category: string;
  };
}
export default function FibreNetworkingPage({ params }: PageProps) {
  const { category } = params;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchFunction = CATEGORY_API_MAP[category as keyof typeof CATEGORY_API_MAP];
        if (!fetchFunction) {
          throw new Error('Category not found');
        }
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {CATEGORY_TITLES[category as keyof typeof CATEGORY_TITLES]}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover high-performance products designed for modern infrastructure.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => router.push('/fibre-networking')}
          className="group flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-all duration-300 mb-8"
        >
          <div className="p-2.5 rounded-xl bg-gray-100/80 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
            <FaArrowLeft className="text-sm" />
          </div>
          <span className="font-semibold text-sm">Back to Fibre Networking</span>
        </button>
        {category === "fibre-cable" && <FibreCables cables={data as FibreCable[]} />}
        {category === "fibre-patch-panels" && <FibrePatchPanels panels={data as FibrePatchPanel[]} />}
        {category === "fibre-patch-panel-cassettes" && <FibrePatchPanelCassettes cassettes={data as FibrePatchPanelCassette[]} />}
        {category === "fibre-breakout-boxes" && <FibreBreakoutBoxes boxes={data as FibreBreakoutBox[]} />}
        {category === "fibre-patch-boxes" && <FibrePatchBoxes boxes={data as FibrePatchBox[]} />}
        {category === "fibre-connectors-couplers" && <FibreConnectorsCouplers connectors={data as FibreConnectorCoupler[]} />}
        {category === "fibre-attenuators" && <FibreAttenuators attenuators={data as FibreAttenuator[]} />}
        {category === "fibre-tools-accessories" && <FibreToolsAccessories tools={data as FibreToolsAccessories[]} />}
      </div>
      <Footer />
    </div>
  );
}
```

## File: app/fibre-networking/page.tsx
```typescript
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { prisma } from '@/lib/prisma';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
const categories = [
  {
    title: 'Fibre Cable',
    description: 'High-performance fibre optic cables for reliable data transmission',
    href: '/fibre-networking/fibre-cable',
    image: '/images/power-data/Excel Enbeam OM4 Multimode Armoured CST Fibre Optic Cable Loose Tube 8 Core 50_125 LSOH Eca Blue.jpg'
  },
  {
    title: 'Fibre Patch Panels',
    description: 'Professional-grade patch panels for organized fibre management',
    href: '/fibre-networking/fibre-patch-panels',
    image: '/images/power-data/Excel Enbeam LGX 3U 14 Module Panel.jpg'
  },
  {
    title: 'Fibre Patch Panel Cassettes',
    description: 'Modular cassettes for flexible fibre patch panel configurations',
    href: '/fibre-networking/fibre-patch-panel-cassettes',
    image: '/images/power-data/Part Code_ 208-016-APC.jpg'
  },
  {
    title: 'Fibre Breakout Boxes',
    description: 'Secure breakout solutions for fibre cable management',
    href: '/fibre-networking/fibre-breakout-boxes',
    image: '/images/power-data/Part Code_ 202-120.jpg'
  },
  {
    title: 'Fibre Patch Boxes',
    description: 'Compact patch boxes for efficient fibre connections',
    href: '/fibre-networking/fibre-patch-boxes',
    image: '/images/power-data/Part Code_ 208-200.jpg'
  },
  {
    title: 'Fibre Connectors & Couplers',
    description: 'High-quality connectors and couplers for reliable fibre connections',
    href: '/fibre-networking/fibre-connectors-couplers',
    image: '/images/power-data/200-372-06.jpg'
  },
  {
    title: 'Fibre Attenuators',
    description: 'Precision attenuators for optimal signal management',
    href: '/fibre-networking/fibre-attenuators',
    image: '/images/power-data/208-570.jpg'
  },
  {
    title: 'Fibre Tools & Accessories',
    description: 'Essential tools and accessories for fibre installation and maintenance',
    href: '/fibre-networking/fibre-tools-accessories',
    image: '/images/power-data/202-080.jpg'
  }
];
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default async function FibreNetworkingPage() {
  try {
    if (!prisma) {
      throw new Error('Database connection not available');
    }
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {}
        <div className="relative bg-blue-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/fibre-networking-hero.jpg"
              alt="Fibre Networking"
              fill
              className="object-contain opacity-20"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fibre Networking Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              High-performance fibre optic solutions for reliable and efficient data transmission.
              From cables to connectors, we provide comprehensive networking infrastructure.
            </p>
          </div>
        </div>
        {}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    View Products
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error in FibreNetworkingPage:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="text-gray-600">{error instanceof Error ? error.message : 'An unexpected error occurred'}</p>
        </div>
      </div>
    );
  }
}
```

## File: app/layout.tsx
```typescript
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "../styles/globals.css";
import { Toaster } from 'react-hot-toast'
import { LoaderProvider } from '@/context/LoaderContext'
import { AuthProvider } from '@/context/AuthContext'
import SupabaseProvider from '@/components/providers/SupabaseProvider'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Telemons Cable - Industrial Cable Solutions',
  description: 'Leading provider of innovative cable solutions for industries worldwide',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full`}>
        <SupabaseProvider>
          <AuthProvider>
            <LoaderProvider>
              {children}
              <Toaster position="top-right" />
            </LoaderProvider>
          </AuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
```

## File: app/markets/[market]/page.tsx
```typescript
'use client'
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import axios from 'axios';
interface Market {
  id: string;
  title: string;
  description: string;
  image: string;
  imageHeader: string;
  features: string[];
  solutions: string[];
  detailedDescription: string;
  specifications: { [key: string]: string };
  additionalImages: string[];
}
export default function MarketDetailPage() {
  const params = useParams();
  const router = useRouter();
  const marketId = params.market as string;
  const [market, setMarket] = useState<Market | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMarket = async () => {
      try {
        const response = await axios.get('/data/markets.json');
        const markets = response.data.markets;
        const foundMarket = markets.find((m: Market) => m.id === marketId);
        if (!foundMarket) {
          router.push('/markets');
          return;
        }
        setMarket(foundMarket);
      } catch (error) {
        console.error('Error fetching market:', error);
        router.push('/markets');
      } finally {
        setLoading(false);
      }
    };
    fetchMarket();
  }, [marketId, router]);
  const handleBack = () => {
    router.push('/markets');
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 font-inter flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading market details...</p>
        </div>
      </div>
    );
  }
  if (!market) {
    return (
      <div className="min-h-screen bg-gray-50 font-inter">
        <Navbar />
        <div className="pt-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Market not found</h1>
          <p className="mt-4 text-gray-600">The requested market could not be found.</p>
          <button
            onClick={handleBack}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Markets
          </button>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      {}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {market.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {market.description}
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {}
        <button
          onClick={() => router.push('/markets')}
          className="group flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-all duration-300 mb-8"
        >
          <div className="p-2.5 rounded-xl bg-gray-100/80 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
            <FaArrowLeft className="text-sm" />
          </div>
          <span className="font-semibold text-sm">Back to Markets</span>
        </button>
        {}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 relative aspect-[4/3] mb-6 md:mb-0">
              <Image
                src={market.imageHeader}
                alt={market.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{market.detailedDescription}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
              <ul className="space-y-2 mb-6">
                {market.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <svg
                      className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Solutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {market.solutions.map((solution, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-900 font-medium">{solution}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(market.specifications).map(([key, value], idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900">{key}</h4>
                      <p className="text-gray-600 mt-1">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {}
          {market.additionalImages && market.additionalImages.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {market.additionalImages.map((img, idx) => (
                  <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${market.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
```

## File: app/power-and-data/[category]/page.tsx
```typescript
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import PowerPduList from "@/components/PowerData/PowerPduList";
import { PowerPdu } from "@/types/power-pdu";
import PowerCordList from "@/components/PowerData/PowerCordList";
import { PowerCord } from "@/types/power-cords";
import { CATEGORY_TITLES, CATEGORY_API_MAP } from '@/lib/constants/power-and-data';
import MpoFibreAssemblyList from '@/components/PowerData/MpoFibreAssemblyList';
import { MpoFibreAssembly } from '@/types/mpo-fibre-assemblies';
import MpoCassetteList from '@/components/PowerData/MpoCassetteList';
import { MpoCassette } from '@/types/mpo-cassettes';
import MpoChassisList from '@/components/PowerData/MpoChassisList';
import { MpoChassis } from '@/types/mpo-chassis';
import FibreDuctList from '@/components/PowerData/FibreDuctList';
import { FibreDuct } from '@/types/fibre-duct';
import DataCentreRacksList from '@/components/PowerData/DataCentreRacksList';
import { DataCentreRack } from '@/types/data-centre-racks';
import LiquidCoolingList from '@/components/PowerData/LiquidCoolingList';
import { LiquidCooling } from '@/types/liquid-cooling';
import EnterpriseCopperCables from '@/components/products/EnterpriseCopperCables';
import { EnterpriseCopperCable } from '@/types/enterprise-copper-cables';
interface PageProps {
    params: {
        category: string;
    };
}
export default function PowerAndDataPage({ params }: PageProps) {
    const { category } = params;
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const fetchFunction = CATEGORY_API_MAP[category as keyof typeof CATEGORY_API_MAP];
                if (!fetchFunction) {
                    throw new Error('Category not found');
                }
                const result = await fetchFunction();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch data');
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [category]);
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-telemons-blue-primary"></div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (error) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
                        <p className="text-gray-600">{error}</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <section className="relative h-[275px] bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white flex items-center justify-center mb-12">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {CATEGORY_TITLES[category as keyof typeof CATEGORY_TITLES]}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Discover high-performance products designed for modern infrastructure.
                    </p>
                </div>
            </section>
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-1">
                <button
                    onClick={() => router.push('/power-and-data')}
                    className="group flex items-center space-x-3 text-gray-700 hover:text-telemons-blue-primary transition-all duration-300 mb-8"
                >
                    <div className="p-2.5 rounded-xl bg-gray-100/80 group-hover:bg-telemons-blue-100 group-hover:scale-110 transition-all duration-300">
                        <FaArrowLeft className="text-sm" />
                    </div>
                    <span className="font-semibold text-sm">Back to Power & Data</span>
                </button>
                {category === "power-pdus" && <PowerPduList pdus={data as PowerPdu[]} />}
                {category === "power-cords-extension-leads" && <PowerCordList cords={data as PowerCord[]} />}
                {category === "mpo-fibre-assemblies" && <MpoFibreAssemblyList assemblies={data as MpoFibreAssembly[]} />}
                {category === "mpo-cassettes" && <MpoCassetteList cassettes={data as MpoCassette[]} />}
                {category === "mpo-chassis" && <MpoChassisList chassis={data as MpoChassis[]} />}
                {category === "fibre-duct" && <FibreDuctList ducts={data as FibreDuct[]} />}
                {category === "data-centre-racks" && <DataCentreRacksList racks={data as DataCentreRack[]} />}
                {category === "liquid-cooling" && <LiquidCoolingList coolingSystems={data as LiquidCooling[]} />}
                {category === "enterprise-copper-cables" && <EnterpriseCopperCables cables={data as EnterpriseCopperCable[]} />}
                {}
            </div>
            <Footer />
        </div>
    );
}
```

## File: components/auth/LogoutButton.tsx
```typescript
"use client";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { useLoader } from "@/context/LoaderContext";
const LogoutButton = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { showLoader, hideLoader } = useLoader();
  const handleLogout = async () => {
    try {
      showLoader();
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      hideLoader();
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="text-telemons-blue-primary hover:text-telemons-orange-primary transition-colors duration-300 font-semibold"
    >
      Logout
    </button>
  );
};
export default LogoutButton;
```

## File: components/FibreNetworks/FibreToolsAccessories.tsx
```typescript
import React, { useState, useEffect } from 'react';
import FibreToolsAccessoriesDetail from '@/components/FibreNetworks/FibreToolsAccessoriesDetail';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import type { FibreToolsAccessories } from '@/types/fibre-tools-accessories';
interface FibreToolsAccessoriesProps {
  tools: FibreToolsAccessories[];
}
const FibreToolsAccessories: React.FC<FibreToolsAccessoriesProps> = ({ tools }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<FibreToolsAccessories | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: FibreToolsAccessories) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <FibreToolsAccessoriesDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool, idx) => (
        <div
          key={tool.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {tool?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={tool?.image}
                alt={tool.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{tool.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part: {tool.partNumber}</span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(tool)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  {tool.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FibreToolsAccessories;
```

## File: components/home/ProductShowcase.tsx
```typescript
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const products = [
  {
    title: 'Enterprise Cables',
    description: 'High-performance network cables for enterprise infrastructure',
    image: '/images/products/enterprise-cables.jpg',
    link: '/products/enterprise-cables',
    category: 'Structured Cabling',
    color: 'from-telemons-blue-primary to-telemons-blue-dark'
  },
  {
    title: 'Copper Patch Panels',
    description: 'Professional-grade patch panels for optimal network organization',
    image: '/images/products/patch-panels.jpg',
    link: '/products/copper-patch-panels',
    category: 'Network Management',
    color: 'from-telemons-orange-primary to-telemons-orange-dark'
  },
  {
    title: 'Keystossssne Jacks',
    description: 'Reliable connectivity solutions for modern networks',
    image: '/images/products/keystone-jacks.jpg',
    link: '/products/keystone-jacks',
    category: 'Connectivity',
    color: 'from-telemons-blue-primary to-telemons-blue-600'
  },
  {
    title: 'Modules & Faceplates',
    description: 'Elegant and functional network access points',
    image: '/images/products/modules-faceplates.jpg',
    link: '/products/modules-faceplates',
    category: 'Installation',
    color: 'from-telemons-orange-primary to-telemons-orange-600'
  }
];
const ProductShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-telemons-blue-900 via-telemons-blue-800 to-telemons-blue-900 relative overflow-hidden">
      {}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFFFFF\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>
      {}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-telemons-orange-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-telemons-blue-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-telemons-orange-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-telemons-blue-primary/20 rounded-full animate-ping"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-telemons-blue-100 max-w-3xl mx-auto"
          >
            Discover our comprehensive range of networking products designed for reliability and performance
          </motion.p>
          {}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-telemons-orange-primary mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${product.color} backdrop-blur-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/10`}>
                {}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-telemons-orange-100 transition-colors duration-300">{product.title}</h3>
                <p className="text-telemons-blue-100 mb-6">{product.description}</p>
                {}
                <div className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {product.category}
                </div>
                <Link href={product.link} className="inline-flex items-center text-telemons-orange-200 hover:text-white transition-colors duration-300 group/link">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              {}
              <div className="absolute inset-0 bg-gradient-to-br from-telemons-orange-primary/20 to-telemons-blue-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <button className="inline-flex items-center px-8 py-4 border-2 border-telemons-orange-primary text-telemons-orange-primary hover:bg-telemons-orange-primary hover:text-white rounded-full font-semibold transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View All Products
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default ProductShowcase;
```

## File: components/PowerData/PowerCordDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PowerCord } from '@/types/power-cords';
interface PowerCordDetailProps {
  product: PowerCord;
  onBack: () => void;
}
const PowerCordDetail: React.FC<PowerCordDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      {}
      {
}
      {}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
              <div className="relative">
                <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                  {}
                  <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                  {}
                  <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                    {product.indepthImage && (
                      <Image
                        src={product.indepthImage}
                        alt={product.titleHead || 'Power Cord'}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                        }`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        onLoad={() => setImageLoaded(true)}
                      />
                    )}
                    {}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    {}
                    <div className="absolute top-4 right-4">
                      <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                        <FaStar className="text-xs" />
                        <span>Premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Industrial Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.indepthTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.indepthDescription}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.indepthPartCode}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">3m</div>
                  <div className="text-sm text-gray-500">Length</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">UK</div>
                  <div className="text-sm text-gray-500">Plug Type</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <button className="flex-1 bg-white text-gray-700 py-4 px-8 rounded-2xl font-bold text-lg border-2 border-telemons-blue-200 hover:border-telemons-blue-primary hover:text-telemons-blue-primary transition-all duration-300">
                  Download Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.indepthDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal power delivery with minimal energy loss</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Sustainability</h4>
                        <p className="text-gray-600 text-sm">Eco-friendly materials and energy-efficient design</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.indepthKeyFeatures?.split('-').filter(Boolean).map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.indepthPartCode}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.indepthTitle}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">UK Lead 3m</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default PowerCordDetail;
```

## File: lib/services/pdfGenerationService.ts
```typescript
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
  PDFProductData,
  PDFGenerationOptions,
  PDFGenerationResult,
  PDFBrandingInfo
} from '@/types/pdf-generation';
export class PDFGenerationService {
  private readonly defaultOptions: PDFGenerationOptions = {
    includeImages: true,
    includeSpecifications: true,
    includeFeatures: true,
    includeBranding: true,
    pageFormat: 'A4',
    orientation: 'portrait'
  };
  private readonly brandingInfo: PDFBrandingInfo = {
    companyName: 'Telemons',
    website: 'www.telemons.com',
    contactInfo: 'info@telemons.com',
    address: 'Professional Network Solutions Provider'
  };
  private readonly colors = {
    primary: { r: 0, g: 84, b: 159 },
    accent: { r: 0, g: 119, b: 200 },
    headerBg: { r: 41, g: 128, b: 185 },
    lightGray: { r: 242, g: 242, b: 242 },
    mediumGray: { r: 217, g: 217, b: 217 },
    darkGray: { r: 89, g: 89, b: 89 },
    text: { r: 33, g: 33, b: 33 },
    textLight: { r: 102, g: 102, b: 102 },
    white: { r: 255, g: 255, b: 255 }
  };
  private currentY = 60;
  private pageHeight = 297;
  private pageWidth = 210;
  private margin = 15;
  private contentWidth = 180;
  public async generateProductPDF(
    productData: PDFProductData,
    options: Partial<PDFGenerationOptions> = {}
  ): Promise<PDFGenerationResult> {
    try {
      const finalOptions = { ...this.defaultOptions, ...options };
      const doc = new jsPDF({
        orientation: finalOptions.orientation,
        unit: 'mm',
        format: finalOptions.pageFormat
      });
      this.pageHeight = doc.internal.pageSize.getHeight();
      this.pageWidth = doc.internal.pageSize.getWidth();
      this.contentWidth = this.pageWidth - (2 * this.margin);
      if (finalOptions.includeBranding) {
        this.addTechnicalHeader(doc, productData);
      }
      this.addProductHeader(doc, productData);
      if (finalOptions.includeImages && productData.image) {
        await this.addCompactProductImage(doc, productData.image);
      }
      this.addProductClassification(doc, productData);
      if (productData.description || productData.detailedDescription) {
        this.addGeneralSpecifications(doc, productData);
      }
      if (finalOptions.includeSpecifications && productData.specifications) {
        this.addTechnicalSpecifications(doc, productData);
      }
      if (finalOptions.includeFeatures && productData.features) {
        this.addFeaturesSection(doc, productData);
      }
      this.addTechnicalFooter(doc);
      const pdfBlob = doc.output('blob');
      const fileName = `${this.sanitizeFileName(productData.title)}_datasheet.pdf`;
      return {
        success: true,
        fileName,
        blob: pdfBlob
      };
    } catch (error) {
      console.error('PDF Generation Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
  private addTechnicalHeader(doc: jsPDF, productData: PDFProductData): void {
    doc.setDrawColor(this.colors.primary.r, this.colors.primary.g, this.colors.primary.b);
    doc.setLineWidth(2);
    doc.line(0, 8, this.pageWidth, 8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(this.colors.primary.r, this.colors.primary.g, this.colors.primary.b);
    doc.text(this.brandingInfo.companyName, this.margin, 20);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(this.colors.textLight.r, this.colors.textLight.g, this.colors.textLight.b);
    doc.text(this.brandingInfo.address, this.margin, 26);
    doc.setDrawColor(this.colors.mediumGray.r, this.colors.mediumGray.g, this.colors.mediumGray.b);
    doc.setLineWidth(0.5);
    doc.line(this.margin, 30, this.pageWidth - this.margin, 30);
    this.currentY = 38;
  }
  private addProductHeader(doc: jsPDF, productData: PDFProductData): void {
    if (productData.partNumber) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
      doc.text(productData.partNumber, this.margin, this.currentY);
      this.currentY += 10;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
    const titleLines = doc.splitTextToSize(productData.title, this.contentWidth);
    doc.text(titleLines, this.margin, this.currentY);
    this.currentY += (titleLines.length * 6) + 8;
  }
  private async addCompactProductImage(doc: jsPDF, imageUrl: string): Promise<void> {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const targetWidth = 50;
        const targetHeight = 50;
        const dpi = 300;
        const mmToPixels = dpi / 25.4;
        const canvasWidth = Math.round(targetWidth * mmToPixels);
        const canvasHeight = Math.round(targetHeight * mmToPixels);
        const imgAspect = img.width / img.height;
        let drawWidth = canvasWidth;
        let drawHeight = canvasHeight;
        if (imgAspect > 1) {
          drawHeight = drawWidth / imgAspect;
        } else {
          drawWidth = drawHeight * imgAspect;
        }
        const offsetX = (canvasWidth - drawWidth) / 2;
        const offsetY = (canvasHeight - drawHeight) / 2;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        this.checkPageBreak(doc, targetHeight + 15);
        const imgX = (this.pageWidth - targetWidth) / 2;
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(imgX - 3, this.currentY - 3, targetWidth + 6, targetHeight + 6, 1, 1, 'F');
        doc.setDrawColor(this.colors.mediumGray.r, this.colors.mediumGray.g, this.colors.mediumGray.b);
        doc.setLineWidth(0.3);
        doc.roundedRect(imgX - 3, this.currentY - 3, targetWidth + 6, targetHeight + 6, 1, 1, 'S');
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        doc.addImage(imgData, 'JPEG', imgX, this.currentY, targetWidth, targetHeight);
        this.currentY += targetHeight + 15;
      }
    } catch (error) {
      console.warn('Failed to load product image:', error);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9);
      doc.setTextColor(this.colors.textLight.r, this.colors.textLight.g, this.colors.textLight.b);
      doc.text('[Product Image Not Available]', this.pageWidth / 2, this.currentY, { align: 'center' });
      this.currentY += 10;
    }
  }
  private addProductClassification(doc: jsPDF, productData: PDFProductData): void {
    this.checkPageBreak(doc, 30);
    doc.setFillColor(this.colors.lightGray.r, this.colors.lightGray.g, this.colors.lightGray.b);
    doc.rect(this.margin, this.currentY - 2, this.contentWidth, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
    doc.text('Product Classification', this.margin + 2, this.currentY + 3);
    this.currentY += 12;
    const items = [
      { label: 'Product Type', value: 'Twisted Pair Cable' },
      { label: 'Product Brand', value: productData.title || 'Standard' },
      { label: 'Portfolio', value: 'SYSTIMAX®' }
    ];
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(this.colors.darkGray.r, this.colors.darkGray.g, this.colors.darkGray.b);
    items.forEach(item => {
      doc.text(item.label, this.margin, this.currentY);
      doc.setFont('helvetica', 'normal');
      doc.text(item.value, this.margin + 45, this.currentY);
      doc.setFont('helvetica', 'bold');
      this.currentY += 5;
    });
    this.currentY += 8;
  }
  private addGeneralSpecifications(doc: jsPDF, productData: PDFProductData): void {
    this.checkPageBreak(doc, 30);
    doc.setFillColor(this.colors.lightGray.r, this.colors.lightGray.g, this.colors.lightGray.b);
    doc.rect(this.margin, this.currentY - 2, this.contentWidth, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
    doc.text('General Specifications', this.margin + 2, this.currentY + 3);
    this.currentY += 12;
    const description = productData.detailedDescription || productData.description || '';
    if (description) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
      const descLines = doc.splitTextToSize(description, this.contentWidth - 4);
      doc.text(descLines, this.margin, this.currentY);
      this.currentY += descLines.length * 4.5 + 8;
    }
  }
  private addTechnicalSpecifications(doc: jsPDF, productData: PDFProductData): void {
    this.checkPageBreak(doc, 40);
    doc.setFillColor(this.colors.lightGray.r, this.colors.lightGray.g, this.colors.lightGray.b);
    doc.rect(this.margin, this.currentY - 2, this.contentWidth, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
    doc.text('Technical Specifications', this.margin + 2, this.currentY + 3);
    this.currentY += 12;
    const labelWidth = 80;
    const valueX = this.margin + labelWidth;
    if (Array.isArray(productData.specifications)) {
      productData.specifications.forEach((spec: string) => {
        this.checkPageBreak(doc, 10);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
        doc.setDrawColor(this.colors.lightGray.r, this.colors.lightGray.g, this.colors.lightGray.b);
        doc.setLineWidth(0.2);
        doc.line(this.margin, this.currentY + 3, this.pageWidth - this.margin, this.currentY + 3);
        const specLines = doc.splitTextToSize(spec, this.contentWidth - 4);
        doc.text(specLines, this.margin + 2, this.currentY);
        this.currentY += Math.max(specLines.length * 4.5, 6);
      });
    } else if (typeof productData.specifications === 'object') {
      Object.entries(productData.specifications).forEach(([key, value]) => {
        this.checkPageBreak(doc, 10);
        doc.setDrawColor(this.colors.lightGray.r, this.colors.lightGray.g, this.colors.lightGray.b);
        doc.setLineWidth(0.2);
        doc.line(this.margin, this.currentY + 3, this.pageWidth - this.margin, this.currentY + 3);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(this.colors.darkGray.r, this.colors.darkGray.g, this.colors.darkGray.b);
        const keyLines = doc.splitTextToSize(key, labelWidth - 4);
        doc.text(keyLines, this.margin + 2, this.currentY);
        doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
        const valueText = Array.isArray(value) ? value.join(', ') : String(value);
        const valueLines = doc.splitTextToSize(valueText, this.contentWidth - labelWidth - 4);
        doc.text(valueLines, valueX + 2, this.currentY);
        this.currentY += Math.max(keyLines.length * 4.5, valueLines.length * 4.5, 6);
      });
    }
    doc.setDrawColor(this.colors.lightGray.r, this.colors.lightGray.g, this.colors.lightGray.b);
    doc.setLineWidth(0.2);
    doc.line(this.margin, this.currentY + 2, this.pageWidth - this.margin, this.currentY + 2);
    this.currentY += 10;
  }
  private addFeaturesSection(doc: jsPDF, productData: PDFProductData): void {
    this.checkPageBreak(doc, 40);
    doc.setFillColor(this.colors.lightGray.r, this.colors.lightGray.g, this.colors.lightGray.b);
    doc.rect(this.margin, this.currentY - 2, this.contentWidth, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
    doc.text('Key Features & Benefits', this.margin + 2, this.currentY + 3);
    this.currentY += 12;
    productData.features!.forEach((feature: string) => {
      this.checkPageBreak(doc, 8);
      doc.setFillColor(this.colors.primary.r, this.colors.primary.g, this.colors.primary.b);
      doc.circle(this.margin + 2, this.currentY - 1.5, 0.8, 'F');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(this.colors.text.r, this.colors.text.g, this.colors.text.b);
      const featureLines = doc.splitTextToSize(feature, this.contentWidth - 8);
      doc.text(featureLines, this.margin + 6, this.currentY);
      this.currentY += Math.max(featureLines.length * 4.5, 6);
    });
    this.currentY += 8;
  }
  private addTechnicalFooter(doc: jsPDF): void {
    const footerY = this.pageHeight - 25;
    doc.setDrawColor(this.colors.mediumGray.r, this.colors.mediumGray.g, this.colors.mediumGray.b);
    doc.setLineWidth(0.5);
    doc.line(this.margin, footerY, this.pageWidth - this.margin, footerY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(this.colors.textLight.r, this.colors.textLight.g, this.colors.textLight.b);
    const year = new Date().getFullYear();
    const copyrightText = `©${year} ${this.brandingInfo.companyName}. All rights reserved. All trademarks identified by ® or ™ are registered trademarks.`;
    const copyrightLines = doc.splitTextToSize(copyrightText, this.contentWidth);
    doc.text(copyrightLines, this.margin, footerY + 4);
    doc.text(`${this.brandingInfo.website} | ${this.brandingInfo.contactInfo}`, this.margin, footerY + 10);
    const timestamp = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    doc.setFont('helvetica', 'italic');
    doc.text(`Revised: ${timestamp}`, this.pageWidth - this.margin - 35, footerY + 10);
    doc.setFont('helvetica', 'normal');
    const pageText = `Page 1 of 1`;
    doc.text(pageText, this.pageWidth - this.margin - 15, footerY + 4);
    doc.setDrawColor(this.colors.primary.r, this.colors.primary.g, this.colors.primary.b);
    doc.setLineWidth(2);
    doc.line(0, this.pageHeight - 8, this.pageWidth, this.pageHeight - 8);
  }
  private checkPageBreak(doc: jsPDF, spaceNeeded: number): void {
    if (this.currentY + spaceNeeded > this.pageHeight - 35) {
      doc.addPage();
      this.currentY = this.margin + 10;
    }
  }
  private sanitizeFileName(fileName: string): string {
    return fileName
      .replace(/[^a-z0-9]/gi, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '')
      .toLowerCase();
  }
  /**
   * Trigger file download
   */
  public downloadPDF(blob: Blob, fileName: string): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
}
export const pdfService = new PDFGenerationService();
```

## File: app/api/backboxes/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
const formatImageName = (title: string): string => {
  if (!title) return '';
  return title.replace(/\s+/g, '_');
};
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export async function GET() {
  try {
    const backboxes = await prisma.structuredBackboxes.findMany();
    const transformedData = backboxes.map((backbox) => {
      const imageFromDb = backbox.indepthImage;
      const fallbackImageFileName = formatImageName(backbox.titleHead || '');
      const imageSrc = imageFromDb || `/images/Backbox-floorboxes/${fallbackImageFileName}.jpg`;
      return {
        id: backbox.id.toString(),
        title: backbox.titleHead || '',
        partNumber: backbox.indepthPartCode || '',
        description: backbox.description || '',
        image: imageSrc,
        specifications: backbox.indepthKeyFeatures ? backbox.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        features: backbox.indepthKeyFeatures ? backbox.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        detailedDescription: backbox.indepthDescription || '',
        additionalImages: imageFromDb ? [imageFromDb] : [`/images/Backbox-floorboxes/${fallbackImageFileName}.jpg`]
      }
    });
    return NextResponse.json(transformedData, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error fetching backboxes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch backboxes' },
      { status: 500 }
    );
  }
}
```

## File: app/api/modules-faceplates/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
const formatImageName = (title: string): string => {
  if (!title) return '';
  return title.replace(/\s+/g, '_');
};
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export async function GET() {
  try {
    const modules = await prisma.structuredModules.findMany();
    const transformedData = modules.map((module) => {
      const imageFromDb = module.indepthImage;
      const fallbackImageFileName = formatImageName(module.titleHead || '');
      const imageSrc = imageFromDb || `/images/modules-faceplates/${fallbackImageFileName}.jpg`;
      return {
        id: module.id.toString(),
        title: module.titleHead || '',
        partNumber: module.indepthPartCode || '',
        description: module.description || '',
        image: imageSrc,
        specifications: module.indepthKeyFeatures ? module.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        features: module.indepthKeyFeatures ? module.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        detailedDescription: module.indepthDescription || '',
        additionalImages: imageFromDb ? [imageFromDb] : [`/images/modules-faceplates/${fallbackImageFileName}.jpg`]
      };
    });
    return NextResponse.json(transformedData, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error fetching modules and faceplates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch modules and faceplates' },
      { status: 500 }
    );
  }
}
```

## File: app/api/telephone-networking/route.ts
```typescript
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
const formatImageName = (title: string): string => {
  if (!title) return '';
  return title.replace(/\s+/g, '_');
};
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export async function GET() {
  try {
    const telephoneNetworking = await prisma.structuredTelephonenetworking.findMany();
    const transformedData = telephoneNetworking.map((item) => {
      const imageFromDb = item.indepthImage;
      const fallbackImageFileName = formatImageName(item.titleHead || '');
      const imageSrc = imageFromDb || `/images/telephone-networking/${fallbackImageFileName}.jpg`;
      return {
        id: item.id.toString(),
        title: item.titleHead || '',
        partNumber: item.indepthPartCode || '',
        description: item.description || '',
        image: imageSrc,
        specifications: item.indepthKeyFeatures ? item.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        features: item.indepthKeyFeatures ? item.indepthKeyFeatures.split('\n').filter(Boolean) : [],
        detailedDescription: item.indepthDescription || '',
        additionalImages: imageFromDb ? [imageFromDb] : [`/images/telephone-networking/${fallbackImageFileName}.jpg`]
      }
    });
    return NextResponse.json(transformedData, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error fetching telephone networking data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch telephone networking data' },
      { status: 500 }
    );
  }
}
```

## File: app/page.tsx
```typescript
'use client'
import { MainLayout } from '@/components/layout/MainLayout'
import { ImageCarousel } from '@/components/common/ImageCarousel'
import CertificatesSection from '@/components/home/CertificatesSection'
import InnovationSection from '@/components/home/InnovationSection'
import ProductShowcase from '@/components/home/ProductShowcase'
import MottoSection from '@/components/home/MottoSection'
import ProductsMarketsSection from '@/components/home/ProductsMarketsSection'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
export default function Home() {
  return (
    <MainLayout>
      <ImageCarousel />
      <InnovationSection />
      <ProductShowcase />
      <CertificatesSection />
      <MottoSection />
      <ProductsMarketsSection />
    </MainLayout>
  )
}
```

## File: app/test/page.tsx
```typescript
'use client'
import { MainLayout } from '@/components/layout/MainLayout'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
const Test = () => {
  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="container mx-auto px-4 py-12 mt-16">
          <h1 className="text-4xl font-bold text-center">Welcome to Test Page</h1>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
};
export default Test;
```

## File: components/FibreNetworks/FibreAttenuatorDetail.tsx
```typescript
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FibreAttenuator } from '@/types/fibre-attenuator';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface FibreAttenuatorDetailProps {
  product: FibreAttenuator;
  onBack: () => void;
}
const FibreAttenuatorDetail: React.FC<FibreAttenuatorDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">1U</div>
                  <div className="text-sm text-gray-500">Rack Size</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-telemons-blue-50 rounded-xl border border-telemons-blue-100">
                          <FaCheck className="text-telemons-orange-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Attenuator</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FibreAttenuatorDetail;
```

## File: components/FibreNetworks/FibreBreakoutBoxDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FibreBreakoutBox } from '@/types/fibre-breakout-box';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface FibreBreakoutBoxDetailProps {
  product: FibreBreakoutBox;
  onBack: () => void;
}
const FibreBreakoutBoxDetail: React.FC<FibreBreakoutBoxDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">1U</div>
                  <div className="text-sm text-gray-500">Rack Size</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-telemons-blue-50 rounded-xl border border-telemons-blue-100">
                          <FaCheck className="text-telemons-orange-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Breakout Box</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FibreBreakoutBoxDetail;
```

## File: components/FibreNetworks/FibreCableDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FibreCable } from '@/types/fibre-cable';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface FibreCableDetailProps {
  product: FibreCable;
  onBack: () => void;
}
const FibreCableDetail: React.FC<FibreCableDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">1U</div>
                  <div className="text-sm text-gray-500">Rack Size</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-telemons-blue-50 rounded-xl border border-telemons-blue-100">
                          <FaCheck className="text-telemons-orange-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Fibre Cable</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FibreCableDetail;
```

## File: components/FibreNetworks/FibreConnectorCouplerDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FibreConnectorCoupler } from '@/types/fibre-connector-coupler';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface FibreConnectorCouplerDetailProps {
  product: FibreConnectorCoupler;
  onBack: () => void;
}
const FibreConnectorCouplerDetail: React.FC<FibreConnectorCouplerDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">1U</div>
                  <div className="text-sm text-gray-500">Rack Size</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-telemons-blue-50 rounded-xl border border-telemons-blue-100">
                          <FaCheck className="text-telemons-orange-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Connector Coupler</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FibreConnectorCouplerDetail;
```

## File: components/FibreNetworks/FibrePatchBoxDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FibrePatchBox } from '@/types/fibre-patch-box';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface FibrePatchBoxDetailProps {
  product: FibrePatchBox;
  onBack: () => void;
}
const FibrePatchBoxDetail: React.FC<FibrePatchBoxDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">1U</div>
                  <div className="text-sm text-gray-500">Rack Size</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-telemons-blue-50 rounded-xl border border-telemons-blue-100">
                          <FaCheck className="text-telemons-orange-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Patch Box</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FibrePatchBoxDetail;
```

## File: components/FibreNetworks/FibrePatchBoxes.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import FibrePatchBoxDetail from '@/components/FibreNetworks/FibrePatchBoxDetail';
import { FibrePatchBox } from '@/types/fibre-patch-box';
import "@/styles/globals.css";
interface FibrePatchBoxesProps {
  boxes: FibrePatchBox[];
}
const FibrePatchBoxes: React.FC<FibrePatchBoxesProps> = ({ boxes }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<FibrePatchBox | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: FibrePatchBox) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <FibrePatchBoxDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {boxes.map((box, idx) => (
        <div
          key={box?.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {box?.image && (
            <div className="relative h-38 w-full fibre-patch-box-image">
              <Image
                src={box?.image}
                alt={box.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{box.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{box.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part: {box.partNumber}</span>
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(box)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Quick Specs {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  {box.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FibrePatchBoxes;
```

## File: components/FibreNetworks/FibrePatchPanelCassetteDetail.tsx
```typescript
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FibrePatchPanelCassette } from '@/types/fibre-patch-panel-cassette';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface FibrePatchPanelCassetteDetailProps {
  product: FibrePatchPanelCassette;
  onBack: () => void;
}
const FibrePatchPanelCassetteDetail: React.FC<FibrePatchPanelCassetteDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">1U</div>
                  <div className="text-sm text-gray-500">Rack Size</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Patch Panel Cassette</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FibrePatchPanelCassetteDetail;
```

## File: components/FibreNetworks/FibrePatchPanelDetail.tsx
```typescript
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FibrePatchPanel } from '@/types/fibre-patch-panel';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface FibrePatchPanelDetailProps {
  product: FibrePatchPanel;
  onBack: () => void;
}
const FibrePatchPanelDetail: React.FC<FibrePatchPanelDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">1U</div>
                  <div className="text-sm text-gray-500">Rack Size</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Patch Panel</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FibrePatchPanelDetail;
```

## File: components/FibreNetworks/FibreToolsAccessoriesDetail.tsx
```typescript
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FibreToolsAccessories } from '@/types/fibre-tools-accessories';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface FibreToolsAccessoriesDetailProps {
  product: FibreToolsAccessories;
  onBack: () => void;
}
const FibreToolsAccessoriesDetail: React.FC<FibreToolsAccessoriesDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">1 Year</div>
                  <div className="text-sm text-gray-500">Warranty</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Professional Tools</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FibreToolsAccessoriesDetail;
```

## File: components/PowerData/FibreDuctDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { FibreDuct } from '@/types/fibre-duct';
interface FibreDuctDetailProps {
  product: FibreDuct;
  onBack: () => void;
}
const FibreDuctDetail: React.FC<FibreDuctDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
          {product.indepthImage && (
            <Image
              src={product.indepthImage}
              alt={product.indepthTitle || 'Fibre Duct'}
              fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
        </div>
        </div>
      </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
          </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.indepthTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.indepthDescription}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.indepthPartCode}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">High</div>
                  <div className="text-sm text-gray-500">Quality</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.indepthDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Protection</h4>
                        <p className="text-gray-600 text-sm">Superior protection for fibre optic cables</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal cable management and routing</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Durability</h4>
                        <p className="text-gray-600 text-sm">Long-lasting materials for harsh environments</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.indepthKeyFeatures?.split('-').filter(Boolean).map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.indepthPartCode}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.indepthTitle}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Fibre Duct</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FibreDuctDetail;
```

## File: components/PowerData/LiquidCoolingDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { LiquidCooling } from '@/types/liquid-cooling';
interface LiquidCoolingDetailProps {
  product: LiquidCooling;
  onBack: () => void;
}
const LiquidCoolingDetail: React.FC<LiquidCoolingDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
        {product.indepthImage && (
          <Image
            src={product.indepthImage}
                      alt={product.indepthTitle || 'Liquid Cooling System'}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
            priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
        </div>
      </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Advanced Cooling
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.indepthTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {product.indepthDescription}
            </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.indepthPartCode}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">High</div>
                  <div className="text-sm text-gray-500">Efficiency</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.indepthDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Advanced cooling technology for optimal performance</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Efficiency</h4>
                        <p className="text-gray-600 text-sm">High-efficiency cooling with minimal energy consumption</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Sustainability</h4>
                        <p className="text-gray-600 text-sm">Eco-friendly cooling solutions for modern data centers</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.indepthKeyFeatures?.split('-').filter(Boolean).map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.indepthPartCode}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.indepthTitle}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Liquid Cooling</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Energy Star Rated'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">Energy Star Rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default LiquidCoolingDetail;
```

## File: components/PowerData/MpoCassetteDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { MpoCassette } from '@/types/mpo-cassettes';
interface MpoCassetteDetailProps {
  product: MpoCassette;
  onBack: () => void;
}
const MpoCassetteDetail: React.FC<MpoCassetteDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
          {product.indepthImage && (
            <Image
              src={product.indepthImage}
              alt={product.titleHead || 'MPO Cassette'}
              fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
        </div>
        </div>
      </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Industrial Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
          </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.indepthTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.indepthDescription}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.indepthPartCode}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">High</div>
                  <div className="text-sm text-gray-500">Performance</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">MPO</div>
                  <div className="text-sm text-gray-500">Type</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.indepthDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal fiber management with efficient routing</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Sustainability</h4>
                        <p className="text-gray-600 text-sm">Eco-friendly materials and energy-efficient design</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.indepthKeyFeatures?.split('-').filter(Boolean).map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.indepthPartCode}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.indepthTitle}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">MPO Cassette</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default MpoCassetteDetail;
```

## File: components/PowerData/MpoChassisDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { MpoChassis } from '@/types/mpo-chassis';
interface MpoChassisDetailProps {
  product: MpoChassis;
  onBack: () => void;
}
const MpoChassisDetail: React.FC<MpoChassisDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
          {product.indepthImage && (
            <Image
              src={product.indepthImage}
              alt={product.titleHead || 'MPO Chassis'}
              fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
        </div>
        </div>
      </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Industrial Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
          </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.indepthTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.indepthDescription}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.indepthPartCode}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">High</div>
                  <div className="text-sm text-gray-500">Capacity</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">MPO</div>
                  <div className="text-sm text-gray-500">Type</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.indepthDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal fiber management with efficient routing</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Sustainability</h4>
                        <p className="text-gray-600 text-sm">Eco-friendly materials and energy-efficient design</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.indepthKeyFeatures?.split('-').filter(Boolean).map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.indepthPartCode}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.indepthTitle}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">MPO Chassis</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default MpoChassisDetail;
```

## File: components/PowerData/MpoFibreAssemblyDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { MpoFibreAssembly } from '@/types/mpo-fibre-assemblies';
interface MpoFibreAssemblyDetailProps {
  product: MpoFibreAssembly;
  onBack: () => void;
}
const MpoFibreAssemblyDetail: React.FC<MpoFibreAssemblyDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
        {product.indepthImage && (
          <Image
            src={product.indepthImage}
            alt={product.titleHead || 'MPO Fibre Assembly'}
            fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
            priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
        </div>
      </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Industrial Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.indepthTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {product.indepthDescription}
            </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.indepthPartCode}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">High</div>
                  <div className="text-sm text-gray-500">Capacity</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">MPO</div>
                  <div className="text-sm text-gray-500">Type</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.indepthDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal fiber management with efficient routing</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Sustainability</h4>
                        <p className="text-gray-600 text-sm">Eco-friendly materials and energy-efficient design</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.indepthKeyFeatures?.split('-').filter(Boolean).map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.indepthPartCode}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.indepthTitle}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">MPO Fibre Assembly</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default MpoFibreAssemblyDetail;
```

## File: components/PowerData/PowerPduDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { PowerPdu } from '@/types/power-pdu';
interface PowerPduDetailProps {
  product: PowerPdu;
  onBack: () => void;
}
const PowerPduDetail: React.FC<PowerPduDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
        {product.indepthImage && (
          <Image
            src={product.indepthImage}
            alt={product.titleHead || 'Power PDU'}
            fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
            priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
        </div>
      </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Industrial Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.indepthTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {product.indepthDescription}
            </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.indepthPartCode}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">High</div>
                  <div className="text-sm text-gray-500">Capacity</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">PDU</div>
                  <div className="text-sm text-gray-500">Type</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.indepthDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal power distribution with efficient routing</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Sustainability</h4>
                        <p className="text-gray-600 text-sm">Eco-friendly materials and energy-efficient design</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.indepthKeyFeatures?.split('-').filter(Boolean).map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.indepthPartCode}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.indepthTitle}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Power PDU</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default PowerPduDetail;
```

## File: components/products/BackboxDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { Backbox } from '@/types/backbox';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface BackboxDetailProps {
  product: Backbox;
  onBack: () => void;
}
const BackboxDetail: React.FC<BackboxDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.specifications.model || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Model</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">{product.specifications.material}</div>
                  <div className="text-sm text-gray-500">Material</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription || product.description}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features?.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary font-bold">{product.specifications.model || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Material</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.specifications.material}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">{product.specifications.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Additional Details
                          </h4>
                          <div className="space-y-3">
                            {Object.entries(product?.specifications || {}).map(([key, value], idx) => (
                              key !== 'model' && key !== 'material' && key !== 'type' && (
                                <div key={idx} className="flex items-center space-x-3">
                                  <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                  <span className="text-gray-700 font-medium">{key}: {value}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Marked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default BackboxDetail;
```

## File: components/products/CopperPatchPanels.tsx
```typescript
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
interface Frame {
  name: string;
  partCode: string;
  outlets?: number;
  ports?: number;
  category: string;
  rackUnits: string;
  colour: string;
  mounting: string;
  shielded: boolean;
  height?: string;
  connector?: string;
  connectionType?: string;
  description: string;
  image?: string;
}
interface CopperPatchPanelsProps {
  frames: Frame[];
}
const CopperPatchPanels: React.FC<CopperPatchPanelsProps> = ({ frames }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {frames.map((frame, idx) => (
        <div
          key={frame.partCode}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-telemons-blue-100 hover:border-telemons-orange-primary/30"
        >
          {frame?.image && (
            <div className="relative h-48 w-full bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50">
              <Image
                src={frame?.image}
                alt={frame?.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-telemons-blue-primary mb-2">{frame?.name}</h3>
            <p className="text-telemons-blue-700 mb-4 text-sm leading-relaxed">{frame?.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-telemons-blue-100 text-telemons-blue-800 px-3 py-1 rounded-full text-xs font-medium border border-telemons-blue-200">
                Part Code: {frame.partCode}
              </span>
              <span className="bg-telemons-orange-100 text-telemons-orange-800 px-3 py-1 rounded-full text-xs font-medium border border-telemons-orange-200">
                {frame.rackUnits} Rack Unit
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                {frame?.colour}
              </span>
              {
}
            </div>
            <button
              onClick={() => handleToggle(idx)}
              className="mt-auto flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white rounded-lg hover:from-telemons-blue-dark hover:to-telemons-blue-900 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Details {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-telemons-blue-700 animate-fade-in bg-telemons-blue-50 rounded-lg p-4 border border-telemons-blue-200">
                <ul className="space-y-2">
                  {frame.outlets !== undefined && (
                    <li className="flex justify-between">
                      <span className="font-semibold text-telemons-blue-primary">Outlets:</span>
                      <span>{frame.outlets}</span>
                    </li>
                  )}
                  {frame.ports !== undefined && (
                    <li className="flex justify-between">
                      <span className="font-semibold text-telemons-blue-primary">Ports:</span>
                      <span>{frame.ports}</span>
                    </li>
                  )}
                  {frame.connector && (
                    <li className="flex justify-between">
                      <span className="font-semibold text-telemons-blue-primary">Connector:</span>
                      <span>{frame.connector}</span>
                    </li>
                  )}
                  {frame.connectionType && (
                    <li className="flex justify-between">
                      <span className="font-semibold text-telemons-blue-primary">Connection Type:</span>
                      <span>{frame.connectionType}</span>
                    </li>
                  )}
                  <li className="flex justify-between">
                    <span className="font-semibold text-telemons-blue-primary">Category:</span>
                    <span>{frame.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold text-telemons-blue-primary">Rack Units:</span>
                    <span>{frame.rackUnits}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold text-telemons-blue-primary">Colour:</span>
                    <span>{frame.colour}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold text-telemons-blue-primary">Mounting:</span>
                    <span>{frame.mounting}</span>
                  </li>
                  {frame.height && (
                    <li className="flex justify-between">
                      <span className="font-semibold text-telemons-blue-primary">Height:</span>
                      <span>{frame.height}</span>
                    </li>
                  )}
                  <li className="flex justify-between">
                    {}
                    {
}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CopperPatchPanels;
```

## File: components/products/ModuleFaceplateDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { ModuleFaceplate } from '@/types/module-faceplate';
interface ModuleFaceplateDetailProps {
  product: ModuleFaceplate;
  onBack: () => void;
}
const ModuleFaceplateDetail: React.FC<ModuleFaceplateDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.specifications.model || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Model</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">{product.specifications.connectorType}</div>
                  <div className="text-sm text-gray-500">Connector</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription || product.description}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features?.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary font-bold">{product.specifications.model || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Connector Type</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.specifications.connectorType}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Category</span>
                              <span className="text-telemons-blue-primary font-bold">{product.specifications.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Additional Details
                          </h4>
                          <div className="space-y-3">
                            {Object.entries(product.specifications).map(([key, value], idx) => (
                              key !== 'model' && key !== 'connectorType' && key !== 'category' && (
                                <div key={idx} className="flex items-center space-x-3">
                                  <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                  <span className="text-gray-700 font-medium">{key}: {value}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 11801 Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">TIA/EIA Standards</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default ModuleFaceplateDetail;
```

## File: components/products/TelephoneNetworkingDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import type { TelephoneNetworking as ITelephoneNetworking } from '@/types/telephone-networking';
interface TelephoneNetworkingDetailProps {
  product: ITelephoneNetworking;
  onBack: () => void;
}
const TelephoneNetworkingDetail: React.FC<TelephoneNetworkingDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">{product.specifications.type}</div>
                  <div className="text-sm text-gray-500">Type</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <button className="flex-1 bg-white text-gray-700 py-4 px-8 rounded-2xl font-bold text-lg border-2 border-telemons-blue-200 hover:border-telemons-blue-primary hover:text-telemons-blue-primary transition-all duration-300">
                  Download Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription || product.description}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features?.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.specifications.model}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">{product.specifications.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Additional Details
                          </h4>
                          <div className="space-y-3">
                            {Object.entries(product.specifications).map(([key, value], idx) => (
                              key !== 'model' && key !== 'type' && (
                                <div key={idx} className="flex items-center space-x-3">
                                  <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                  <span className="text-gray-700 font-medium">{key}: {value}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Marked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default TelephoneNetworkingDetail;
```

## File: components/RacksCabinets/FloorStandingRackDetail.tsx
```typescript
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { FloorStandingRack } from '@/types/floor-standing-rack';
interface FloorStandingRackDetailProps {
  product: FloorStandingRack;
  onBack: () => void;
}
const FloorStandingRackDetail: React.FC<FloorStandingRackDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">Floor</div>
                  <div className="text-sm text-gray-500">Rack Type</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.description}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal rack management with efficient space utilization</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Floor Standing</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default FloorStandingRackDetail;
```

## File: components/RacksCabinets/OpenRackDetail.tsx
```typescript
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { OpenRack } from '@/types/open-rack';
interface OpenRackDetailProps {
  product: OpenRack;
  onBack: () => void;
}
const OpenRackDetail: React.FC<OpenRackDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">Open</div>
                  <div className="text-sm text-gray-500">Rack Type</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.description}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal rack management with efficient space utilization</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Open Rack</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default OpenRackDetail;
```

## File: components/RacksCabinets/WallRackDetail.tsx
```typescript
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { WallRack } from '@/types/wall-rack';
interface WallRackDetailProps {
  product: WallRack;
  onBack: () => void;
}
const WallRackDetail: React.FC<WallRackDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.partNumber || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">Wall</div>
                  <div className="text-sm text-gray-500">Mount Type</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.description}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal rack management with efficient space utilization</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.partNumber || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.title}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Wall Rack</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default WallRackDetail;
```

## File: lib/prisma.ts
```typescript
import { PrismaClient } from '@/lib/generated/prisma';
declare global {
  var prisma: PrismaClient | undefined;
}
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    },
    __internal: {
      engine: {
        enablePreparedStatement: false,
      },
    },
  });
};
export const prisma = global.prisma ?? prismaClientSingleton();
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
if (typeof window === 'undefined') {
  const cleanup = async () => {
    try {
      await prisma.$disconnect();
    } catch (error) {
      console.error('Error disconnecting Prisma:', error);
    }
  };
  process.on('beforeExit', cleanup);
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
}
export default prisma;
export async function disconnect() {
  if (process.env.NODE_ENV === 'production') {
    await prisma.$disconnect();
  }
}
```

## File: components/auth/LoginForm.tsx
```typescript
'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { loginSchema } from '@/utils/validationSchemas'
import { useLoader } from '@/context/LoaderContext'
import { toast } from 'react-hot-toast'
import { FaGoogle } from 'react-icons/fa'
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
export const LoginForm = () => {
  const router = useRouter()
  const supabase = useSupabaseClient();
  const { showLoader, hideLoader } = useLoader()
  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      showLoader()
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })
      if (error) throw error
      toast.success('Logged in successfully')
      router.push('/test')
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      hideLoader()
    }
  }
  const handleGoogleLogin = async () => {
    try {
      showLoader()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })
      if (error) throw error
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      hideLoader()
    }
  }
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-telemons-blue-900 via-telemons-blue-800 to-telemons-blue-900">
      {}
      <div className="absolute inset-0">
        {}
        <div className="absolute top-20 left-10 w-24 h-24 bg-telemons-orange-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-telemons-blue-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-telemons-orange-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-telemons-blue-primary/20 rounded-full animate-ping"></div>
        {}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 800">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#144F89" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#F58320" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F58320" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#144F89" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M 50 150 Q 250 100 450 200 T 850 150" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M 150 300 Q 400 250 700 350 T 950 300" stroke="url(#lineGradient2)" strokeWidth="1.5" fill="none" className="animate-pulse"/>
          <path d="M 100 500 Q 300 450 600 550 T 900 500" stroke="url(#lineGradient1)" strokeWidth="1" fill="none" className="animate-pulse"/>
        </svg>
      </div>
      {}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
            {}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            <div className="relative z-10">
              {}
              <div className="flex flex-col items-center mb-8">
                <div className="mb-4 p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <Image src="/telemons.jpg" alt="Telemons Cable" width={120} height={48} className="rounded-lg" />
                </div>
                <h2 className="text-center text-3xl font-bold text-white mb-2">
                  Welcome Back
                </h2>
                <p className="text-center text-lg text-telemons-blue-100/80 leading-relaxed">
                  Sign in to access your Telemons dashboard
                </p>
                {}
                <div className="w-16 h-1 bg-telemons-orange-primary rounded-full mt-4"></div>
              </div>
              {}
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={handleLogin}
              >
                <Form className="space-y-6">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-telemons-blue-100 mb-2">
                        Email Address
                      </label>
                      <Field
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-telemons-blue-200/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-telemons-orange-primary/50 focus:border-telemons-orange-primary/50 transition-all duration-200"
                        placeholder="Enter your email"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-300 text-sm mt-2" />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-telemons-blue-100 mb-2">
                        Password
                      </label>
                      <Field
                        name="password"
                        type="password"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-telemons-blue-200/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-telemons-orange-primary/50 focus:border-telemons-orange-primary/50 transition-all duration-200"
                        placeholder="Enter your password"
                      />
                      <ErrorMessage name="password" component="div" className="text-red-300 text-sm mt-2" />
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="space-y-4 pt-2">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-base font-medium text-white bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark hover:from-telemons-blue-dark hover:to-telemons-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-telemons-orange-primary shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                    >
                      Sign In
                    </button>
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="w-full flex justify-center items-center py-3 px-4 border border-white/30 text-white bg-white/10 rounded-xl font-medium text-base hover:bg-white/20 transition-all duration-200 shadow-lg backdrop-blur-sm transform hover:scale-105"
                    >
                      <FaGoogle className="mr-3 text-lg" />
                      Continue with Google
                    </button>
                  </div>
                  {/* Footer */}
                  <div className="text-center pt-4">
                    <p className="text-telemons-blue-100/80">
                      New to Telemons?{' '}
                      <a
                        href="/signup"
                        className="font-medium text-telemons-orange-primary hover:text-telemons-orange-light transition-colors duration-200 underline decoration-telemons-orange-primary/50 hover:decoration-telemons-orange-light"
                      >
                        Create account
                      </a>
                    </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          {}
          <div className="text-center">
            <p className="text-telemons-blue-200/60 text-sm">
              Connecting businesses across continents
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## File: components/auth/SignupForm.tsx
```typescript
'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signupSchema } from '@/utils/validationSchemas'
import { useRouter } from 'next/navigation'
import { useLoader } from '@/context/LoaderContext'
import { toast } from 'react-hot-toast'
import { FaGoogle } from 'react-icons/fa'
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from 'next/image';
export const SignupForm = () => {
  const router = useRouter()
  const supabase = useSupabaseClient();
  const { showLoader, hideLoader } = useLoader()
  const handleSignup = async (values: { email: string; password: string }) => {
    try {
      showLoader()
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      })
      if (error) throw error
      toast.success('Check your email to confirm your account')
      router.push('/login')
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      hideLoader()
    }
  }
  const handleGoogleSignup = async () => {
    try {
      showLoader()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })
      if (error) throw error
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      hideLoader()
    }
  }
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-telemons-blue-900 via-telemons-blue-800 to-telemons-blue-900">
      {}
      <div className="absolute inset-0">
        {}
        <div className="absolute top-20 left-10 w-24 h-24 bg-telemons-orange-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-telemons-blue-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-telemons-orange-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-telemons-blue-primary/20 rounded-full animate-ping"></div>
        {}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 800">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#144F89" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#F58320" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F58320" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#144F89" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M 50 150 Q 250 100 450 200 T 850 150" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M 150 300 Q 400 250 700 350 T 950 300" stroke="url(#lineGradient2)" strokeWidth="1.5" fill="none" className="animate-pulse"/>
          <path d="M 100 500 Q 300 450 600 550 T 900 500" stroke="url(#lineGradient1)" strokeWidth="1" fill="none" className="animate-pulse"/>
        </svg>
      </div>
      {}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
            {}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            <div className="relative z-10">
              {}
              <div className="flex flex-col items-center mb-8">
                <div className="mb-4 p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <Image src="/telemons.jpg" alt="Telemons Cable" width={120} height={48} className="rounded-lg" />
                </div>
                <h2 className="text-center text-3xl font-bold text-white mb-2">
                  Join the Network
                </h2>
                <p className="text-center text-lg text-telemons-blue-100/80 leading-relaxed">
                  Connect to premium cable solutions across continents
                </p>
                {}
                <div className="w-16 h-1 bg-telemons-orange-primary rounded-full mt-4"></div>
              </div>
              {}
              <Formik
                initialValues={{ email: '', password: '', confirmPassword: '' }}
                validationSchema={signupSchema}
                onSubmit={handleSignup}
              >
                <Form className="space-y-6">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-telemons-blue-100 mb-2">
                        Email Address
                      </label>
                      <Field
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-telemons-blue-200/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-telemons-orange-primary/50 focus:border-telemons-orange-primary/50 transition-all duration-200"
                        placeholder="Enter your email"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-300 text-sm mt-2" />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-telemons-blue-100 mb-2">
                        Password
                      </label>
                      <Field
                        name="password"
                        type="password"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-telemons-blue-200/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-telemons-orange-primary/50 focus:border-telemons-orange-primary/50 transition-all duration-200"
                        placeholder="Create a password"
                      />
                      <ErrorMessage name="password" component="div" className="text-red-300 text-sm mt-2" />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-telemons-blue-100 mb-2">
                        Confirm Password
                      </label>
                      <Field
                        name="confirmPassword"
                        type="password"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-telemons-blue-200/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-telemons-orange-primary/50 focus:border-telemons-orange-primary/50 transition-all duration-200"
                        placeholder="Confirm your password"
                      />
                      <ErrorMessage name="confirmPassword" component="div" className="text-red-300 text-sm mt-2" />
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="space-y-4 pt-2">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-base font-medium text-white bg-gradient-to-r from-telemons-orange-primary to-telemons-orange-dark hover:from-telemons-orange-dark hover:to-telemons-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-telemons-blue-primary shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                    >
                      Create Account
                    </button>
                    <button
                      type="button"
                      onClick={handleGoogleSignup}
                      className="w-full flex justify-center items-center py-3 px-4 border border-white/30 text-white bg-white/10 rounded-xl font-medium text-base hover:bg-white/20 transition-all duration-200 shadow-lg backdrop-blur-sm transform hover:scale-105"
                    >
                      <FaGoogle className="mr-3 text-lg" />
                      Continue with Google
                    </button>
                  </div>
                  {/* Footer */}
                  <div className="text-center pt-4">
                    <p className="text-telemons-blue-100/80">
                      Already connected?{' '}
                      <a
                        href="/login"
                        className="font-medium text-telemons-orange-primary hover:text-telemons-orange-light transition-colors duration-200 underline decoration-telemons-orange-primary/50 hover:decoration-telemons-orange-light"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          {}
          <div className="text-center">
            <p className="text-telemons-blue-200/60 text-sm">
              Connecting businesses across continents
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## File: components/PowerData/DataCentreRacksDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
import { DataCentreRack } from '@/types/data-centre-racks';
interface DataCentreRacksDetailProps {
  product: DataCentreRack;
  onBack: () => void;
}
const DataCentreRacksDetail: React.FC<DataCentreRacksDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.indepthImage && (
                    <Image
                      src={product.indepthImage}
                      alt={product.titleHead || 'Data Centre Rack'}
                      fill
                      className={`object-cover transition-all duration-700 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                        }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Industrial Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.indepthTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.indepthDescription}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.indepthPartCode}</div>
                  <div className="text-sm text-gray-500">Part Code</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">42U</div>
                  <div className="text-sm text-gray-500">Height</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">600mm</div>
                  <div className="text-sm text-gray-500">Width</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id
                      ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                      }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.indepthDescription}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal rack management with efficient space utilization</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Sustainability</h4>
                        <p className="text-gray-600 text-sm">Eco-friendly materials and energy-efficient design</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.indepthKeyFeatures?.split('-').filter(Boolean).map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature.trim()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Part Code</span>
                              <span className="text-telemons-blue-primary font-bold">{product.indepthPartCode}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.indepthTitle}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Type</span>
                              <span className="text-telemons-blue-primary font-bold">Data Centre Rack</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Certifications
                          </h4>
                          <div className="space-y-3">
                            {['CE Certified', 'RoHS Compliant', 'ISO 9001 Standard', 'Safety Tested'].map((cert, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                <span className="text-gray-700 font-medium">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">CE Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 9001 Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default DataCentreRacksDetail;
```

## File: components/products/Backboxes.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import BackboxDetail from './BackboxDetail';
import { Backbox } from '@/types/backbox';
interface BackboxesProps {
  backboxes: Backbox[];
}
const Backboxes: React.FC<BackboxesProps> = ({ backboxes }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Backbox | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: Backbox) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <BackboxDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {backboxes.map((backbox, idx) => (
        <div
          key={backbox.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {backbox?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={backbox?.image}
                alt={backbox.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{backbox.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{backbox.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part: {backbox.partNumber}</span>
              {
}
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(backbox)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              {
}
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Model:</b> {backbox.specifications.model}</li>
                  <li><b>Type:</b> {backbox.specifications.type}</li>
                  <li><b>Depth:</b> {backbox.specifications.depth}</li>
                  <li><b>Material:</b> {backbox.specifications.material}</li>
                  <li><b>Mounting:</b> {backbox.specifications.mounting}</li>
                  <li><b>Suitable for Round Cable:</b> {backbox.specifications.suitableForRoundCable}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Backboxes;
```

## File: components/products/KeystoneDetail.tsx
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaArrowLeft,
  FaCheck,
  FaQuoteRight,
  FaShieldAlt,
  FaBolt,
  FaLeaf,
  FaStar,
  FaCertificate,
  FaAward,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { KeystoneJack } from '@/types/keystone';
import { PDFDownloadButton } from '@/components/common/PDFDownloadButton';
interface KeystoneDetailProps {
  product: KeystoneJack;
  onBack: () => void;
}
const KeystoneDetail: React.FC<KeystoneDetailProps> = ({ product, onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-telemons-blue-50/30 to-telemons-orange-50/40">
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {}
            <div className="relative">
              <div className="relative h-[512px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-telemons-blue-100 via-telemons-blue-50 to-telemons-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-telemons-orange-200/50 via-transparent to-telemons-blue-200/50 rounded-3xl transform -rotate-2 scale-103"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-telemons-blue-100">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-telemons-orange-primary text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <FaStar className="text-xs" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-telemons-blue-100 text-telemons-blue-primary rounded-full text-sm font-medium">
                    Professional Grade
                  </span>
                  <span className="px-3 py-1 bg-telemons-orange-100 text-telemons-orange-primary rounded-full text-sm font-medium">
                    In Stock
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-telemons-blue-primary mb-6 leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              {}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">{product.specifications.model || 'N/A'}</div>
                  <div className="text-sm text-gray-500">Model</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-orange-primary mb-1">{product.specifications.connectorType}</div>
                  <div className="text-sm text-gray-500">Connector</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-telemons-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-telemons-blue-primary mb-1">ISO</div>
                  <div className="text-sm text-gray-500">Certified</div>
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-telemons-blue-primary to-telemons-blue-dark text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-telemons-blue-dark hover:to-telemons-blue-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Request Quote
                </button>
                <PDFDownloadButton
                  product={product}
                  className="flex-1"
                  variant="secondary"
                  showError={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-8 border-b border-telemons-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-telemons-blue-100">
              <div className="flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: FaQuoteRight },
                  { id: 'features', label: 'Features', icon: FaBolt },
                  { id: 'specs', label: 'Specifications', icon: FaCertificate }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-telemons-blue-primary text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-telemons-blue-primary hover:bg-telemons-blue-50'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              {}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-6 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-blue-dark rounded-full mr-4"></div>
                      Product Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {product.detailedDescription || product.description}
                    </p>
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-blue-100 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaShieldAlt className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Reliability</h4>
                        <p className="text-gray-600 text-sm">Engineered for consistent performance in demanding environments</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-orange-50 to-telemons-orange-100 rounded-2xl border border-telemons-orange-200 hover:shadow-lg transition-all duration-300">
                        <FaBolt className="text-3xl text-telemons-orange-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-orange-primary mb-2">Performance</h4>
                        <p className="text-gray-600 text-sm">Optimal performance with precision engineering</p>
                      </div>
                      <div className="group p-6 bg-gradient-to-br from-telemons-blue-50 to-telemons-orange-50 rounded-2xl border border-telemons-blue-200 hover:shadow-lg transition-all duration-300">
                        <FaLeaf className="text-3xl text-telemons-blue-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-bold text-telemons-blue-primary mb-2">Quality</h4>
                        <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'features' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-orange-primary to-telemons-orange-dark rounded-full mr-4"></div>
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {product.features?.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-telemons-blue-50 transition-all duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-telemons-orange-400 to-telemons-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <FaCheck className="text-white text-sm" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-800 font-semibold text-lg leading-relaxed block">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {}
              {activeTab === 'specs' && (
                <div className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-telemons-blue-100">
                    <h2 className="text-3xl font-bold text-telemons-blue-primary mb-8 flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-telemons-blue-primary to-telemons-orange-primary rounded-full mr-4"></div>
                      Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-blue-50 p-6 rounded-2xl border border-telemons-blue-100">
                          <h4 className="text-xl font-bold text-telemons-blue-primary mb-4 flex items-center">
                            <FaCertificate className="text-telemons-blue-primary mr-2" />
                            Product Details
                          </h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Model</span>
                              <span className="text-telemons-blue-primary font-bold">{product.specifications.model || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-telemons-blue-100">
                              <span className="text-gray-600 font-medium">Connector Type</span>
                              <span className="text-telemons-blue-primary text-sm ml-8 font-bold">{product.specifications.connectorType}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                              <span className="text-gray-600 font-medium">Category</span>
                              <span className="text-telemons-blue-primary font-bold">{product.specifications.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-telemons-orange-50 p-6 rounded-2xl border border-telemons-orange-100">
                          <h4 className="text-xl font-bold text-telemons-orange-primary mb-4 flex items-center">
                            <FaAward className="text-telemons-orange-primary mr-2" />
                            Additional Details
                          </h4>
                          <div className="space-y-3">
                            {Object.entries(product.specifications).map(([key, value], idx) => (
                              key !== 'model' && key !== 'connectorType' && key !== 'category' && (
                                <div key={idx} className="flex items-center space-x-3">
                                  <div className="w-3 h-3 bg-telemons-orange-primary rounded-full shadow-sm"></div>
                                  <span className="text-gray-700 font-medium">{key}: {value}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {}
            <div className="space-y-6">
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <button
                  onClick={onBack}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-telemons-blue-50 text-telemons-blue-primary rounded-xl hover:bg-telemons-blue-100 transition-all duration-300 font-medium"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Back to List</span>
                </button>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaPhone className="mr-2" />
                  Get Support
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-telemons-blue-50 rounded-lg">
                    <FaEnvelope className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Support</p>
                      <p className="text-xs text-gray-500">support@telemons.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-telemons-orange-50 rounded-lg">
                    <FaPhone className="text-telemons-orange-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone Support</p>
                      <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-telemons-blue-100">
                <h3 className="text-lg font-bold text-telemons-blue-primary mb-4 flex items-center">
                  <FaCertificate className="mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">ISO 11801 Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">TIA/EIA Standards</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                    <FaCheck className="text-green-500" />
                    <span className="text-sm text-gray-700">RoHS Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};
export default KeystoneDetail;
```

## File: components/products/ModulesFaceplates.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import ModuleFaceplateDetail from './ModuleFaceplateDetail';
import { ModuleFaceplate } from '@/types/module-faceplate';
interface ModulesFaceplatesProps {
  modules: ModuleFaceplate[];
}
const ModulesFaceplates: React.FC<ModulesFaceplatesProps> = ({ modules }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ModuleFaceplate | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: ModuleFaceplate) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <ModuleFaceplateDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {modules.map((module, idx) => (
        <div
          key={module.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {module?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={module?.image}
                alt={module.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{module.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part: {module.partNumber}</span>
              {}
              {
}
              {
}
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(module)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              {
}
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Model:</b> {module.specifications.model}</li>
                  <li><b>Connector Type:</b> {module.specifications.connectorType}</li>
                  <li><b>Category:</b> {module.specifications.category}</li>
                  {}
                  <li><b>Termination Tool Required:</b> {module.specifications.requiresTerminationTool}</li>
                  <li><b>Suitable for Round Cable:</b> {module.specifications.suitableForRoundCable}</li>
                  {module.specifications.performanceLevel && (
                    <li><b>Performance Level:</b> {module.specifications.performanceLevel}</li>
                  )}
                  {module.specifications.cableConstruction && (
                    <li><b>Cable Construction:</b> {module.specifications.cableConstruction}</li>
                  )}
                  {module.specifications.conductorGauge && (
                    <li><b>Conductor Gauge:</b> {module.specifications.conductorGauge}</li>
                  )}
                  {module.specifications.conductorType && (
                    <li><b>Conductor Type:</b> {module.specifications.conductorType}</li>
                  )}
                  {module.specifications.overallLength && (
                    <li><b>Overall Length:</b> {module.specifications.overallLength}</li>
                  )}
                  {module.specifications.flammabilityRating && (
                    <li><b>Flammability Rating:</b> {module.specifications.flammabilityRating}</li>
                  )}
                  {module.specifications.availableColors && module.specifications.availableColors.length > 0 && (
                    <li><b>Available Colors:</b> {module.specifications.availableColors.join(', ')}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ModulesFaceplates;
```

## File: components/products/TelephoneNetworking.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import TelephoneNetworkingDetail from './TelephoneNetworkingDetail';
import type { TelephoneNetworking as ITelephoneNetworking } from '@/types/telephone-networking';
interface TelephoneNetworkingProps {
  items: ITelephoneNetworking[];
}
const TelephoneNetworking: React.FC<TelephoneNetworkingProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ITelephoneNetworking | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: ITelephoneNetworking) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <TelephoneNetworkingDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {item?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part: {item.partNumber}</span>
              {
}
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(item)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              {
}
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Model:</b> {item.specifications.model}</li>
                  <li><b>Type:</b> {item.specifications.type}</li>
                  <li><b>Category:</b> {item.specifications.category}</li>
                  <li><b>Material:</b> {item.specifications.material}</li>
                  <li><b>Mounting:</b> {item.specifications.mounting}</li>
                  <li><b>Suitable for Round Cable:</b> {item.specifications.suitableForRoundCable}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TelephoneNetworking;
```

## File: app/products/page.tsx
```typescript
'use client'
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FaNetworkWired, FaServer, FaTools, FaPowerOff, FaArrowLeft } from 'react-icons/fa';
import { MdCable, MdStorage } from 'react-icons/md';
import { Footer } from '@/components/common/Footer';
import { Navbar } from '@/components/common/Navbar';
import EnterpriseCables from '@/components/products/EnterpriseCables'
import { useRouter } from 'next/navigation';
interface ProductCategory {
  title: string;
  description: string;
  iconType: string;
  iconColor: string;
  features: string[];
  image: string;
  detailedDescription: string;
  specifications: { [key: string]: string };
  additionalImages: string[];
}
interface EnterpriseCable {
  id: string;
  title: string;
  partNumber: string;
  description: string;
  image: string;
  specifications: {
    performanceLevel: string;
    cableConstruction: string;
    conductorGauge: string;
    conductorType: string;
    flammabilityRating?: string[];
    euroClassFlameRating?: string;
    availableColors: string[];
    numberOfPairs?: string[];
    overallLength?: string;
  };
  features: string[];
  detailedDescription: string;
  additionalImages: string[];
}
const renderIcon = (iconType: string, iconColor: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    'MdCable': <MdCable className={`w-10 h-10 ${iconColor}`} />,
    'FaServer': <FaServer className={`w-10 h-10 ${iconColor}`} />,
    'MdStorage': <MdStorage className={`w-10 h-10 ${iconColor}`} />,
    'FaPowerOff': <FaPowerOff className={`w-10 h-10 ${iconColor}`} />,
    'FaTools': <FaTools className={`w-10 h-10 ${iconColor}`} />,
    'FaNetworkWired': <FaNetworkWired className={`w-10 h-10 ${iconColor}`} />
  };
  return iconMap[iconType] || null;
};
export default function ProductsPage() {
  const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);
  const [defaultCategories, setDefaultCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  // State to track if we're in detailed view mode (via hash)
  const [detailedView, setDetailedView] = useState<boolean>(false);
  const [filteredCategories, setFilteredCategories] = useState<ProductCategory[]>([]);
  const [filterTitle, setFilterTitle] = useState<string>('');
  // Loading state
  const [loading, setLoading] = useState<boolean>(true);
  const [enterpriseCables, setEnterpriseCables] = useState<EnterpriseCable[]>([]);
  const [selectedDefaultCategory, setSelectedDefaultCategory] = useState<any | null>(null);
  const [showDefaultCategories, setShowDefaultCategories] = useState(false);
  const router = useRouter(); // Next.js router for SPA navigation
  // Fetch enterprise cables data
  const fetchEnterpriseCables = useCallback(async () => {
    try {
      const response = await axios.get('/data/enterpriseCables.json');
      if (response.status !== 200) {
        throw new Error(`Failed to fetch enterprise cables: ${response.status}`);
      }
      setEnterpriseCables(response.data);
      setFilteredCategories([]);
      setFilterTitle('Enterprise Data Center Copper Cable');
      setDetailedView(false);
    } catch (error) {
      console.error('Error fetching enterprise cables:', error);
    }
  }, []);
  const fetchProductData = useCallback(async () => {
    try {
      const response = await axios.get('/data/productCategories.json');
      if (response.status !== 200) {
        throw new Error(`Failed to fetch product data: ${response.status}`);
      }
      const data = response.data;
      setProductCategories(data);
      if (data.length > 0) {
        setActiveCategory(data[0].title);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product data:', error);
      setLoading(false);
    }
  }, []);
  const fetchDefaultCategories = useCallback(async () => {
    try {
      const response = await axios.get('/data/defaultCategories.json');
      if (response.status !== 200) {
        throw new Error(`Failed to fetch default categories: ${response.status}`);
      }
      const data = response.data;
      setDefaultCategories(data || []);
    } catch (error) {
      console.error('Error fetching default categories:', error);
      setDefaultCategories([]);
    }
  }, []);
  useEffect(() => {
    fetchProductData();
    fetchDefaultCategories();
  }, [fetchProductData, fetchDefaultCategories]);
  const activeCategoryObj = productCategories.find(cat => cat.title === activeCategory) || (productCategories.length > 0 ? productCategories[0] : null);
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      // Reset filtered categories when no hash
      if (!hash) {
        setFilteredCategories(productCategories);
        setFilterTitle('');
        setDetailedView(false);
        return;
      }
      // If hash exists and matches a product title (URL encoded)
      if (hash && productCategories.length > 0) {
        // Decode the URL-encoded hash to match product titles
        const decodedHash = decodeURIComponent(hash);
        // Check if hash is a filter category (copper-systems, fiber-optic-systems, etc.)
        if (decodedHash === 'copper-systems') {
          const copperProducts = productCategories.filter(
            cat => cat.title.includes('Copper') || cat.title.includes('TX6') || cat.title === 'Patch Cords'
          );
          setFilteredCategories(copperProducts);
          setFilterTitle('Copper Systems');
          setDetailedView(false);
          if (copperProducts.length > 0) {
            setActiveCategory(copperProducts[0].title);
          }
          return;
        }
        if (decodedHash === 'products-enterprises') {
          setFilterTitle('Products & Enterprises');
        }
        if (decodedHash === 'fiber-optic-systems') {
          const fiberProducts = productCategories.filter(
            cat => cat.title.includes('Fiber')
          );
          setFilteredCategories(fiberProducts);
          setFilterTitle('Fiber Optic Systems');
          setDetailedView(false);
          if (fiberProducts.length > 0) {
            setActiveCategory(fiberProducts[0].title);
          }
          return;
        }
        if (decodedHash === 'grounding-bonding') {
          const groundingProducts = productCategories.filter(
            cat => cat.title.includes('Grounding')
          );
          setFilteredCategories(groundingProducts);
          setFilterTitle('Grounding & Bonding');
          setDetailedView(false);
          if (groundingProducts.length > 0) {
            setActiveCategory(groundingProducts[0].title);
          }
          return;
        }
        if (decodedHash === 'bulk-copper-cable') {
          const bulkCopperProducts = productCategories.filter(
            cat => cat.title.includes('Bulk Copper')
          );
          setFilteredCategories(bulkCopperProducts);
          setFilterTitle('Bulk Copper Cable');
          setDetailedView(false);
          if (bulkCopperProducts.length > 0) {
            setActiveCategory(bulkCopperProducts[0].title);
          }
          return;
        }
        const matchingProduct = productCategories.find(
          cat => cat.title.toLowerCase().replace(/\s+/g, '-') === decodedHash
        );
        if (matchingProduct) {
          setActiveCategory(matchingProduct.title);
          setDetailedView(true);
        } else {
          setFilteredCategories(productCategories);
          setFilterTitle('');
        }
        if (decodedHash === 'data-center-copper-cable') {
          fetchEnterpriseCables();
          return
        }
      }
    };
    if (!loading && productCategories.length > 0) {
      setFilteredCategories(productCategories);
      handleHashChange();
      window.addEventListener('hashchange', handleHashChange);
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, [loading, productCategories, fetchEnterpriseCables]);
  useEffect(() => {
    const handleHash = () => {
      setShowDefaultCategories(window.location.hash === '#products-enterprises');
      setSelectedDefaultCategory(null);
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  const navigateToProduct = (category: ProductCategory) => {
    const urlFriendlyTitle = category.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/products/${urlFriendlyTitle}`);
    setActiveCategory(category.title);
    setDetailedView(true);
    setTimeout(() => {
      const detailedViewContainer = document.querySelector('.pt-20');
      if (detailedViewContainer) {
        detailedViewContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };
  const goBackToProducts = () => {
    if (filterTitle) {
      const filterHash = filterTitle.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
      router.push(`/products#${filterHash}`); // Use router.push for SPA navigation
    } else {
      router.push('/products');
    }
    setDetailedView(false);
  };
  const renderDefaultCategoriesList = () => (
    <>
      {}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Products & Enterprises
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover high-performance products designed for modern infrastructure.
          </p>
        </div>
      </section>
      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultCategories.map((category: any, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-600 mb-4 text-base leading-relaxed line-clamp-2 flex-1">{category.description}</p>
                <button
                  onClick={() => setSelectedDefaultCategory(category)}
                  className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition-colors font-medium mt-auto"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  const renderDefaultCategoryDetail = () => (
    <div className="max-width-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <button
        onClick={() => setSelectedDefaultCategory(null)}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
      >
        <FaArrowLeft />
        <span>Back to Products & Enterprises</span>
      </button>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 relative aspect-[4/3] mb-6 md:mb-0">
            <Image
              src={selectedDefaultCategory.image}
              alt={selectedDefaultCategory.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedDefaultCategory.title}</h1>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedDefaultCategory.detailedDescription}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
            <ul className="space-y-2 mb-6">
              {selectedDefaultCategory.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <svg
                    className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Specifications</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedDefaultCategory.specifications &&
                  Object.entries(selectedDefaultCategory.specifications).map(([key, value]: [string, unknown], idx: number) => (
                  <div key={idx} className="border-b border-gray-200 pb-3">
                    <h4 className="font-medium text-gray-900">{key}</h4>
                    <p className="text-gray-600 mt-1">{String(value)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {}
        {selectedDefaultCategory.additionalImages && selectedDefaultCategory.additionalImages.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedDefaultCategory.additionalImages.map((img: string, idx: number) => (
                <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`${selectedDefaultCategory.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
  if (loading || !activeCategoryObj) {
    return (
      <div className="min-h-screen bg-gray-50 font-inter flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }
  const displayCategories = filteredCategories.length > 0 ? defaultCategories : defaultCategories;
  if (showDefaultCategories) {
    return (
      <div className="min-h-screen bg-gray-50 font-inter">
        <Navbar />
        {selectedDefaultCategory ? renderDefaultCategoryDetail() : renderDefaultCategoriesList()}
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {}
      <Navbar />
      {detailedView ? (
        <div className="pt-20 pb-16">
          {}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {}
            <button
              onClick={goBackToProducts}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <FaArrowLeft />
              <span>Back to Products</span>
            </button>
            {}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
              <Image
                src={activeCategoryObj.image}
                alt={activeCategoryObj.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg">
                    {renderIcon(activeCategoryObj.iconType, activeCategoryObj.iconColor)}
                  </div>
                  <h1 className="text-4xl font-bold">{activeCategoryObj.title}</h1>
                </div>
                <p className="text-lg max-w-2xl">{activeCategoryObj.description}</p>
              </div>
            </div>
            {}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h2>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {activeCategoryObj.detailedDescription}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                  <ul className="space-y-3 mb-8">
                    {activeCategoryObj.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg
                          className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Specifications</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeCategoryObj.specifications &&
                        Object.entries(activeCategoryObj.specifications).map(([key, value], idx) => (
                          <div key={idx} className="border-b border-gray-200 pb-3">
                            <h4 className="font-medium text-gray-900">{key}</h4>
                            <p className="text-gray-600 mt-1">{value}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div>
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Gallery</h3>
                  <div className="space-y-4">
                    {activeCategoryObj.additionalImages?.map((img, idx) => (
                      <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`${activeCategoryObj.title} - Image ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Interested in this product?</h3>
                  <p className="mb-6">Contact our sales team for pricing, availability, and customized solutions.</p>
                  <button className="w-full bg-white text-blue-700 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
            {}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayCategories
                  .filter(cat => cat.title !== activeCategoryObj.title)
                  .slice(0, 3)
                  .map((category, index) => (
                    <article
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 border border-transparent"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg md:text-xl font-bold text-white">{category.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4 text-base leading-relaxed line-clamp-2">{category.description}</p>
                        <button
                          onClick={() => navigateToProduct(category)}
                          className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition-colors font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {}
          <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 text-center px-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {filterTitle ? filterTitle : 'Explore Our'} <span className="text-blue-300">Networking Solutions</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {filterTitle
                  ? `Browse our ${filterTitle.toLowerCase()} designed for modern infrastructure.`
                  : 'Discover high-performance products designed for modern infrastructure.'}
              </p>
            </div>
          </section>
          {}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {}
            {(!filterTitle || filterTitle === 'Products & Enterprises') && (
              <div className="flex overflow-x-auto space-x-2 pb-4 mb-16 scrollbar-thin scrollbar-thumb-gray-300">
                {displayCategories?.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category?.title)}
                    className={`flex items-center px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${activeCategory === category?.title
                      ? 'bg-blue-100 text-blue-900 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    aria-label={`Select ${category?.title}`}
                  >
                    <span className="mr-2">{renderIcon(category.iconType, category.iconColor)}</span>
                    <span>{category?.title}</span>
                  </button>
                ))}
              </div>
            )}
            {filterTitle === 'Enterprise Data Center Copper Cable' && (
              <div className="pt-10">
                <EnterpriseCables cables={enterpriseCables} />
              </div>
            )}
            {filterTitle === 'Products & Enterprises' && (
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  {}
                  <div className="md:w-1/2 relative aspect-[4/3] md:aspect-auto">
                    <Image
                      src={activeCategoryObj?.image}
                      alt={activeCategoryObj?.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {}
                  <div className="md:w-1/2 p-10">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">{renderIcon(activeCategoryObj.iconType, activeCategoryObj.iconColor)}</div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {activeCategoryObj?.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
                      {activeCategoryObj?.description}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {activeCategoryObj?.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-700">
                          <svg
                            className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <button
                        onClick={() => navigateToProduct(activeCategoryObj)}
                        className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-lg font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {}
            {filterTitle === 'Products & Enterprises' && (
              <div className="mt-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  {'Browse All Products'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {defaultCategories?.map((category, index) => (
                    <article
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 border border-transparent"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={category?.image}
                          alt={category?.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg md:text-xl font-bold text-white">{category?.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4 text-base leading-relaxed">{category?.description}</p>
                        <button
                          onClick={() => navigateToProduct(category)}
                          className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition-colors font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
```

## File: app/products/[category]/page.tsx
```typescript
'use client'
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import EnterpriseCables from '@/components/products/EnterpriseCables';
import EnterpriseCopperCables from '@/components/products/EnterpriseCopperCables';
import CopperPatchPanels from '../../../components/products/CopperPatchPanels';
import KeystoneJacks from '../../../components/products/KeystoneJacks';
import ModulesFaceplates from '@/components/products/ModulesFaceplates';
import { ModuleFaceplate } from '@/types/module-faceplate';
import axios from 'axios';
import Backboxes from '@/components/products/Backboxes';
import { Backbox } from '@/types/backbox';
import TelephoneNetworking from '@/components/products/TelephoneNetworking';
import type { TelephoneNetworking as TelephoneNetworkingType } from '@/types/telephone-networking';
import FloorStandingRacks from '@/components/RacksCabinets/FloorStandingRacks';
import { EnterpriseCopperCable } from '@/types/enterprise-copper-cables';
import { KeystoneJack } from '@/types/keystone';
interface ProductCategory {
    title: string;
    description: string;
    iconType: string;
    iconColor: string;
    features: string[];
    image: string;
    detailedDescription: string;
    specifications: { [key: string]: string };
    additionalImages: string[];
    frames?: {
        name: string;
        partCode: string;
        outlets?: number;
        ports?: number;
        category: string;
        rackUnits: string;
        colour: string;
        mounting: string;
        shielded: boolean;
        height?: string;
        connector?: string;
        connectionType?: string;
        description: string;
    }[];
}
interface EnterpriseCable {
    id: string;
    title: string;
    partNumber: string;
    description: string;
    image: string;
    specifications: {
        performanceLevel: string;
        cableConstruction: string;
        conductorGauge: string;
        conductorType: string;
        flammabilityRating?: string[];
        euroClassFlameRating?: string;
        availableColors: string[];
        numberOfPairs?: string[];
        overallLength?: string;
    };
    features: string[];
    detailedDescription: string;
    additionalImages: string[];
}
interface DefaultCategory {
    title: string;
    description: string;
    image: string;
    detailedDescription: string;
    features: string[];
    specifications: { [key: string]: string };
    additionalImages: string[];
}
export default function CategoryPage() {
    const params = useParams();
    const router = useRouter();
    const category = params.category as string;
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState<ProductCategory | null>(null);
    const [enterpriseCables, setEnterpriseCables] = useState<EnterpriseCable[]>([]);
    const [defaultCategories, setDefaultCategories] = useState<DefaultCategory[]>([]);
    const [selectedDefaultCategory, setSelectedDefaultCategory] = useState<DefaultCategory | null>(null);
    const [showSelectedCategory, setShowSelectedCategory] = useState(false);
    const [keystoneJacks, setKeystoneJacks] = useState<KeystoneJack[]>([]);
    const [connectorsProducts, setConnectorsProducts] = useState<KeystoneJack[]>([]);
    const [copperCables, setCopperCables] = useState<KeystoneJack[]>([]);
    const [modules, setModules] = useState<ModuleFaceplate[]>([]);
    const [backboxes, setBackboxes] = useState<Backbox[]>([]);
    const [items, setItems] = useState<TelephoneNetworkingType[]>([]);
    const [floorStandingRacks, setFloorStandingRacks] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [enterpriseCopperCables, setEnterpriseCopperCables] = useState<EnterpriseCopperCable[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                if (category === 'data-center-copper-cable') {
                    const response = await axios.get('/data/enterpriseCables.json');
                    setEnterpriseCables(response.data);
                } else if (category === 'products-enterprises') {
                    const response = await axios.get('/data/defaultCategories.json');
                    setDefaultCategories(response.data);
                    if (response.data.length > 0) {
                        setSelectedDefaultCategory(response.data[0]);
                    }
                } else if (category === 'enterprise-copper-cables') {
                    const response = await axios.get('/api/enterprise-copper-cables');
                    setEnterpriseCopperCables(response.data);
                }  else if (category === 'keystones-jacks-shutters') {
                    const response = await axios.get('/api/keystone-jackshutters');
                    console.log('Fetched keystone jacks and shutters----',response.data);
                    setKeystoneJacks(response.data);
                } else if (category === 'connectors-products-enterprises') {
                    const response = await axios.get('/api/connectors-products-enterprises');
                    setConnectorsProducts(response.data);
                } else if (category === 'copper-patch-panels-frames') {
                    const response = await axios.get('/api/copper-cables');
                    console.log('Fetched copper cables----',response.data);
                    setCopperCables(response.data);
                } else if (category === 'modules-faceplates') {
                    const response = await axios.get('/api/modules-faceplates');
                    setModules(response.data);
                } else if (category === 'backboxes-floorboxes') {
                    const backboxesResponse = await axios.get('/api/backboxes');
                    setBackboxes(backboxesResponse.data);
                } else if (category === 'telephone-networking') {
                    const response = await axios.get('/api/telephone-networking');
                    setItems(response.data);
                } else if (category === 'floor-standing') {
                    const response = await axios.get('/api/products/floor-standing');
                    setFloorStandingRacks(response.data);
                } else {
                    const response = await axios.get('/data/productCategories.json');
                    const products = response.data;
                    const matchingProduct = products.find(
                        (p: ProductCategory) => p.title.toLowerCase().replace(/\s+/g, '-') === category
                    );
                    if (!matchingProduct) {
                        router.push('/products');
                        return;
                    }
                    setProductData(matchingProduct);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                router.push('/products');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [category, router]);
    const handleBack = () => {
        router.push('/products');
        setShowSelectedCategory(false);
    };
    const handleCategoryBack = () => {
        router.push('/products/products-enterprises');
        setShowSelectedCategory(false);
    };
    const handleCategoryClick = (category: DefaultCategory) => {
        setSelectedDefaultCategory(category);
        setShowSelectedCategory(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const renderDefaultCategoriesList = () => (
        <div className="min-h-screen bg-gray-50 font-inter">
            <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Connectors, Products & Enterprises
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Discover high-performance products designed for modern infrastructure.
                    </p>
                </div>
            </section>
            <>
                {}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {defaultCategories.map((category: any, idx: number) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col"
                            >
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src={category?.image}
                                        alt={category?.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-lg md:text-xl font-bold text-white">{category?.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <p className="text-gray-600 mb-4 text-base leading-relaxed line-clamp-2 flex-1">{category.description}</p>
                                    <button
                                        onClick={() => handleCategoryClick(category)}
                                        className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition-colors font-medium mt-auto"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </div>
    );
    const renderDefaultCategoryDetail = () => {
        if (selectedDefaultCategory) {
            return (
                <>
                    <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Connectors, Products & Enterprises
                            </h1>
                            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                                Discover high-performance products designed for modern infrastructure.
                            </p>
                        </div>
                    </section>
                    <div className="max-width-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <button
                            onClick={handleCategoryBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products & Enterprises</span>
                        </button>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex flex-col md:flex-row md:space-x-8">
                                <div className="md:w-1/2 relative aspect-[4/3] mb-6 md:mb-0">
                                    <Image
                                        src={selectedDefaultCategory.image}
                                        alt={selectedDefaultCategory.title}
                                        fill
                                        className="object-cover rounded-lg"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedDefaultCategory.title}</h1>
                                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedDefaultCategory.detailedDescription}</p>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                                    <ul className="space-y-2 mb-6">
                                        {selectedDefaultCategory?.features?.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start text-gray-700">
                                                <svg
                                                    className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Specifications</h3>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {selectedDefaultCategory?.specifications &&
                                                Object.entries(selectedDefaultCategory?.specifications).map(([key, value]: [string, unknown], idx: number) => (
                                                    <div key={idx} className="border-b border-gray-200 pb-3">
                                                        <h4 className="font-medium text-gray-900">{key}</h4>
                                                        <p className="text-gray-600 mt-1">{String(value)}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {}
                            {selectedDefaultCategory?.additionalImages && selectedDefaultCategory?.additionalImages?.length > 0 && (
                                <div className="mt-10">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {selectedDefaultCategory?.additionalImages?.map((img: string, idx: number) => (
                                            <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                                                <Image
                                                    src={img}
                                                    alt={`${selectedDefaultCategory?.title} - Image ${idx + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )
        }
    }
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 font-inter flex items-center justify-center">
                <Navbar />
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading product details...</p>
                </div>
            </div>
        );
    }
    if (category === 'products-enterprises') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                {showSelectedCategory ? renderDefaultCategoryDetail() : renderDefaultCategoriesList()}
                <Footer />
            </div>
        );
    }
    if (category === 'data-center-copper-cable') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Enterprise Data Center Copper Cable
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Discover high-performance products designed for modern infrastructure.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <EnterpriseCables cables={enterpriseCables} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'keystones-jacks-shutters') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Keystone Jacks & Shutters
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            High-quality keystone jacks and shutters for reliable network connectivity.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <KeystoneJacks jacks={keystoneJacks} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'copper-patch-panels-frames') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Copper Patch Panels & Frames
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            High-quality copper patch panels and frames for reliable network connectivity.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <KeystoneJacks jacks={copperCables} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'connectors-products-enterprises') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Connectors, Products & Enterprises
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            High-quality connectors and enterprise solutions for reliable networking.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <KeystoneJacks jacks={connectorsProducts} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'copper-cables') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Copper Cables
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Reliable copper cabling solutions for structured networks.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <KeystoneJacks jacks={copperCables} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'copper-cables') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Copper Cables
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Reliable copper cabling solutions for structured networks.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <KeystoneJacks jacks={copperCables} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'modules-faceplates') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Modules & Faceplates
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            High-quality modules and faceplates for reliable network connectivity.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <ModulesFaceplates modules={modules} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'backboxes-floorboxes') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Backboxes & Floorboxes
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            High-quality backboxes and floorboxes for secure network installations.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <Backboxes backboxes={backboxes} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'enterprise-copper-cables') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
            <Navbar />
            <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Enterprise Copper Cables
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        High-quality enterprise copper cables for secure network installations.
                    </p>
                </div>
            </section>
            <div className="pt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={handleBack}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                    >
                        <FaArrowLeft />
                        <span>Back to Products</span>
                    </button>
                    <EnterpriseCopperCables cables={enterpriseCopperCables} />
                </div>
            </div>
            <Footer />
        </div>
        );
    }
    if (category === 'telephone-networking') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Telephone Networking
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            High-quality telephone networking solutions for secure network installations.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                        >
                            <FaArrowLeft />
                            <span>Back to Products</span>
                        </button>
                        <TelephoneNetworking items={items} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (category === 'floor-standing') {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <section className="relative h-[275px] bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center justify-center mb-12">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 mt-[2rem] text-center px-4 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Floor Standing Racks
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Bulk pack of floor standing racks with tool-less termination and enhanced performance.
                        </p>
                    </div>
                </section>
                <div className="pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => router.push('/products')}
                            className="group flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-all duration-300 mb-8"
                        >
                            <div className="p-2.5 rounded-xl bg-gray-100/80 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                <FaArrowLeft className="text-sm" />
                            </div>
                            <span className="font-semibold text-sm">Back to Products</span>
                        </button>
                        <FloorStandingRacks racks={floorStandingRacks} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    if (!productData) {
        return (
            <div className="min-h-screen bg-gray-50 font-inter">
                <Navbar />
                <div className="pt-20 text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
                    <p className="mt-4 text-gray-600">The requested product category could not be found.</p>
                    <button
                        onClick={handleBack}
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Return to Products
                    </button>
                </div>
                <Footer />
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            <Navbar />
            <div className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {}
                    <button
                        onClick={handleBack}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
                    >
                        <FaArrowLeft />
                        <span>Back to Products</span>
                    </button>
                    {}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex flex-col md:flex-row md:space-x-8">
                            <div className="md:w-1/2 relative aspect-[4/3] mb-6 md:mb-0">
                                <Image
                                    src={productData?.image}
                                    alt={productData?.title}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">{productData?.title}</h1>
                                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{productData?.detailedDescription}</p>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                                <ul className="space-y-2 mb-6">
                                    {productData?.features?.map((feature: string, idx: number) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                            <svg
                                                className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Specifications</h3>
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {Object?.entries(productData?.specifications || {})?.map(([key, value], idx) => (
                                            <div key={idx} className="border-b border-gray-200 pb-3">
                                                <h4 className="font-medium text-gray-900">{key}</h4>
                                                <p className="text-gray-600 mt-1">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {}
                        {productData?.additionalImages && productData?.additionalImages?.length > 0 && (
                            <div className="mt-10">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {productData?.additionalImages?.map((img, idx) => (
                                        <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                                            <Image
                                                src={img}
                                                alt={`${productData?.title} - Image ${idx + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
```

## File: components/products/KeystoneJacks.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import KeystoneDetail from './KeystoneDetail';
import { KeystoneJack } from '@/types/keystone';
interface KeystoneJacksProps {
  jacks: KeystoneJack[];
}
const KeystoneJacks: React.FC<KeystoneJacksProps> = ({ jacks }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<KeystoneJack | null>(null);
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);
  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };
  const handleViewDetails = (product: KeystoneJack) => {
    setSelectedProduct(product);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  if (selectedProduct) {
    return <KeystoneDetail product={selectedProduct} onBack={handleBack} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
      {jacks.map((jack, idx) => (
        <div
          key={jack.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {jack?.image && (
            <div className="relative h-48 w-full">
              <Image
                src={jack?.image}
                alt={jack.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{jack.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{jack.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Part: {jack.partNumber}</span>
              {
}
              {
}
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={() => handleViewDetails(jack)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
              {
}
            </div>
            {expandedIndex === idx && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <ul className="space-y-1">
                  <li><b>Model:</b> {jack.specifications.model}</li>
                  <li><b>Connector Type:</b> {jack.specifications.connectorType}</li>
                  <li><b>Category:</b> {jack.specifications.category}</li>
                  {}
                  <li><b>Termination Tool Required:</b> {jack.specifications.requiresTerminationTool}</li>
                  <li><b>Suitable for Round Cable:</b> {jack.specifications.suitableForRoundCable}</li>
                  {jack.specifications.performanceLevel && (
                    <li><b>Performance Level:</b> {jack.specifications.performanceLevel}</li>
                  )}
                  {jack.specifications.cableConstruction && (
                    <li><b>Cable Construction:</b> {jack.specifications.cableConstruction}</li>
                  )}
                  {jack.specifications.conductorGauge && (
                    <li><b>Conductor Gauge:</b> {jack.specifications.conductorGauge}</li>
                  )}
                  {jack.specifications.conductorType && (
                    <li><b>Conductor Type:</b> {jack.specifications.conductorType}</li>
                  )}
                  {jack.specifications.overallLength && (
                    <li><b>Overall Length:</b> {jack.specifications.overallLength}</li>
                  )}
                  {jack.specifications.flammabilityRating && (
                    <li><b>Flammability Rating:</b> {jack.specifications.flammabilityRating}</li>
                  )}
                  {jack.specifications.availableColors && jack.specifications.availableColors.length > 0 && (
                    <li><b>Available Colors:</b> {jack.specifications.availableColors.join(', ')}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default KeystoneJacks;
```

## File: components/common/Navbar.tsx
```typescript
'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaSearch, FaUser, FaBars, FaChevronDown } from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import { useLoader } from '@/context/LoaderContext'
import { useAuth } from '@/context/AuthContext'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import LogoutButton from '../auth/LogoutButton'
import "../../styles/globals.css"
interface ProductMenuItem {
  name: string;
  href: string;
  subItems?: ProductSubMenuItem[];
}
interface ProductSubMenuItem {
  name: string;
  href: string;
}
const productMenuItems: ProductMenuItem[] = [
  { name: 'Enterprise Copper Cables', href: '/products/enterprise-copper-cables' },
  {
    name: 'Modules & Faceplates',
    href: '/products/modules-faceplates',
  },
  {
    name: 'Backboxes & Floorboxes',
    href: '/products/backboxes-floorboxes',
  },
  {
    name: 'Telephone Networking',
    href: '/products/telephone-networking',
  },
  {
    name: 'Keystone Jacks & Shutters ',
    href: '/products/keystones-jacks-shutters',
  },
  {
    name: 'Connector,Products & Enterprises ',
    href: '/products/connectors-products-enterprises',
  },
  {
    name: 'Copper Patch Panels & Frames ',
    href: '/products/copper-patch-panels-frames',
  },
];
interface MarketMenuItem {
  name: string;
  href: string;
}
interface RacksAndCabinetsMenuItem {
  name: string;
  href: string;
}
const racksAndCabinetsMenuItems: RacksAndCabinetsMenuItem[] = [
  { name: 'Floor Standing Racks', href: '/racks-and-cabinets/floor-standing' },
  { name: 'Wall Frames', href: '/racks-and-cabinets/wall-frames' },
  { name: 'Open frame racks', href: '/racks-and-cabinets/open-racks' }
];
const marketMenuItems: MarketMenuItem[] = [
  { name: 'Commercial Real Estate', href: '/markets/commercial-real-estate' },
  { name: 'Construction', href: '/markets/construction' },
  { name: 'Education', href: '/markets/education' },
  { name: 'Financial', href: '/markets/financial' },
  { name: 'Food & Beverage', href: '/markets/food-beverage' },
  { name: 'Government IT', href: '/markets/government-it' },
  { name: 'Healthcare', href: '/markets/healthcare' },
  { name: 'Oil & Gas', href: '/markets/oil-gas' },
  { name: 'Transportation', href: '/markets/transportation' },
  { name: 'Warehouse Automation', href: '/markets/warehouse-automation' }
];
interface FibreNetworkingMenuItem {
  name: string;
  href: string;
}
const fibreNetworkingMenuItems: FibreNetworkingMenuItem[] = [
  { name: 'Fibre Cable', href: '/fibre-networking/fibre-cable' },
  { name: 'Fibre Patch Panels', href: '/fibre-networking/fibre-patch-panels' },
  { name: 'Fibre Patch Panel Cassettes', href: '/fibre-networking/fibre-patch-panel-cassettes' },
  { name: 'Fibre Breakout Boxes', href: '/fibre-networking/fibre-breakout-boxes' },
  { name: 'Fibre Patch Boxes', href: '/fibre-networking/fibre-patch-boxes' },
  { name: 'Fibre Connectors & Couplers', href: '/fibre-networking/fibre-connectors-couplers' },
  { name: 'Fibre Attenuators', href: '/fibre-networking/fibre-attenuators' },
  { name: 'Fibre Tools & Accessories', href: '/fibre-networking/fibre-tools-accessories' },
];
interface PowerAndDataMenuItem {
  name: string;
  href: string;
}
const powerAndDataMenuItems: PowerAndDataMenuItem[] = [
  { name: 'Power-PDUs', href: '/power-and-data/power-pdus' },
  { name: 'Power Cords & Extension Leads', href: '/power-and-data/power-cords-extension-leads' },
  { name: 'MPO Fibre Assemblies', href: '/power-and-data/mpo-fibre-assemblies' },
  { name: 'MPO Cassettes', href: '/power-and-data/mpo-cassettes' },
  { name: 'MPO Chassis', href: '/power-and-data/mpo-chassis' },
  { name: 'Fibre Duct', href: '/power-and-data/fibre-duct' },
  { name: 'Data Centre Racks', href: '/power-and-data/data-centre-racks' },
];
export const Navbar = () => {
  const router = useRouter()
  const { user } = useAuth()
  const supabase = useSupabaseClient()
  const isAuthenticated = !!user
  const { showLoader, hideLoader } = useLoader()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // State for dropdown menus
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [isMarketsOpen, setIsMarketsOpen] = useState(false)
  const [isRacksAndCabinetsOpen, setIsRacksAndCabinetsOpen] = useState(false)
  const [isFibreNetworkingOpen, setIsFibreNetworkingOpen] = useState(false)
  const [isPowerAndDataOpen, setIsPowerAndDataOpen] = useState(false)
  // Refs for handling hover behavior
  const productsMenuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const marketsMenuRef = useRef<HTMLDivElement>(null)
  const racksAndCabinetsMenuRef = useRef<HTMLDivElement>(null)
  const fibreNetworkingMenuRef = useRef<HTMLDivElement>(null)
  const powerAndDataMenuRef = useRef<HTMLDivElement>(null)
  // Handle mouse events for dropdown
  const handleProductsMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsProductsOpen(true)
  }
  const handleProductsMouseLeave = () => {
    // Add a small delay before closing the menu to allow movement to submenu
    timeoutRef.current = setTimeout(() => {
      if (!activeSubMenu) {
        setIsProductsOpen(false)
      }
    }, 100)
  }
  // Handle category hover
  const handleCategoryMouseEnter = (categoryName: string) => {
    setActiveSubMenu(categoryName)
  }
  const handleCategoryMouseLeave = () => {
    setActiveSubMenu(null)
  }
  // Handle mouse events for markets dropdown
  const handleMarketsMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsMarketsOpen(true)
  }
  const handleMarketsMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMarketsOpen(false)
    }, 100)
  }
  const handleRacksAndCabinetsMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsRacksAndCabinetsOpen(true)
  }
  const handleRacksAndCabinetsMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsRacksAndCabinetsOpen(false)
    }, 100)
  }
  const handleFibreNetworkingMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsFibreNetworkingOpen(true)
  }
  const handleFibreNetworkingMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsFibreNetworkingOpen(false)
    }, 100)
  }
  const handlePowerAndDataMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsPowerAndDataOpen(true)
  }
  const handlePowerAndDataMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsPowerAndDataOpen(false)
    }, 100)
  }
  // Handle menu close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
        setActiveSubMenu(null)
      }
      if (powerAndDataMenuRef.current && !powerAndDataMenuRef.current.contains(event.target as Node)) {
        setIsPowerAndDataOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const handleLogout = async () => {
    try {
      showLoader()
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      toast.success('Logged out successfully')
      router.push('/login')
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      hideLoader()
    }
  }
  const navigateToCategory = (href: string) => {
    router.push(href)
    setIsProductsOpen(false)
    setActiveSubMenu(null)
  }
  return (
    <nav className="bg-white shadow-xl fixed w-full top-0 z-50 border-b-2 border-telemons-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20 py-2">
          {}
          <div onClick={() => router.push('/')} className="flex-shrink-0 flex items-center pr-8 py-1">
            <Image
              src="/telemons.jpg"
              alt="Telemons Cable"
              width={210}
              height={110}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-300"            />
          </div>
          {}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-telemons-blue-primary hover:text-telemons-orange-primary focus:outline-none transition-colors duration-300"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
          {}
          <div className="hidden md:flex items-center space-x-6">
            {}
            <div
              ref={productsMenuRef}
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button className="flex items-center text-telemons-blue-primary hover:text-telemons-orange-primary font-semibold transition-colors duration-300">
                Copper Systems
                <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {}
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl z-50 py-2 border border-telemons-blue-100">
                  {productMenuItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => handleCategoryMouseEnter(item.name)}
                      onMouseLeave={handleCategoryMouseLeave}
                    >
                      <button
                        className="w-full text-left px-4 py-3 text-sm text-telemons-blue-700 hover:bg-telemons-orange-50 hover:text-telemons-orange-primary flex justify-between items-center transition-all duration-300"
                        onClick={() => navigateToCategory(item.href)}
                      >
                        {item.name}
                        {item.subItems && <FaChevronDown className="h-3 w-3" />}
                      </button>
                      {}
                      {activeSubMenu === item.name && item.subItems && (
                        <div className="absolute left-full top-0 w-64 bg-white rounded-xl shadow-2xl z-50 py-2 border border-telemons-blue-100">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.name}
                              className="w-full text-left px-4 py-3 text-sm text-telemons-blue-700 hover:bg-telemons-orange-50 hover:text-telemons-orange-primary transition-all duration-300"
                              onClick={() => navigateToCategory(subItem.href)}
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {}
            <div
              ref={fibreNetworkingMenuRef}
              className="relative"
              onMouseEnter={handleFibreNetworkingMouseEnter}
              onMouseLeave={handleFibreNetworkingMouseLeave}
            >
              <button className="flex items-center text-telemons-blue-primary hover:text-telemons-orange-primary font-semibold transition-colors duration-300">
                Fibre Networking
                <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${isFibreNetworkingOpen ? 'rotate-180' : ''}`} />
              </button>
              {isFibreNetworkingOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl z-50 py-2 border border-telemons-blue-100">
                  {fibreNetworkingMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-telemons-blue-700 hover:bg-telemons-orange-50 hover:text-telemons-orange-primary transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {}
            <div
              ref={powerAndDataMenuRef}
              className="relative"
              onMouseEnter={handlePowerAndDataMouseEnter}
              onMouseLeave={handlePowerAndDataMouseLeave}
            >
              <button className="flex items-center text-telemons-blue-primary hover:text-telemons-orange-primary font-semibold transition-colors duration-300">
                Power & Data
                <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${isPowerAndDataOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPowerAndDataOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl z-50 py-2 border border-telemons-blue-100">
                  {powerAndDataMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-telemons-blue-700 hover:bg-telemons-orange-50 hover:text-telemons-orange-primary transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {}
            <div className="relative"
              ref={racksAndCabinetsMenuRef}
              onMouseEnter={handleRacksAndCabinetsMouseEnter}
              onMouseLeave={handleRacksAndCabinetsMouseLeave}
            >
              <button className="flex items-center text-telemons-blue-primary hover:text-telemons-orange-primary font-semibold transition-colors duration-300">
                Racks & Cabinets
                <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${isRacksAndCabinetsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isRacksAndCabinetsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl z-50 py-2 border border-telemons-blue-100">
                  {racksAndCabinetsMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-telemons-blue-700 hover:bg-telemons-orange-50 hover:text-telemons-orange-primary transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {}
            <div
              ref={marketsMenuRef}
              className="relative"
              onMouseEnter={handleMarketsMouseEnter}
              onMouseLeave={handleMarketsMouseLeave}
            >
              <button className="flex items-center text-telemons-blue-primary hover:text-telemons-orange-primary font-semibold transition-colors duration-300">
                Markets
                <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${isMarketsOpen ? 'rotate-180' : ''}`} />
              </button>
              {}
              {isMarketsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl z-50 py-2 border border-telemons-blue-100">
                  {marketMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-telemons-blue-700 hover:bg-telemons-orange-50 hover:text-telemons-orange-primary transition-all duration-300"
                      onClick={() => setIsMarketsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about-us" className="text-telemons-blue-primary hover:text-telemons-orange-primary font-semibold transition-colors duration-300">About Us</Link>
          </div>
          {}
          <div className="hidden md:flex items-center space-x-6 pl-6">
            {}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 pl-10 pr-4 py-2 border-2 border-telemons-blue-200 rounded-full text-sm focus:outline-none focus:border-telemons-orange-primary focus:ring-2 focus:ring-telemons-orange-primary/20 shadow-sm transition-all duration-300"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-telemons-blue-400" />
            </div>
            {}
            <div className="flex items-center w-[6.5vw]  space-x-4">
              {isAuthenticated ? (
                <LogoutButton />
              ) : (
                <div className="flex space-x-3">
                  <Link
                    href="/login"
                    className="btn-primary py-4 text-sm  px-4"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="btn-outline-orange text-sm py-3.5 w-[6vw] px-4"
                  >
                    Sign-Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {}
        {}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pb-4 bg-white border-t border-telemons-blue-100`}>
          <div className="flex flex-col space-y-3">
            {}
            <div className="py-2">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full text-telemons-blue-primary hover:text-telemons-orange-primary transition-colors duration-300"
              >
                  <span>Copper Systems</span>
                  <FaChevronDown className={`h-3 w-3 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
              {isProductsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {productMenuItems.map((item) => (
                    <div key={item?.name} className="space-y-2">
                      <Link href={item?.href} className="block text-telemons-blue-600 hover:text-telemons-orange-primary py-1 transition-colors duration-300">
                        {item?.name}
                      </Link>
                      {item?.subItems && (
                        <div className="pl-4 space-y-2">
                          {item?.subItems?.map((subItem) => (
                            <Link
                              key={subItem?.name}
                              href={subItem?.href}
                              className="block text-telemons-blue-500 hover:text-telemons-orange-primary py-1 text-sm transition-colors duration-300"
                            >
                              {subItem?.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {}
            <div className="py-2">
              <button
                onClick={() => setIsFibreNetworkingOpen(!isFibreNetworkingOpen)}
                className="flex items-center justify-between w-full text-telemons-blue-primary hover:text-telemons-orange-primary transition-colors duration-300"
              >
                  <span>Fibre Networking</span>
                  <FaChevronDown className={`h-3 w-3 transition-transform duration-300 ${isFibreNetworkingOpen ? 'rotate-180' : ''}`} />
                </button>
              {isFibreNetworkingOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {fibreNetworkingMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-telemons-blue-600 hover:text-telemons-orange-primary py-1 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {}
            <div className="py-2">
              <button
                onClick={() => setIsPowerAndDataOpen(!isPowerAndDataOpen)}
                className="flex items-center justify-between w-full text-telemons-blue-primary hover:text-telemons-orange-primary transition-colors duration-300"
              >
                  <span>Power & Data</span>
                  <FaChevronDown className={`h-3 w-3 transition-transform duration-300 ${isPowerAndDataOpen ? 'rotate-180' : ''}`} />
                </button>
              {isPowerAndDataOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {powerAndDataMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-telemons-blue-600 hover:text-telemons-orange-primary py-1 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {}
            <div className="py-2">
              <button
                onClick={() => setIsRacksAndCabinetsOpen(!isRacksAndCabinetsOpen)}
                className="flex items-center justify-between w-full text-telemons-blue-primary hover:text-telemons-orange-primary transition-colors duration-300"
              >
                  <span>Racks & Cabinets</span>
                  <FaChevronDown className={`h-3 w-3 transition-transform duration-300 ${isRacksAndCabinetsOpen ? 'rotate-180' : ''}`} />
                </button>
              {isRacksAndCabinetsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {racksAndCabinetsMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-telemons-blue-600 hover:text-telemons-orange-primary py-1 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {}
            <div className="py-2">
              <button
                onClick={() => setIsMarketsOpen(!isMarketsOpen)}
                className="flex items-center justify-between w-full text-telemons-blue-primary hover:text-telemons-orange-primary transition-colors duration-300"
              >
                  <span>Markets</span>
                  <FaChevronDown className={`h-3 w-3 transition-transform duration-300 ${isMarketsOpen ? 'rotate-180' : ''}`} />
                </button>
              {isMarketsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {marketMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-telemons-blue-600 hover:text-telemons-orange-primary py-1 transition-colors duration-300"
                      onClick={() => {
                        setIsMarketsOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about-us" className="text-telemons-blue-primary hover:text-telemons-orange-primary font-semibold transition-colors duration-300">About Us</Link>
            {}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-telemons-blue-200 rounded-full text-sm focus:outline-none focus:border-telemons-orange-primary focus:ring-2 focus:ring-telemons-orange-primary/20 transition-all duration-300"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-telemons-blue-400" />
            </div>
            {}
            {!isAuthenticated && (
              <div className="flex flex-col space-y-2 mt-2">
                <Link
                  href="/login"
                  className="w-full text-center px-4 py-3 text-sm font-semibold text-white bg-telemons-blue-primary hover:bg-telemons-blue-dark rounded-lg transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="w-full text-center px-4 py-3 text-sm font-semibold text-telemons-orange-primary border-2 border-telemons-orange-primary rounded-lg hover:bg-telemons-orange-primary hover:text-white transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
```

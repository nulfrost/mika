import { PrismaClient } from "@prisma-app/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRaw`TRUNCATE users, listings, categories, images, cities, areas, areas_on_users CASCADE;`;
  const categories = await prisma.category.createManyAndReturn({
    data: [
      {
        name: "Furniture",
        description: "Sofas, tables, chairs, beds, shelves, etc.",
      },
      {
        name: "Electronics",
        description:
          "Phones, computers, TVs, audio equipment, cameras, video games & consoles",
      },
      {
        name: "Home Goods",
        description: "Kitchenware, small appliances, home decor, linens, lamps",
      },
      {
        name: "Clothing & Accessories",
        description:
          "Men's, Women's, Children's clothing, shoes, bags, jewelry",
      },
      {
        name: "Baby & Kids",
        description:
          "Toys, strollers, car seats, kid's furniture, clothing specific to this group",
      },
      {
        name: "Books, Movies & Music",
        description:
          "Physical media like books, vinyl records, DVDs, Blu-rays, CDs",
      },
      {
        name: "Sports & Outdoors",
        description: "Bikes, camping gear, exercise equipment, sporting goods",
      },
      {
        name: "Tools & Garden",
        description: "Hand tools, power tools, lawnmowers, gardening supplies",
      },
      {
        name: "Other / Miscellaneous",
      },
    ],
  });

  const cities = await prisma.city.createManyAndReturn({
    data: [
      {
        name: "Toronto",
        province: "Ontario",
      },
    ],
  });

  /**
  * - Toronto
      - City of Toronto
        - Downtown core
        - East Toronto
        - North Toronto
        - West Toronto
      - North York
      - Scarborough
  */
  const areas = await prisma.area.createManyAndReturn({
    data: [
      {
        name: "City of Toronto",
        city_id: 1,
        slug: "city-of-toronto",
      },
      {
        name: "Etobicoke",
        city_id: 1,
        slug: "etobicoke",
      },
      {
        name: "North York",
        city_id: 1,
        slug: "north-york",
      },
      {
        name: "Scarborough",
        city_id: 1,
        slug: "scarborough",
      },
      {
        name: "East York",
        city_id: 1,
        slug: "east-york",
      },
      {
        name: "York",
        city_id: 1,
        slug: "york",
      },
    ],
  });

  console.log({ categories, areas, cities });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

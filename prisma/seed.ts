import { PrismaClient } from "@prisma-app/client";

const prisma = new PrismaClient();

async function main() {
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

  // const preferredAreas = await prisma.preferredArea.createManyAndReturn({
  //   data: [{
  //     name: ""
  //   }]
  // })

  console.log({ categories });
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

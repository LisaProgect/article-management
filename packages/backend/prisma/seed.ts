import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const article = (amount: number = 90) =>
    [...Array(amount)].map((el) => ({
      title: faker.word.adjective(),
      description: faker.lorem.sentence(50),
      createdAt: faker.date.past(),
      updatedAt: faker.date.future(),
    }));
  const password = await argon.hash('12345');
  const alice = await prisma.user.upsert({
    where: { id: '' },
    update: {},
    create: {
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      password: password,
      myArticle: {
        create: article(),
      },
    },
  });
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

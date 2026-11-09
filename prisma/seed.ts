import { Role, Condition } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';
import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('Seeding the database');
  const password = await hash('changeme', 10);
  for (const account of config.defaultAccounts) {
    const role = account.role as Role || Role.USER;
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {
        password,
      },
      create: {
        email: account.email,
        password,
        role,
      },
    });
  }
  for (const data of config.defaultContact) {
    console.log(`  Adding contact: ${JSON.stringify(data)}`);
    await prisma.contact.upsert({
      where: { id: config.defaultContact.indexOf(data) + 1 },
      update: {},
      create: {
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        image: data.image,
        owner: data.owner,
        description: data.description,
      },
    });
  }
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

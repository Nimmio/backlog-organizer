import { auth } from "../auth";
import prisma from "../lib/prisma";

const main = async () => {
  const test = await auth.api.signUpEmail({
    body: {
      email: "demo@demo.com",
      name: "Demo User",
      password: "demodemo",
    },
  });
  console.log("test", test);
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

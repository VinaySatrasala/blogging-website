import { PrismaClient } from "@prisma/client/edge";

export type Bindings = {
  
	DATABASE_URL: string;
	JWT_SECRET: string;
};

export type Variables = {
	userId: string;
	prisma: PrismaClient;
};

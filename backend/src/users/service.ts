import { User } from "@prisma/client";
import { prisma } from "../db";

/**
 * Find a user by their username (e.g username#1234)
 */
export async function findUserByUsername(
  usernameString: string,
  usernameDigits: string
): Promise<User | null> {
  return prisma.user.findFirst({ where: { usernameString, usernameDigits } });
}

/**
 * Create a new user
 */
export async function createUser(
  email: string,
  usernameString: string,
  usernameDigits: string
): Promise<void> {
  await prisma.user.create({ data: { email, usernameString, usernameDigits } });
}

/**
 * Adds a profile picture to an existing user
 */
export async function addProfilePicture(
  id: number,
  profilePicture: string
): Promise<void> {
  await prisma.user.update({
    where: { id },
    data: { profilePicture },
  });
}

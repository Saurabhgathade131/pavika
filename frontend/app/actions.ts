"use server";
import { signIn, signOut } from "../auth";

export async function authenticateGoogle() {
  await signIn("google", { redirectTo: "/" });
}

export async function authenticatePhone(formData: FormData) {
  // Convert formData into a plain object for credentials sign in
  const credentials = Object.fromEntries(formData);
  await signIn("credentials", credentials);
}

export async function logoutUser() {
  await signOut({ redirectTo: "/" });
}

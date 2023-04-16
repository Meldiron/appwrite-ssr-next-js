import "server-only";
import { AppwriteProject, AppwriteService } from "./AppwriteService";
import { cookies } from "next/headers";

export async function getAccount() {
  const sessionNames = [
    "a_session_" + AppwriteProject.toLowerCase(),
    "a_session_" + AppwriteProject.toLowerCase() + "_legacy",
  ];

  const cookieStore = cookies();
  const hash =
    cookieStore.get(sessionNames[0]) ??
    cookieStore.get(sessionNames[1]) ??
    null;
  AppwriteService.setSession(hash ? hash.value : "");

  let account;
  try {
    account = await AppwriteService.getAccount();
  } catch (err) {
    account = null;
  }

  return account;
}

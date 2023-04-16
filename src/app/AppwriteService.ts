import { Account, Avatars, Client } from "appwrite";

export const SsrHostname: string = "next-js.ssr.almostapps.eu";
export const AppwriteHostname: string = "appwrite.next-js.ssr.almostapps.eu";

export const AppwriteEndpoint =
  "https://appwrite.next-js.ssr.almostapps.eu/v1";
export const AppwriteProject = "almostSsr";

const client = new Client();
client.setEndpoint(AppwriteEndpoint).setProject(AppwriteProject);

const account = new Account(client);
const avatars = new Avatars(client);

export const AppwriteService = {
  signOut: async () => {
    await account.deleteSession("current");
  },
  getAccount: async () => {
    return await account.get<any>();
  },
  getAccountPicture: (name: string) => {
    return avatars
      .getInitials(name.split("").reverse().join(""), 256, 256)
      .toString();
  },
  setSession: (hash: string) => {
    const authCookies: any = {};
    authCookies["a_session_" + AppwriteProject] = hash;
    client.headers["X-Fallback-Cookies"] = JSON.stringify(authCookies);
  },
};

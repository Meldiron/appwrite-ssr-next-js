import Auth from "./Auth";
import CardClient from "./CardClient";
import CardServer from "./CardServer";
import Menu from "./Menu";
import { getAccount } from "./page-data";

export default async function Home() {
  const account = await getAccount();

  return (
    <div className="grid-with-side">
      <Menu />

      <main className="main-content">
        <div className="top-cover u-padding-block-end-56">
          <div className="container">
            <div className="u-flex u-gap-16 u-flex-justify-center u-margin-block-start-16">
              <h1 className="heading-level-1">Appwrite Loves Next.js</h1>
              <code className="u-un-break-text" />
            </div>
            <p
              className="body-text-1 u-normal u-margin-block-start-8"
              style={{
                maxWidth: "50rem",
              }}
            >
              This is demo application. Use button below to create account.
              Notice both server-side rendering, and client-side requests are
              authorized. The whole process uses 1st party secure cookies.
            </p>
          </div>
        </div>
        <div className="container u-margin-block-start-negative-56">
          <ul
            className="grid-box"
            style={
              {
                "--grid-gap": "2rem",
                "--grid-item-size": "24rem",
                "--grid-item-size-small-screens": "16rem",
              } as any
            }
          >
            <li>
              <CardServer account={account} />
            </li>
            <li>
              <CardClient />
            </li>
          </ul>
        </div>
        <Auth />
      </main>
    </div>
  );
}

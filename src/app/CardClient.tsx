"use client";

import { useState } from "react";
import Card from "./Card";
import { AppwriteService } from "./AppwriteService";
import { Models } from "appwrite";

export default function CardClient(props: any) {
  const [account, setAccount] = useState<
    undefined | null | true | Models.User<any>
  >(undefined);

  async function fetchAccount() {
    setAccount(true);
    try {
      setAccount(await AppwriteService.getAccount());
    } catch (err: any) {
      setAccount(null);
    }
  }

  const actionElement = (
    <div>
      <div className="status">
        <button onClick={fetchAccount} className="tag">
          <span className="text">Fetch</span>
        </button>
      </div>
    </div>
  );

  return <Card actionElement={actionElement} isCsr={true} account={account} />;
}

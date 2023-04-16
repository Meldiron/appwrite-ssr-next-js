import { Fragment } from "react";
import Card from "./Card";

export default function CardServer(props: any) {
  const { account } = props;

  const actionElement = (
    <div style={{ opacity: "0%" }}>
      <div className="status">
        <button className="tag">
          <span className="text">Fetch</span>
        </button>
      </div>
    </div>
  );

  return <Card actionElement={actionElement} isCsr={false} account={account} />;
}

import { Fragment } from "react";
import Card from "./Card";

export default function CardServer(props: any) {
  const { account } = props;

  const actionElement = <Fragment></Fragment>;

  return <Card actionElement={actionElement} isCsr={false} account={account} />;
}

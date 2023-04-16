import { Fragment } from "react";
import { AppwriteService } from "./AppwriteService";

export default function Card(props: any) {
  const { isCsr, account, actionElement } = props;

  let statusTextElement = <Fragment></Fragment>;

  if (account === undefined) {
    statusTextElement = <Fragment>Not Fetched Yet.</Fragment>;
  } else if (account === null) {
    statusTextElement = <Fragment>You are not signed in.</Fragment>;
  } else if (account === true) {
    statusTextElement = <Fragment>Fetching Account...</Fragment>;
  } else {
    statusTextElement = (
      <Fragment>
        Welcome{" "}
        <code className="u-un-break-text inline-code">{account.$id}</code>
      </Fragment>
    );
  }

  const avatarElement =
    account === undefined || account === true || account === null ? (
      <div
        style={{ "--p-avatar-border-color": "var(--color-neutral-120)" } as any}
        className="avatar is-color-empty"
      />
    ) : (
      <div className="avatar">
        <img
          src={AppwriteService.getAccountPicture(account.$id)}
          alt="Avatar"
        />
      </div>
    );

  return (
    <div
      className={`card ${
        account === undefined || account === true
          ? "card-is-pending"
          : account === null
          ? "card-is-failed"
          : "card-is-complete"
      }`}
    >
      <div className="u-flex u-main-space-between u-cross-center">
        <div className="">
          <div className="eyebrow-heading-3">
            {isCsr ? "Client" : "Server"} Side
          </div>
        </div>

        {actionElement}
      </div>

      <h2 className="heading-level-6 u-margin-block-start-2">
        {statusTextElement}
      </h2>

      <div className="u-flex u-main-space-between u-cross-end u-margin-block-start-40">
        {avatarElement}
        <div
          className={`status ${
            account === undefined || account === true
              ? "is-pending"
              : account === null
              ? "is-failed"
              : "is-complete"
          }`}
        >
          <span className="status-icon" />
        </div>
      </div>
    </div>
  );
}

"use client";

import { Fragment, useState } from "react";
import Dialog from "./Dialog";
import { AppwriteService } from "./AppwriteService";

export default function Auth() {
  const [isLoading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");

  async function onCreateSession(event: any) {
    event.preventDefault();

    const dialog: any = document.getElementById("dialog");

    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: "",
      });

      setModalType("success");
      setModalMessage(
        "Session created! Refresh page to run SSR check, or re-fetch to run CSR cehck."
      );
      dialog.showModal();
    } catch (err: any) {
      setModalType("error");
      setModalMessage(err.message);
      dialog.showModal();
    } finally {
      setLoading(false);
    }
  }

  async function onDeleteSession(event: any) {
    event.preventDefault();

    const dialog: any = document.getElementById("dialog");

    setLoading(true);
    try {
      await AppwriteService.signOut();

      setModalType("success");
      setModalMessage(
        "Session deleted! Refresh page to run SSR check, or re-fetch to run CSR cehck."
      );
      dialog.showModal();
    } catch (err: any) {
      setModalType("error");
      setModalMessage(err.message);
      dialog.showModal();
    } finally {
      setLoading(false);
    }
  }

  const formElement = isLoading ? (
    <div className="loader" />
  ) : (
    <Fragment>
      <form onSubmit={onCreateSession}>
        <button className="button" type="submit">
          Create Anonymous Account
        </button>
      </form>

      <form onSubmit={onDeleteSession}>
        <button className="button is-secondary" type="submit">
          Sign Out
        </button>
      </form>
    </Fragment>
  );

  return (
    <Fragment>
      <div className="container">
        <div className="gradient-border">
          <article
            className="card u-grid u-cross-center u-width-full-line common-section"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--p-card-bg-color)) 0%, hsl(var(--p-card-bg-color)) 12%, hsl(var(--p-body-bg-color)) 100%)",
              border: "none",
            }}
          >
            <div className="u-flex u-flex-vertical u-cross-center u-gap-32 u-margin-block-start-40 u-padding-block-end-56">
              <div className="u-text-center">
                <h2 className="heading-level-3">Manage Authorization</h2>
                <p className="body-text-2 u-bold u-margin-block-start-8">
                  This component is not aware of auth status.
                </p>
              </div>
              <div className="u-flex u-gap-16 u-main-center u-flex-vertical-mobile u-cross-center">
                {formElement}
              </div>
            </div>
          </article>
        </div>
        <div className="u-margin-block-end-50" />
      </div>

      <Dialog modalMessage={modalMessage} modalType={modalType} />
    </Fragment>
  );
}

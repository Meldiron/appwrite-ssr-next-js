"use client";

import { Fragment } from "react";

export default function Dialog(props: any) {
  const { modalType, modalMessage } = props;

  function onCloseModal() {
    const dialog: any = document.getElementById("dialog");
    dialog.close();
  }

  const headerElement =
    modalType === "error" ? (
      <Fragment>
        <div className="avatar is-color-orange is-medium">
          <span className="icon-exclamation" aria-hidden="true" />
        </div>
        <h4 className="modal-title heading-level-5">Error 🚨</h4>
      </Fragment>
    ) : (
      <Fragment>
        <div className="avatar is-color-green is-medium">
          <span className="icon-check" aria-hidden="true" />
        </div>
        <h4 className="modal-title heading-level-5">Success 🎉</h4>
      </Fragment>
    );

  return (
    <div>
      <dialog className="modal is-small" id="dialog">
        <form className="modal-form" method="dialog">
          <header
            className="modal-header u-flex u-gap-12 u-cross-center"
            style={{
              flexDirection: "row",
            }}
          >
            {headerElement}
          </header>
          <div className="modal-content u-small">{modalMessage}</div>
          <div className="modal-footer">
            <div className="u-flex u-main-end u-gap-16">
              <button onClick={onCloseModal} className="button is-secondary">
                <span className="text">Close</span>
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
}

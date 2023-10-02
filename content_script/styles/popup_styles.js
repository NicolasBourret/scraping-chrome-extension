const popupOverlayStyles =
  ".sce-overlay { width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center }";
const popupContainerStyles =
  ".sce-container { padding: 32px 64px; background-color: rgba(255, 255, 255, 1); box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5); border-radius: 4px; display: flex; flex-direction: column; align-items: center; gap: 2rem; position: relative; }";
const popupTitleStyles = ".sce-heading-two { font-size: 2rem; }";
const popupButtonsContainerStyles =
  ".sce-buttons-container { display: flex; justify-content: center; align-items: center; gap: 2rem; }";
const popupConfirmationButtonStyles =
  ".sce-button {  background: rgba(0, 0, 0, 1); color: rgba(255, 255, 255, 1); box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5); border: none; cursor: pointer; font-size: 1rem; padding: 0.5rem 1rem; border-radius: 0.25rem; }";
const popupCancelButtonStyles =
  ".sce-button-cancel {  background: rgba(255, 255, 255, 1); color: rgba(0, 0, 0, 1); box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5); border: none; cursor: pointer; font-size: 1rem; padding: 0.5rem 1rem; border-radius: 0.25rem; }";
const popupCloseButtonStyles =
  ".sce-close-button { width: 1.5rem; height: 1.5rem; background: rgba(0, 0, 0, 1); box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5); border: none; cursor: pointer; border-radius: 50%; position: absolute; right: -2rem; top: -2rem; padding: 0; display: flex; align-items: center; justify-content: center; }";

export const popupStyles =
  popupOverlayStyles +
  popupContainerStyles +
  popupTitleStyles +
  popupButtonsContainerStyles +
  popupConfirmationButtonStyles +
  popupCancelButtonStyles +
  popupCloseButtonStyles;

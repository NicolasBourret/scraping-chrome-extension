const notificationAnimation =
  "@keyframes slidein { from { transform: translateX(200px); } to { transform: translateX(0px); } }";

const notificationContainerStyle =
  ".sce-notification-container { transform: translateX(200px); animation: 0.5s forwards slidein; padding: 0.5rem 1rem; background-color: rgba(255, 255, 255, 1); box-shadow: 0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5); border-radius: 4px; display: flex; flex-direction: column; align-items: center; gap: 1rem; position: fixed; top: 0; right: 0; z-index: 200; }";
const notificationTitleStyles = ".sce-heading-three { font-size: 1rem; }";
const linkStyle =
  ".sce-link { text-decoration: underline!important; color: rgba(0, 0, 0, 1)!important; font-size: 1rem!important; }";

export const notifiactionStyles =
  notificationAnimation +
  notificationContainerStyle +
  notificationTitleStyles +
  linkStyle;

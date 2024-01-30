//@ts-check
(() => {
    const scriptTag = document.currentScript;
    /** @type {any} */
    let myWindow = window;
    /** @type {ChatThingConfig} */
    let config = myWindow.chatThingConfig || {};
    config.botId = config.botId || scriptTag?.dataset.botId || scriptTag?.id;
    config.colour = config.colour || {};
    config.colour.widgetColour = config.colour.widgetColour || "rgb(17 24 39)";
    config.colour.widgetColourInverted =
      config.colour.widgetColourInverted || "rgb(255, 255, 255)";
    config.icon = config.icon || {};
    config.css = config.css || {};
    config.css.widget =
      config.css.widget ||
      `position: fixed;
  z-index: 50;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  bottom: 20px;
  right: 20px;
  background: ${config.colour.widgetColour};
  color: ${config.colour.widgetColourInverted};
  box-shadow: 0px 4px 19px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;`;
    config.svg = config.svg || {};
    config.svg.widget =
      config.svg.widget ||
      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="height: 40px; color: white;">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>`;
    config.css.window =
      config.css.window ||
      `position: fixed;
  z-index: 50;
  bottom: 100px;
  right: 50px;
  width: calc(100vw - 40px);
  height: calc(100vh - 120px);
  max-width: 400px;
  max-height: 600px;
  background: white;
  border-radius: 8px;
  background: rgb(17 24 39);
  box-shadow: 0px 4px 19px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.1);
  display: none;
  overflow: hidden;`;
    config.css.iframe =
      config.css.iframe ||
      `height: 100%;
  width: 100%;
  border: 0;`;
    // console.log("Initialise Chat Thing Widget config:", config);
    if (!config.botId) {
      console.error("ChatThing: no bot id found");
      return;
    }
    const trigger = document.createElement("button");
    trigger.style.cssText = config.css.widget;
    if (config.icon?.widgetIcon) {
      const image = document.createElement("img");
      image.src = config.icon.widgetIcon;
      trigger.appendChild(image);
    } else {
      const iconSVG = config.svg.widget;
      const parser = new DOMParser();
      const svg = parser.parseFromString(iconSVG, "image/svg+xml");
      trigger.appendChild(svg.children[0]);
    }
    let windowOpen = false;
    /** @type {HTMLDivElement | undefined} */
    let chatWindow;
    function createWindow() {
      if (chatWindow) {
        return;
      }
      chatWindow = document.createElement("div");
      chatWindow.style.cssText = config.css.window;
      const iframe = document.createElement("iframe");
      iframe.src = `https://chatthing.ai/bots/${config.botId}/embed${
        config.initialQuestion
          ? `?initialQuestion=${encodeURI(config.initialQuestion)}`
          : ""
      }`;
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "clipboard-write");
      iframe.style.cssText = config.css.iframe;
      chatWindow.appendChild(iframe);
      document.body.appendChild(chatWindow);
    }
    function toggleWindow() {
      if (!windowOpen && chatWindow) {
        chatWindow.style.display = "block";
        windowOpen = true;
      } else if (chatWindow) {
        chatWindow.style.display = "none";
        windowOpen = false;
      }
    }
    trigger.addEventListener("click", () => {
      createWindow();
      toggleWindow();
    });
    document.body.appendChild(trigger);
  })();
  /**
   * configuration structure
   * @typedef {Object} ChatThingConfig
   * @property {string|undefined} botId - a bots unique identifier
   * @property {string|undefined} initialQuestion - a question to ask the assistant when the chat window is opened
   * @property {ChatThingCss} css - css style overrides
   * @property {ChatThingSvg} svg - svg icon overrides
   * @property {ChatThingColour} colour - colour overrides
   * @property {ChatThingIcon} icon - icon overrides
   */
  /**
   * css structure
   * @typedef {Object} ChatThingCss
   * @property {string} widget - css style overrides for the widget trigger button
   * @property {string} window - css style overrides for the chat window
   * @property {string} iframe - css style overrides for the chat iframe
   */
  /**
   * svg structure
   * @typedef {Object} ChatThingSvg
   * @property {string} widget - svg icon for the widget button
   */
  /**
   * colour structure
   * @typedef {Object} ChatThingColour
   * @property {string} widgetColour - background colour for the widget button
   * @property {string} widgetColourInverted - foreground colour for the widget button
   */
  /**
   * icon structure
   * @typedef {Object} ChatThingIcon
   * @property {string} [widgetIcon] - an icon to use for the widget button
   */
  
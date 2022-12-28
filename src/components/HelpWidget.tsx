import { useState } from "react";
import { ChatPannel } from "./ChatPanel";

export type TMessage = {
    message: string;
    id: string;
    sender: string;
  };

export const HelpWidget = () => {
    const [isChatPanelDisplayed, setIsChatPanelDisplayed] = useState(false);
    return isChatPanelDisplayed ? (
        <div
          className="
          fixed bottom-10 right-10
          flex h-96 w-72 flex-col justify-between bg-white p-6"
        >
          {/* <ChatPannel
            text={text}
            setText={setText}
            messages={messages}
            onClose={handleCloseWidget}
            handleSendMessage={handleSendMessage}
          /> */}
        </div>
      ) : (
        <button
        //   onClick={handleOpenSupportWidget}
          className="
            fixed bottom-10 right-10 cursor-pointer bg-blue-400 p-2 px-4
            text-white hover:bg-blue-500
          "
        >
          Speak to us
        </button>
      );
}


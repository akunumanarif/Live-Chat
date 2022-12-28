import { useRef, useState } from "react";
import { ChatPannel } from "./ChatPanel";

export type TMessage = {
    message: string;
    id: string;
    sender: string;
  };

export const HelpWidget = () => {
    const [isChatPanelDisplayed, setIsChatPanelDisplayed] = useState(false);
    const [text, setText] = useState("");
//   const channelRef = useRef<RtmChannel | null>(null);
//   const helpRequestRef = useRef<HelpRequest | null>(null);
//   const { messages, connectTo, sendMessage } = useRTM([
//     {
//       message: "How can I help you?",
//       id: "1324b0asd",
//       sender: "0",
//     },
//   ]);


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
          <button
          className="hover:text-red-400d absolute top-2 right-2"
          onClick={() => setIsChatPanelDisplayed(false)}
        >
          X
        </button>
        </div>
      ) : (
        <button
        onClick={() => setIsChatPanelDisplayed(true)}
          className="
            fixed bottom-10 right-10 cursor-pointer bg-blue-400 p-2 px-4
            text-white hover:bg-blue-500
          "
        >
          Speak to us
        </button>
      );
}


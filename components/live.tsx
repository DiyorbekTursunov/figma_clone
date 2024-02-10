import { useMyPresence, useOthers } from "@/liveblocks.config"
import Live_cursors from "./cursor/live_cursors"
import { CursorMode, Presence } from "@/types/type";
import { useCallback, useState } from "react";
import Cursor_chat from "./cursor/cursor_chat";

const Live = () => {
    const others = useOthers();
    const [{ cursor }, updateMyPresence] = useMyPresence() as Presence;


    const [cursorState, setcursorState] = useState({
        mode: CursorMode.Hidden
    })


    const handelPointerMove = useCallback((event: React.PointerEvent) => {
        event.preventDefault();

        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;

        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({ cursor: { x, y } })
    }, [])



    const handelPointerLeave = useCallback((event: React.PointerEvent) => {
        event.preventDefault();
        updateMyPresence({ cursor: null, massage: null })
    }, [])



    const handelPointerDown = useCallback((event: React.PointerEvent) => {

        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;

        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({ cursor: { x, y } })
    }, [])

    return (
        <div
            onPointerMove={handelPointerMove}
            onPointerLeave={handelPointerLeave}
            onPointerDown={handelPointerDown}
            className="w-full h-screen"
        >
            {cursor && <Cursor_chat
                // cursor={cursor}
                

            />}
            <Live_cursors others={others} />
        </div>
    )
}

export default Live

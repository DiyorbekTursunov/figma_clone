import { LiveCursorProps } from '@/types/type'
import React from 'react'
import Cursor from './cursor'
import { COLORS } from '@/constants'

const Live_cursors = ({ others }: LiveCursorProps) => {
    return others.map(({ connectionId, presence }) => {
        if (!presence?.cursor) return null

        return (
            <Cursor
                key={connectionId}
                color={COLORS[Number(connectionId) % COLORS.length]}
                x={presence.cursor.x}
                y={presence.cursor.y}
                massage={presence.massage}
            />
        )
    })
}

export default Live_cursors

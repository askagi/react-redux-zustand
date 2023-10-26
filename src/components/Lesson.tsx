import { Play, Video } from "lucide-react";

interface LessonProps {
    title: string
    duration: string
    isCurrent?: boolean
    onPlay: () => void
}

export function Lesson({ title, duration, onPlay, isCurrent = false }: LessonProps) {


    return (
        <button
            onClick={onPlay}
            data-active={isCurrent}
            disabled={isCurrent}
            className="flex items-center gap-3 text-sm text-zinc-400 group data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
        >
            {isCurrent ?
                <Play className="w-4 h-4 text-emerald-400" />
                :
                <Video className="w-4 h-4 text-zinc-50" />
            }
            <span>{title}</span>
            <span className="ml-auto font-mono text-sx text-zinc-500 group-data-[active=true]:text-emerald-400">{duration}</span>
        </button>
    )
}
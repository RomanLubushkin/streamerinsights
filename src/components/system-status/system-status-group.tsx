import * as React from "react"
import { SystemStatusLevel } from "./system-status-types"
import { SystemStatusItem } from "./system-status-item"

interface Props {
  title: string;
  items: { level: SystemStatusLevel; title: string; suggestion?: React.ReactElement; }[];
  className?: string;
}

export const SystemStatusGroup: React.FC<Props> = props => {
  const { title, items, className } = props
  return (
    <div className={className}>
      <div className="font-medium mb-2">{title}</div>
      {items.map((it, index) => {
        return (
          <SystemStatusItem
            key={index}
            title={it.title}
            level={it.level}
            suggestion={it.suggestion}
            className="min-w-[18rem] p-4 mb-4 text-stone-300 bg-stone-800 w-full last:mb-0 text-sm shadow"
          />
        )
      })}
    </div>
  )
}
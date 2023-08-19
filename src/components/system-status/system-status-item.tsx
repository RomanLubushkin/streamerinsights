import * as React from "react"
import { SystemStatusLevel } from "./system-status-types"
import { RiErrorWarningFill } from "react-icons/ri"
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"
import { IconType } from "react-icons"
import { clsx } from "clsx"

interface Props {
  title: string;
  level: SystemStatusLevel
  suggestion?: React.ReactElement;
  className?: string;
}

function getRenderingParams(level: SystemStatusLevel): [IconType, string] {
  switch (level) {
    case "success":
      return [AiFillCheckCircle, "bg-green-800 text-green-200"]
    case "warning":
      return [RiErrorWarningFill, "bg-orange-700 text-orange-200"]
    case "error":
      return [AiFillCloseCircle, "bg-red-800 text-red-200"]
  }
}

export const SystemStatusItem: React.FC<Props> = props => {
  const { title, level, suggestion, className } = props
  const [Icon, styles] = getRenderingParams(level)
  return (
    <div className={clsx("flex items-center rounded-lg", className)}>
      <div
        className={clsx("inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg", styles)}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="ml-3 lg:whitespace-nowrap">{title}</div>
      {(level !== "success" && !!suggestion) && (
        <>
          <span className="px-3">—</span>
          {suggestion}
        </>
      )}
    </div>
  )
}
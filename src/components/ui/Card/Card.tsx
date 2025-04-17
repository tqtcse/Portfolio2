import classNames from "../../../utils/hooks/classNames";
import type { CommonProps } from "../../../@types/common";
import type { ReactNode, ComponentPropsWithRef, MouseEvent, Ref } from 'react'

type CardHeader = {
    content?: string | ReactNode
    className?: string
    bordered?: boolean
    extra?: string | ReactNode
}

type CardFooter = {
    content?: string | ReactNode
    className?: string
    bordered?: boolean
}

export interface CardProps
    extends CommonProps,
    Omit<ComponentPropsWithRef<'div'>, 'onClick'> {
    clickable?: boolean
    header?: CardHeader
    bodyClass?: string
    footer?: CardFooter
    bordered?: boolean
    ref?: Ref<HTMLDivElement>
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

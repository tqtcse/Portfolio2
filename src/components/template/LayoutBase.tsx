import type { CommonProps } from '../../@types/common'
import type { LayoutContextProps } from '../../utils/hooks/useLayout'

type LayoutBaseProps = CommonProps & LayoutContextProps

const LayoutBase = (props: LayoutBaseProps) => {
    const {
        children,
        className,
        type,
    } = props



    return (
        <div className={className}>{children}</div>
    )
}

export default LayoutBase
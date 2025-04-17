import type { CommonProps } from "../../@types/common"
import classNames from "../../utils/hooks/classNames"

const Header = (props: CommonProps) => {
    const {
        className,
    } = props
    console.log(classNames('header', className))
    return (
        // <header
        //     className={classNames('header', className)}
        // >

        // </header>
        // <header className={classNames(className)}>
        //     <div
        //         // className={classNames('header-wrappe', 'container mx-auto')}
        //         style={{ height: 25 }}
        //     >

        //     </div>
        // </header>
        <header className={'shadow'}>
            <div
                // className={classNames('header-wrappe', 'container mx-auto')}
                style={{ height: 25 }}
            >

            </div>
        </header>
    )
}

export default Header
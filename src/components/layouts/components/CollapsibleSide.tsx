import LayoutBase from "../../template/LayoutBase"
import { CommonProps } from "../../../@types/common"
import Header from "../../template/Header"
const CollapsibleSide = () => {

    return (
        <LayoutBase
            type='collapsibleSide'
            className="app-layout-collapsible-side flex flex-auto flex-col"
        >
            <div className="flex flex-auto min-w-0">
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
                    <Header
                        className="fixed top-0 left-0 h-screen w-[60px] shadow-sm dark:shadow-2xl flex flex-col bg-white dark:bg-gray-900 z-50"
                    />
                </div>
            </div>
        </LayoutBase >
    )

}

export default CollapsibleSide
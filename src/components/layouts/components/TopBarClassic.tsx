import LayoutBase from "../../template/LayoutBase"
import Header from "../../template/Header"
import { CommonProps } from "../../../@types/common"
const TopBarClassic = ({ children }: CommonProps) => {

    return (
        <LayoutBase
            type={'topBarClassic'}
            className="app-layout-top-bar-classic flex flex-auto flex-col min-h-screen"

        >
            <div className="flex flex-auto min-w-0">
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
                    <Header
                        className="shadow-sm dark:shadow-2xl"
                    >

                    </Header>
                    <div className="pt-[65px]">
                        {children}
                    </div>
                </div>

            </div>
        </LayoutBase>

    )
}

export default TopBarClassic
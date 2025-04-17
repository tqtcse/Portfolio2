import LayoutBase from "../../template/LayoutBase"
import Header from "../../template/Header"

const TopBarClassic = () => {

    return (
        <LayoutBase
            type={'topBarClassic'}
            className="app-layout-top-bar-classic flex flex-auto flex-col min-h-screen"

        >
            <div className="flex flex-auto min-w-0">
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
                    <Header
                        className="shadow"
                    >

                    </Header>
                    Hi
                </div>

            </div>
        </LayoutBase>

    )
}

export default TopBarClassic
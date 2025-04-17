import { Suspense, lazy } from "react";
import type { LazyExoticComponent, JSX } from 'react'
import type { CommonProps } from "../../@types/common";


type Layouts = Record<
    string,
    LazyExoticComponent<<T extends CommonProps>(props: T) => JSX.Element>
>

const layouts: Layouts = {
    ['topBarClassic']: lazy(() => import('./components/TopBarClassic')),
}

const Layouts = () => {
    const AppLayout = layouts['topBarClassic']

    return (
        <header className={'shadow'}>
        <div
            // className={classNames('header-wrappe', 'container mx-auto')}
            style={{ height: 25 }}
        >

        </div>
    </header>
    )
}

export default Layouts
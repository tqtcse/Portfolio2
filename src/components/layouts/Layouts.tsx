import { Suspense, lazy } from "react";
import type { LazyExoticComponent, JSX } from 'react'
import type { CommonProps } from "../../@types/common";


type Layouts = Record<
    string,
    LazyExoticComponent<<T extends CommonProps>(props: T) => JSX.Element>
>

const layouts: Layouts = {
    ['collapsibleSide']: lazy(() => import('./components/CollapsibleSide')),
    ['topBarClassic']: lazy(() => import('./components/TopBarClassic')),
}

const Layouts = ({ children }: CommonProps) => {
    const AppLayout = layouts['topBarClassic']

    return (
        // <header className="shadow"
        // style={{ height: 25 }}>

        // </header>
       <AppLayout>
            {children}
       </AppLayout>
    )
}

export default Layouts
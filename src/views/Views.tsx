import Home from "./Home/Home"
import Info from "./Info/Info"
import { Routes, Route } from 'react-router-dom'

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
        </Routes>
    )
}

export default Views

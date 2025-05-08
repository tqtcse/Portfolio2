import { render, screen } from '@testing-library/react'
import LayoutBase from '../../../../components/template/LayoutBase'


describe('LayoutBase', () => {
    it('renders children correctly', () => {
        render(
            <LayoutBase className='test-class' type="topBarClassic">
                <p>Test Content</p>
            </LayoutBase>
        )
        expect(screen.getByText('Test Content')).toBeInTheDocument()
    })
})
import HeaderInfo from './HeaderInfo'
import BodyInfo from './BodyInfo';
import FooterInfo from './FooterInfo';

const Info = () => {
    return (
        <div>

            <HeaderInfo />
            <div className='mt-5'>
                <BodyInfo />
            </div>
            <FooterInfo />
        </div>
    );
};

export default Info;

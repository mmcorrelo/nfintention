import { InferProps } from 'prop-types';
import Home from '../../components/Home';

const propTypes = {};

const HomeContainer = (props: InferProps<typeof propTypes>) => {
    return (
        <Home />
    );
}

HomeContainer.propTypes = propTypes;

export default HomeContainer;
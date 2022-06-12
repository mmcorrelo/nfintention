import { InferProps } from 'prop-types';
import Home from '../components/Home';

import styles from './Home.container.module.scss';

const propTypes = {};

const HomeContainer = (props: InferProps<typeof propTypes>) => {
    return (
        <Home />
    );
}

HomeContainer.propTypes = propTypes;

export default HomeContainer;
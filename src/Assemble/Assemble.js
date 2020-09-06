import React from 'react';
import './Assemble.css';
import Footer from '../Footer/Footer';
import Start from '../Start/Start';
import Hearts from '../Hearts/Hearts';
import Counter from '../Counter/Counter';

const Assemble = () => {
    // const systemInfo = useContext(ApiContext);

    return (
        <>
            <main>
                <Counter />
                <Hearts />
                <Start />
            </main>
            <Footer />
            </>
    );
};

export default Assemble;

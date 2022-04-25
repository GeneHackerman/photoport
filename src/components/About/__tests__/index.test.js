import React from 'react';

//render function will render component
//cleanup function is used to remove components from DOM to prevent memory leak
// as well as variable or data collisions between tests that could corrup results
import { render, cleanup } from '@testing-library/react';


import '@testing-library/jest-dom/extend-expect';

// this allows for About component to be tested
import About from '..';

//this ensures no leftover memory data that can yield false results
afterEach(cleanup);
describe('About component', () => {
    //renders About test
    // first test
    it('renders', () => {
        render(<About />);
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})


import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import SecondPageBanner from './secondPageBanner';
import One8WithIcon from './one8WithIcon';
import LegendComponent from './legendComponent';

const WhoAreWe = () => {
    return (
        <>
            <Navbar></Navbar>
            <SecondPageBanner></SecondPageBanner>
            <One8WithIcon></One8WithIcon>
            <LegendComponent></LegendComponent>
        </>
    );
};

export default WhoAreWe;

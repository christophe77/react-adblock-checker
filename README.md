# react-adblock-checker

Check if browser has any adblocker enabled.

## Installation

    yarn add react-adblock-checker
    or
    npm i react-adblock-checker

## Usage

Edit your App file and import the package

    import useAdBlockChecker from 'react-adblock-checker';

Get the adblocker status like this :

    const { isAdBlockActive } = useAdBlockChecker();

isAdBlockActive is a boolean giving you the adblocker status.
# react-adblock-checker

Check if browser has any adblocker enabled.

## Installation

    yarn add react-adblock-checker
    or
    npm i react-adblock-checker

## Usage

Import the package in any js / jsx / ts / tsx file

    import useAdBlockChecker from 'react-adblock-checker';

Get the adblocker status like this :

    const { isAdBlockActive } = useAdBlockChecker();

isAdBlockActive is a boolean giving you the adblocker status.
No need to use a useEffect hook, the variable changes by itself.

Example :

    const Example = () => {
        const { isAdBlockActive } = useAdBlockChecker()

        return <h1>Adblocker enabled : {isAdBlockActive.toString()}</h1>
    }
    export default Example
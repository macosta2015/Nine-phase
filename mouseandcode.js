const puppeteer = require('puppeteer');
require('dotenv').config();

const { launchBrowserAndNavigateToDocument } = require('./components/launchBrowserAndNavigate.js');
const { performTest } = require('./components/newSketch.js');
const { clickButtonByIndex } = require('./components/clickButtonByIndex.js');
const copySketchFunction = require('./components/copySketchFunction.js');
const { performRightClickOptionByTitle } = require('./components/performRightClickOptionByTitle.js');




(async () => {
    try {

        //LAUNCH BROWSER AND LOGIN
        const newPage = await launchBrowserAndNavigateToDocument(); // This line should return a newPage object


        //NEW SKETCH
        await performTest(newPage);


        //ALL THE CODE TOGETHER
        const desiredIndex = 5; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex);
        //Right click option
        const selector = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        const title = 'First Sketch'; // Replace with the desired title
        const editOptions3 = await performRightClickOptionByTitle(newPage, selector, title);
        console.log(editOptions3);


        // const desiredOption = 'Copy sketch'; //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
        copySketchFunction(editOptions3, newPage);



        // const desiredOption = 'Copy sketch'; //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
        // console.log('Desired rename option:', desiredOption);
        // await new Promise(resolve => setTimeout(resolve, 5000));

        // console.log('Searching for index of desired option...');
        // await new Promise(resolve => setTimeout(resolve, 5000));
        // const desiredOptionIndex = editOptions3.indexOf(desiredOption);
        // console.log('Index of desired  option:', desiredOptionIndex);
        // await new Promise(resolve => setTimeout(resolve, 5000));

        // if (desiredOptionIndex !== -1) {
        //     console.log('Desired rename option found.');
        //     await new Promise(resolve => setTimeout(resolve, 5000));

        //     console.log('Evaluating option element... ', desiredOption);
        //     const renameOptionElement = await newPage.evaluateHandle((index) => {
        //         const menuItems = document.querySelectorAll('.context-menu-item-span');
        //         return menuItems[index];
        //     }, desiredOptionIndex);
        //     await new Promise(resolve => setTimeout(resolve, 5000));

        //     if (renameOptionElement) {
        //         console.log('Option element found.', desiredOption);
        //         await new Promise(resolve => setTimeout(resolve, 5000));
        //         await renameOptionElement.click();
        //         console.log(`Clicked on ${desiredOption} option element.`);
        //         await new Promise(resolve => setTimeout(resolve, 5000));
        //     } else {
        //         console.error(`${desiredOption} option element not found.`);
        //         await new Promise(resolve => setTimeout(resolve, 5000));
        //     }
        // } else {
        //     console.error(`${desiredOption} option not found.`);
        //     await new Promise(resolve => setTimeout(resolve, 5000));
        // }
        // console.log('Waiting 10 seconds.');
        // await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds







        //SELECT SKETCH RIGHT CLICK OPTIONS TO UNCLICK
        // console.log('RIGHT CLICK OPTIONS:');


        console.log('Waiting 10 seconds.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds


        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });

        console.log('Waiting 10 seconds. AFTER ALL THE MESS');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds

        const desiredIndex1 = 6; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex1);
        //Right click option
        const selector1 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title1 = 'Second Sketch'; // Replace with the desired title
        const editOptions1 = await performRightClickOptionByTitle(newPage, selector1, title1);
        console.log(editOptions1);








        // RIGHT CLICK 
        //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
        const desiredOption2 = 'Paste into sketch'; //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
        console.log('Desired rename option:', desiredOption2);
        await new Promise(resolve => setTimeout(resolve, 5000));

        console.log('Searching for index of desired option...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        let desiredOptionIndex2 = editOptions1.indexOf(desiredOption2);
        console.log('Index of desired  option:', desiredOptionIndex2);
        await new Promise(resolve => setTimeout(resolve, 5000));

        if (desiredOptionIndex2 !== -1) {
            console.log('Desired rename option found.');
            await new Promise(resolve => setTimeout(resolve, 5000));

            console.log('Evaluating option element... ', desiredOption2);
            const renameOptionElement = await newPage.evaluateHandle((index) => {
                const menuItems = document.querySelectorAll('.context-menu-item-span');
                return menuItems[index];
            }, desiredOptionIndex2);
            await new Promise(resolve => setTimeout(resolve, 5000));

            if (renameOptionElement) {
                console.log('Option element found.', desiredOption2);
                await new Promise(resolve => setTimeout(resolve, 5000));
                await renameOptionElement.click();
                console.log(`Clicked on ${desiredOption2} option element.`);
                await new Promise(resolve => setTimeout(resolve, 5000));
            } else {
                console.error(`${desiredOption2} option element not found.`);
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        } else {
            console.error(`${desiredOption2} option not found.`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
        console.log('Waiting 12 seconds.');
        await new Promise(resolve => setTimeout(resolve, 12000)); // Wait for 10 seconds






        // Typing "First Sketch"
        console.log('Typing "First Sketch"...');
        await newPage.keyboard.type('First Sketch');
        await new Promise(resolve => setTimeout(resolve, 5000));



        //COMMAND FOR SEARCHING TRANSFORM AND THEN CLICKING ON IT 
        console.log('//COMMAND FOR SEARCHING TRANSFORM AND THEN CLICKING ON IT ');
        await newPage.click('button.command-search-trigger');
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log('Waited for 3 seconds.');

        await newPage.type('.os-search-box-input', 'transform');
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log('Typed "transform" into the search input field.');

        await newPage.keyboard.press('Enter');
        await newPage.mouse.move(290, 311);
        await newPage.mouse.down({ button: 'left' });
        console.log('Mouse clicked and held at X:290, Y:311');
        await new Promise(resolve => setTimeout(resolve, 3000));

        const readline = require('readline');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        console.log('Please press the Enter key to continue...');
        const enterPromise = new Promise(resolve => rl.once('line', resolve));
        await enterPromise;
        console.log('User pressed Enter to continue.');

        await newPage.evaluate(() => {
            document.addEventListener('mousemove', (event) => {
                console.log(`Mouse coordinates: X = ${event.clientX}, Y = ${event.clientY}`);
            });
        });

        console.log('Move the mouse over the page to see the coordinates...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('Script completed successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();

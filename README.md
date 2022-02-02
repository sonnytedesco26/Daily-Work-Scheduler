# Daily-Work-Scheduler
LINK:
https://sonnytedesco26.github.io/Daily-Work-Scheduler/

For this project, the goal was to create a daily work scheduler using jquery to have localstorage save tasks, along with keep track of the time passing in the given day.

## Main Page 
![3pmExample](/assets/images/3pmExample.png)

The main page presents the user with the Title and current date (along with day of week) at the top of the screen. Directly below it is the timeline of the given workday (9AM-5PM) left blank. Depending on what time you are viewing the application the hour blocks will change their color - greyed out for past, red for current, and green for future. This was done by taking each object with a ".time-block" class and applying a function to it taking out the time related to the specific block (done by putting it into the id). There is an if/else if statement comparing the id time with the current time (declared variable using the Jquery currentTime function). Depending on the current time's value, classes will be removed/added to each div with the "time-block" class. There was an issue initially with doing the time comparisons where times wouldn't be appropriately compared - this was due to times such as 9AM being compared to times like 1PM, where the parsed int would make it such that 9AM > 1PM. This was fixed by implementing military time, such that 1PM would be 13:00, and etc. Thanks to col-12 type formatting and flex, the window is able to be resized and maintain readability.

## Save button
![localStorageExample](/assets/images/localStorageExample.png)

For the save button, there is a click(function()) added to the button with the class ".saveBtn". This takes the id attribute of the parent (the time for the block) and the value of the ".description" class also within the div (the inputted task text), and creates new object into the localStorage. At the bottom of the JS script, each time block description's value is displayed by getting the item from localStorage associated with the time block's ID.
# Visualize Data with a Bar Chart
-----------------------------------

# ========================================================================================= #

# Bar Chart Project

## Overview

The Bar Chart project is an interactive data visualization that showcases the Gross Domestic Product (GDP) of the United States over a specific time period. Using D3.js (Data-Driven Documents), this project creates a visually appealing and informative bar chart that helps users understand the fluctuations in the US GDP.

## Features

- Interactive bar chart display with clickable bars for detailed information.
- Tooltip functionality for displaying specific data values on hover.
- Utilization of D3.js library to create dynamic and visually engaging charts.
- Custom font "Maragsa" applied for a unique and stylish typography.

## Technologies Used

- HTML
- CSS (styles.css)
- JavaScript (app.js)
- D3.js library for creating interactive and dynamic data visualizations.
- Custom font "Maragsa" for enhancing the typography.

## Getting Started

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser.
3. Explore the bar chart displaying the United States GDP data.

## Usage

1. Upon opening the app, you'll see a title indicating "United States GDP."
2. The bar chart will visualize the GDP values over a specific time period.
3. Hover over a bar to see a tooltip with detailed GDP information for that year.
4. Click on a bar to dive deeper into the data associated with that year.


## Acknowledgements

- Data sourced from reliable sources to ensure accurate visualization.
- D3.js library used for creating interactive and dynamic bar charts.
- Custom font "Maragsa" enhances the aesthetics and readability of the project.

# ============================================================================================== #

Objective: Build an app that is functionally similar to this: https://bar-chart.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://github.com/d3/d3/blob/master/API.md#axes-d3-axis. Required DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

User Story #1: My chart should have a title with a corresponding id="title".

User Story #2: My chart should have a g element x-axis with a corresponding id="x-axis".

User Story #3: My chart should have a g element y-axis with a corresponding id="y-axis".

User Story #4: Both axes should contain multiple tick labels, each with a corresponding class="tick".

User Story #5: My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.

User Story #6: Each .bar should have the properties data-date and data-gdp containing date and GDP values.

User Story #7: The .bar elements' data-date properties should match the order of the provided data.

User Story #8: The .bar elements' data-gdp properties should match the order of the provided data.

User Story #9: Each .bar element's height should accurately represent the data's corresponding GDP.

User Story #10: The data-date attribute and its corresponding .bar element should align with the corresponding value on the x-axis.

User Story #11: The data-gdp attribute and its corresponding .bar element should align with the corresponding value on the y-axis.

User Story #12: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

User Story #13: My tooltip should have a data-date property that corresponds to the data-date of the active area.

Here is the dataset you will need to complete this project: https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js.

Once you're done, submit the URL to your working project with all its tests passing.
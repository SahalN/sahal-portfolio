---
title: "BMKG Web Scraping"
date: "2022-04-19"
image: "/images/bmkg.svg"
---

<!-- @format -->

### Project Name

SHL Indonesia Earthquake's Report

### Short Description

A terminal-based application that scrapes earthquake data from the BMKG website and provides users with detailed, up-to-date information about seismic events in Indonesia.

### Purpose and Background

This project addresses the need for quick and straightforward access to earthquake data for researchers, developers, and anyone interested in monitoring seismic activities. By leveraging data from BMKG, the application ensures users can access real-time earthquake reports directly from the terminal.

### Technologies Used

- **Programming Language:** Python
- **Libraries:** BeautifulSoup for web scraping, Requests for HTTP requests
- **Data Source:** BMKG (Indonesian Meteorological, Climatological, and Geophysical Agency) website

### Key Features

- Scrapes and displays the latest earthquake data, including magnitude, location, and depth.
- Provides a simple terminal-based interface for ease of use.
- Enables users to filter data by date or region.
- Supports exporting data to text or CSV files for offline analysis.

### Challenges and Solutions

- **Challenge:** Adapting to BMKG website structure changes.  
  **Solution:** Designed the scraper to be modular and easily updatable to accommodate changes in the website's HTML structure.

- **Challenge:** Handling frequent data requests without overwhelming the server.  
  **Solution:** Implemented rate-limiting and caching mechanisms to reduce redundant requests.

### Roles and Responsibilities

- **Project Developer:** Muhammad Sahal Nurdin  
  Responsible for designing, coding, and testing the scraper, as well as ensuring the accuracy and reliability of the data extraction process.

### Outcomes and Impact

- Streamlined access to BMKG earthquake data for terminal users.
- Increased efficiency in monitoring seismic activities without relying on a web browser.
- Enhanced usability for developers and researchers working in data analysis or disaster response.

### Future Development

- Adding more detailed filters, such as time range and magnitude thresholds.
- Enhancing output formats with options for JSON and XML.
- Integrating geospatial visualizations directly into the terminal using libraries like `matplotlib`.
- Expanding functionality to include other disaster-related data from BMKG.

# OpenRoomRU - Rutgers Classroom Availability Website  

OpenRoomRU is a **web application** that allows Rutgers University students to **query classroom schedules** for a specific **room and day**. It provides an easy-to-use interface to check when a room is occupied, helping students find available study spaces.  

This website is directly related to the **OpenRoomRU Discord bot**, which offers similar functionality within Discord. Both tools retrieve data from the **Rutgers Schedule of Classes** to provide accurate and up-to-date room availability.  

## 🚀 Features  

- 🔍 **Room & Day Querying**: Search for a specific classroom's schedule based on the selected day.  
- 📅 **Interactive Schedule Display**: View booked time slots for each room in an easy-to-read format.  
- ⚡ **Fast & Efficient**: Uses **SQLite3** for quick lookups of stored class schedules.  
- 🖥️ **Web-Based Interface**: Designed with **Angular** for a clean and responsive experience.  

## 🛠️ Tech Stack  

- **Frontend**: Angular  
- **Backend**: Node.js & Express  
- **Database**: SQLite3  
- **Web Scraping**: Python (used in the Discord bot to collect schedule data)  

## 📌 How It Works  

1. **Data Collection**  
   - Class schedule data is scraped from the **Rutgers Schedule of Classes** using Python (as implemented in the OpenRoomRU Discord bot).  
   - The scraped data is stored in an **SQLite3 database** for efficient querying.  

2. **Query System**  
   - Users enter a **room code** and select a **day**.  
   - The backend retrieves all scheduled class times for that room and returns the results.  

3. **Schedule Display**  
   - The frontend presents the schedule in an **interactive format**, making it easy to view available time slots.  

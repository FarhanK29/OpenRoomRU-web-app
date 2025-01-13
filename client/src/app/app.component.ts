import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  roomCode: string = '';
  dayOfWeek: string = '';
  roomBookings: any[] = []; // This will hold the bookings data

  getRoomSchedule() {
    // Here you can make an HTTP request to the backend
    // For now, I'll just mock the data.
    this.roomBookings = [
      {
        start: new Date(), // Replace with actual start time
        end: new Date(),   // Replace with actual end time
        title: 'Math Class'
      },
      // Add more mocked events
    ];
  }
}

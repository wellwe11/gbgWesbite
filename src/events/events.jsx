import "./styles/events.css";

export default function Events({ activeTab }) {
  const tempEvents = [
    {
      artistName: "Michael Jacksson wtf so cool",
      genre: "Pop",
      liveCity: "Trolhhättan omg",
      date: "2025/03/01",
    },
    {
      artistName: "david guetta :O",
      genre: "techno",
      liveCity: "Trolhhättan igen wtf???",
      date: "2025/05/05",
    },
  ];

  return (
    <div className="eventsContainer">
      <div>{activeTab}</div>
      <div className="eventsWrapper">
        {tempEvents.map((event, index) => (
          <div className="uniqueEventWrapper" key={index}>
            <div className="eventHeader">
              <div>{event.artistName}</div>
              <div>{event.genre}</div>
            </div>
            <div className="eventBody">
              <div>{event.liveCity}</div>
              <div>{event.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

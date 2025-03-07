import "./styles/events.css";

export default function Events({ activeTab }) {
  const tempEvents = [
    "Michael Jacksson wtf so cool",
    "The lonely island ????",
    "Rögglefanterna",
    "1",
    "2",
    "3",
    "4",
    "5",
  ];

  return (
    <div className="eventsContainer">
      <div>{activeTab}</div>
      <div className="eventsWrapper">
        {tempEvents.map((event, index) => (
          <div className="uniqueEventWrapper" key={index}>
            {event}
          </div>
        ))}
      </div>
    </div>
  );
}

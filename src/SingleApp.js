import { useMemo, useState } from "react";
import "./SingleApp.scss";
import Input from "./components/UI/Input/Input";
import UserCard from "./components/UserCard/UserCard";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { useAppStore } from "./context";
import Winner from "./components/Winner/Winner";
function App() {
  const [searching, setSearching] = useState("");
  const [{ participants }] = useAppStore();
  const currentParticipants = useMemo(
    () =>
      participants.filter(
        (item) =>
          item.firstName.toLowerCase().includes(searching.toLowerCase()) ||
          item.id.includes(searching)
      ),
    [participants, searching]
  );
  return (
    <div className="single-app">
      <main>
        <Input
          placeholder={"Enter paticipiant name..."}
          id={"searching"}
          onChange={(e) => {
            setSearching(e.target.value);
          }}
          value={searching}
        />
        {currentParticipants.map((participant) => (
          <UserCard
            text={"Delete"}
            participant={participant}
            key={participant.id}
          />
        ))}
      </main>
      <aside>
        <RegistrationForm title="Registration user" />
        <Winner />
      </aside>
    </div>
  );
}

export default App;

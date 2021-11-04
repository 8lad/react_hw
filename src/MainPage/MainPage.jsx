import { useMemo, useState } from "react";
import "./MainPage.scss";
import Input from "../components/UI/Input/Input";
import CompetitionCard from "../components/CompetitionCard/CompetitionCard";
import { useAppStore } from "../context";

function MainPage() {
  const [searching, setSearching] = useState("");
  const [{ competitions }] = useAppStore();
  const currentCompetitions = useMemo(
    () =>
      competitions.filter((item) =>
        item.competitionName.toLowerCase().includes(searching.toLowerCase())
      ),
    [competitions, searching]
  );
  return (
    <div className="main-page">
      <Input
        placeholder={"Enter competition name..."}
        id={"searching"}
        onChange={(e) => {
          setSearching(e.target.value);
        }}
        value={searching}
      />
      {currentCompetitions.map((competition) => (
        <CompetitionCard
          text={"Show"}
          competition={competition}
          key={competition.competitionId}
        />
      ))}
    </div>
  );
}

export default MainPage;

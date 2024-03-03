import MemberCard from "../components/memberCard";
import players from "../assets/SquadTexts/Squad.tsx";
const Kadra = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-2 mx-4">
        {players.map((player) => (
          <MemberCard name={player.name} number={player.number} position={player.position}/>
        ))}
      </div>
    </>
  );
}
export default Kadra;
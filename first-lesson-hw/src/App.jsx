import "./App.css";
import RenderBiography from "./functions/RenderBiography";

export default function App() {
  const hobbies = ["sports", "reading", "computer programming"];
  const workingExperience = ["Sales consultant - 1 year"];
  const skills = ["HTML: 4","CSS: 4", "JS: 3", "English: 4", "Ukrainian: 5"]
  return (
    <RenderBiography
      name="Mariia H"
      hobbies={hobbies}
      workingExperience={workingExperience}
      skills={skills}
      email="mail@email.ua"
    />
  );
}

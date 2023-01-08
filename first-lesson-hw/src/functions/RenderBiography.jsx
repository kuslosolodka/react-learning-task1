export default function RenderBiography({
  name,
  hobbies,
  workingExperience,
  skills,
  email,
}) {
  return (
    <>
      <body>
        <main>
          <div className="biography_block">
            <h1 className="bio-title-item">About yourself</h1>
            <p className="bio-name-item">My name: {name}</p>
            <ul className="bio-hobby-block">
              {" "}
              My hobbies:
              {hobbies.map((hobby) => {
                return (
                  <li className="bio-hobby-block-item" key={hobby}>
                    {hobby}
                  </li>
                );
              })}
            </ul>
            <p className="bio-working-exp-item">
              My working experience: {workingExperience}
            </p>
            <ul className="bio-skills-block">
              My skills:
              {skills.map((skill) => {
                return (
                  <li className="bio-skills-block-item" key={skill}>
                    {skill}
                  </li>
                );
              })}
            </ul>
            <a className="bio-email-item" href={`mailto: ${email}`}>
              My email
            </a>
          </div>
        </main>
      </body>
    </>
  );
}

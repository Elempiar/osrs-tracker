import { FORMATTED_SKILL_NAMES } from "osrs-json-hiscores/lib/utils/constants";

const skillsOrdered = [
  "attack",
  "hitpoints",
  "mining",
  "strength",
  "agility",
  "smithing",
  "defence",
  "herblore",
  "fishing",
  "ranged",
  "thieving",
  "cooking",
  "prayer",
  "crafting",
  "firemaking",
  "magic",
  "fletching",
  "woodcutting",
  "runecraft",
  "slayer",
  "farming",
  "construction",
  "hunter",
  "overall",
];

export default function Skills({ obj }) {
  let skillKeys = Object.keys(obj);

  let totalKey = skillKeys[0];
  let skillCount = 0;
  let xpHighest = 0;
  let skillHighest = 0;

  skillKeys.map((skill, i) => {
    let thisXp = obj[skill]["xp"];
    let thisLevel = obj[skill]["level"];

    if (thisXp > xpHighest && skillKeys[i] != "overall") {
      xpHighest = thisXp;
      skillHighest = FORMATTED_SKILL_NAMES[skillKeys[i]];
    } else {
      xpHighest = xpHighest;
    }

    if (thisLevel >= 99 && skillKeys[i] != "overall") {
      skillCount += 1;
    }
  });

  return (
    <section className="skills">
      <div className="container">
        <h2>Skills Section</h2>
        <div className="row">
          <div className="col-6 text-align-center">
            <div className="col-12 my-4 ps-5">
              <h3>Total XP</h3>
              <span>
                {FORMATTED_SKILL_NAMES[totalKey]}: {obj[totalKey]["xp"]}
              </span>
            </div>
            <div className="col-12 my-4 ps-5">
              <h3>Total 99s</h3>
              <span>{skillCount}</span>
            </div>
            <div className="col-12 my-4 ps-5">
              <h3>Highest XP</h3>
              <span>
                {skillHighest}: {xpHighest}
              </span>
            </div>
          </div>
          {SkillsTab({ obj, skillKeys })}
        </div>
      </div>
    </section>
  );
}

export function SkillsTab({ obj, skillKeys }) {
  return (
    <div className="col-6">
      <div className="skills-tab d-flex">
        {skillKeys.map((skill, i,) => (
          <div key={skill} data-key={skillsOrdered[i]} className="skills-tab-item col-4 d-block">
            <span className="skills-tab-lvl">{obj[skillsOrdered[i]]["level"]}</span><span className="skills-tab-cap"> / 99</span>
          </div>
        ))}
      </div>
    </div>
  );
}

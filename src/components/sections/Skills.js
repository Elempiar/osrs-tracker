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

const skillsIcons = [
  "/images/Attack_icon.png",
  "/images/Hitpoints_icon.png",
  "/images/Mining_icon.png",
  "/images/Strength_icon.png",
  "/images/Agility_icon.png",
  "/images/Smithing_icon.png",
  "/images/Defence_icon.png",
  "/images/Herblore_icon.png",
  "/images/Fishing_icon.png",
  "/images/Ranged_icon.png",
  "/images/Thieving_icon.png",
  "/images/Cooking_icon.png",
  "/images/Prayer_icon.png",
  "/images/Crafting_icon.png",
  "/images/Firemaking_icon.png",
  "/images/Magic_icon.png",
  "/images/Fletching_icon.png",
  "/images/Woodcutting_icon.png",
  "/images/Runecraft_icon.png",
  "/images/Slayer_icon.png",
  "/images/Farming_icon.png",
  "/images/Construction_icon.png",
  "/images/Hunter_icon.png",
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
          <div className="col-md-6">
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
          <div className="col-md-6">{SkillsTab({ obj, skillKeys })}</div>
        </div>
      </div>
    </section>
  );
}

export function SkillsTab({ obj, skillKeys }) {
  let test = 1;
  return (
    <div className="skills-tab d-flex">
      {skillKeys.map((skill, i) => (
        <div
          key={skill}
          data-key={skillsOrdered[i]}
          className="skills-tab-wrap col-4"
        >
          <div className="skills-tab-skill">
            <span className="skills-tab-skill-title">Total Level:</span>
            <img className="skills-tab-skill-icon" src={skillsIcons[i]} />
            <span className="skills-tab-skill-lvl">
              {obj[skillsOrdered[i]]["level"]}
            </span>
            <div className="skills-tab-skill-divider"></div>
            <span className="skills-tab-skill-cap">99</span>
          </div>
        </div>
      ))}
    </div>
  );
}

import { FORMATTED_SKILL_NAMES } from "osrs-json-hiscores/lib/utils/constants";

export default function Skills({ obj }) {
  let objKeys = Object.keys(obj);
  let xpHighest = 0;
  let objHighest = objKeys[0];
  let totalKey = objKeys[0];
  let count = 0;

  objKeys.map((oneKey, i) => {
    let xpThis = obj[oneKey]["xp"];

    if (xpThis > xpHighest && objKeys[i] != "overall") {
      xpHighest = xpThis;
      objHighest = FORMATTED_SKILL_NAMES[objKeys[i]];
    } else {
      xpHighest = xpHighest;
    }

    if (xpThis > 13034431 && objKeys[i] != "overall") {
      count += 1;
    }
  });

  return (
    <section className="skills">
      <div className="container">
        <div className="row text-align-center">
          <div className="col-12 my-4">
            <h2>Total XP</h2>
            <span>
              {FORMATTED_SKILL_NAMES[totalKey]}: {obj[totalKey]["xp"]}
            </span>
          </div>
          <div className="col-12 my-4">
            <h2>Total 99s</h2>
            <span>{count}</span>
          </div>
          <div className="col-12 my-4">
            <h2>Highest XP</h2>
            <span>
              {objHighest}: {xpHighest}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

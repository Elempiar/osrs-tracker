import { FORMATTED_BOSS_NAMES } from "osrs-json-hiscores/lib/utils/constants";

export default function Pvm({ obj }) {
  let pvmKeys = Object.keys(obj);
  let scoreHighest = 0;
  let objHighest = pvmKeys[0];

  pvmKeys.map((oneKey, i) => {
    let scoreThis = obj[oneKey]["score"];

    if (scoreThis > scoreHighest) {
      scoreHighest = scoreThis;
      objHighest = FORMATTED_BOSS_NAMES[pvmKeys[i]];
    } else {
      scoreHighest = scoreHighest;
    }
  });

  return (
    <section className="pvm">
      <div className="container">
        <h2>Pvm Section</h2>
        <div className="row text-align-center">
          <div className="col-12 my-4 ps-5">
            <h3>Highest KC</h3>
            <span>
              {objHighest}: {scoreHighest}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

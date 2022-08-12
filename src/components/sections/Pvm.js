import { FORMATTED_BOSS_NAMES } from "osrs-json-hiscores/lib/utils/constants";

export default function Pvm({ obj }) {
  let pvmKeys = Object.keys(obj);

  let scoreHighest = 0;
  let objHighest = pvmKeys[0];
  let scoreTotal = 0;

  pvmKeys.map((oneKey, i) => {
    let scoreThis = obj[oneKey]["score"];

    if (scoreThis > scoreHighest) {
      scoreHighest = scoreThis;
      objHighest = FORMATTED_BOSS_NAMES[pvmKeys[i]];
    }

    if (scoreThis > 0) {
      scoreTotal = scoreTotal + scoreThis;
    }
  });

  return (
    <section className="pvm">
      <div className="container">
        <h2>Pvm Section</h2>
        <div className="row">
          <div className="col-12 my-4 ps-md-5">
            <h3>Total KC</h3>
            <span>Total KC: {scoreTotal} KC.</span>
          </div>
          <div className="col-12 my-4 ps-md-5">
            <h3>Highest KC</h3>
            <span>
              {objHighest}: {scoreHighest} KC.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FORMATTED_BOSS_NAMES } from "osrs-json-hiscores/lib/utils/constants";

export default function Pvm({ obj }) {
  let objKeys = Object.keys(obj);
  let scoreHighest = 0;
  let objHighest = objKeys[0];

  objKeys.map((oneKey, i) => {
    let scoreThis = obj[oneKey]["score"];

    if (scoreThis > scoreHighest) {
      scoreHighest = scoreThis;
      objHighest = FORMATTED_BOSS_NAMES[objKeys[i]];
    } else {
      scoreHighest = scoreHighest;
    }
  });

  return (
    <section className="bosses">
      <div className="container">
        <div className="row text-align-center">
          <div className="col-12 my-4">
            <h2>Highest KC</h2>
            <span>
              {objHighest}: {scoreHighest}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

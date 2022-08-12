import { FORMATTED_CLUE_NAMES } from "osrs-json-hiscores/lib/utils/constants";

export default function Pvm({ obj }) {
  let clueKeys = Object.keys(obj);

  let totalKey = clueKeys[0];
  let scoreHighest = 0;
  let objHighest = clueKeys[0];

  clueKeys.map((oneKey, i) => {
    let scoreThis = obj[oneKey]["score"];

    if (scoreThis > scoreHighest && clueKeys[i] != "all") {
      scoreHighest = scoreThis;
      objHighest = FORMATTED_CLUE_NAMES[clueKeys[i]];
    }
  });

  return (
    <section className="pvm">
      <div className="container">
        <h2>Clues Section</h2>
        <div className="row">
          <div className="col-12 my-4 ps-md-5">
            <h3>Total Clues</h3>
            <span>Total Clues: {obj[totalKey]["score"]}.</span>
          </div>
          <div className="col-12 my-4 ps-md-5">
            <h3>Most done difficulty</h3>
            <span>
              {objHighest}: {scoreHighest}.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

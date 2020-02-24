const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const k = (0.693/HALF_LIFE_PERIOD)
  if (typeof (sampleActivity) !== 'string' || sampleActivity.length === 0 ||
    Number(sampleActivity) > 15 || Number(sampleActivity) <= 0) return false;
  sampleActivity = parseFloat(sampleActivity);
  if (typeof (sampleActivity) !== 'number' || isNaN(Number(sampleActivity))) return false;
  let relation = MODERN_ACTIVITY / sampleActivity
  return Math.ceil(Math.log(relation)/k)
};
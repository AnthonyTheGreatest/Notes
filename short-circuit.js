const {log} = console;

const andTruthy = 1 && 5;
const andFalsy = 0 && 5;
const orTruthy = 1 || 5;
const orFalsy = 0 || 5;
const nullishTruthy = null ?? 5;
const nullishFalsy = 0 ?? 5;

log(`andTruthy: ${andTruthy}`);
log(`andFalsy: ${andFalsy}`);
log(`orTruthy: ${orTruthy}`);
log(`orFalsy: ${orFalsy}`);
log(`nullishTruthy: ${nullishTruthy}`);
log(`nullishFalsy: ${nullishFalsy}`);


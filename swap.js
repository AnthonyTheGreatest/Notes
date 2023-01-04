const {log} = console;

///log('hello');

const test = [1, 2, 3, 4, 5];

const swap = (a, b, arr) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
};

swap(0, 4, test);
log(test);


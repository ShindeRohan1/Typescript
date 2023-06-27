function rest() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(typeof (arg));
}
rest(2, 42, 21, 0);

var direction;
(function (direction) {
    direction[direction["TOP"] = 0] = "TOP";
    direction[direction["RIGHT"] = 1] = "RIGHT";
    direction[direction["BOTTOM"] = 2] = "BOTTOM";
    direction[direction["LEFT"] = 3] = "LEFT";
})(direction || (direction = {}));
;
console.log(direction.BOTTOM);

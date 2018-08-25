function closeCir(circle, point) {
    if (point == undefined || circle == undefined) return null;
    for (var key in circle) {
        if (circle.hasOwnProperty(key)) {
            var element = circle[key];
            var dis = (element[0] - point[0]) * (element[0] - point[0]) +
                (element[1] - point[1]) * (element[1] - point[1]);
            dis = Math.pow(Math.abs(dis), 0.5);
            if (dis < 31.25) {
                return circle[key];
            }
        }
    }
    return null;
};
circle = { "one": [87.5, 87.5], "two": [187.5, 87.5], "three": [287.5, 87.5], "four": [87.5, 187.5], "five": [187.5, 187.5], "six": [287.5, 187.5], "seven": [87.5, 287.5], "eight": [187.5, 287.5], "nine": [287.5, 287.5] };
console.log(closeCir(circle, [87.80500030517578, 201.22000122070312]));
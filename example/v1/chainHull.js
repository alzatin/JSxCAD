await chainHull(circle(10).translate([0, 0, -10]),
                square(5),
                circle(10).translate([0, 0, 10]))
        .writeStl('stl/chainHull.stl');

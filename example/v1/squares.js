await union(square(30), square(30).move(15, 15))
        .outline()
        .writePdf('pdf/squares.pdf');

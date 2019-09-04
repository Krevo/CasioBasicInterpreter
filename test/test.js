QUnit.config.testTimeout = 10000;

QUnit.test("No syntax errors - test", function( assert ) {
  assert.equal(parse({main: ['1|"    Hello World !"']}, "main").error_cnt, 0, "Hello world");
  assert.equal(parse({main: ['1|5->A:Lbl 1:A:Dsz A:Goto 1:"      Ignition !"']}, "main").error_cnt, 0, "Dsz parse test");
  assert.equal(parse({main: ['1|Goto 1:Lbl 1:"Done."']}, "main").error_cnt, 0, "Label declared after goto using it.");
  assert.equal(parse({main: ['1|Int(Ran#*100+1)->R']}, "main").error_cnt, 0, "Int(Ran#) affected to a var");
  assert.equal(parse({main: ['1|5->A:If A>0:Then "A > 0":IfEnd']}, "main").error_cnt, 0, "If...Then..IfEnd");
  assert.equal(parse({main: ['1|1->A:0->B:A And B:A Or B:A Xor B:Not A']}, "main").error_cnt, 0, "And/Or/Xor/Not");
  assert.equal(parse({main: ['1|Mcl:2->θ:3->r:5rθ']}, "main").error_cnt, 0, "Rho / Theta");
  assert.equal(parse({main: ['1|Dim List 1:8->Dim List 1:Seq(X, X, 0, 5, 1->List 1:List 1[4]:File2']}, "main").error_cnt, 0, "List Syntax Elmt");
  assert.equal(parse({main: ['1|RanInt#(3,5)']}, "main").error_cnt, 0, "RanInt");
  assert.equal(parse({main: ['1|For 1->A To 10:Next']}, "main").error_cnt, 0, "For/Next");
  assert.equal(parse({main: ['1|AxesOn:AxesOff:ClrGraph']}, "main").error_cnt, 0, "AxesOn, AxesOff, ClrGraph");
  assert.equal(parse({main: ['1|SortA(List 1:SortA(List 1)']}, "main").error_cnt, 0, "SortA(, SortA()");
});

QUnit.test("Syntax errors - test", function( assert ) {
  assert.notEqual(parse({main: ['1|Gato 1:Lbl 1:"Done."']}, "main").error_cnt, 0, "Uncorrectly named 'Goto' instruction");
  assert.notEqual(parse({main: ['1|5->A:If A>0 Then "A > 0" IfEnd']}, "main").error_cnt, 0, "If...Then..IfEnd (mono line)");
});

QUnit.test("jsccRun - test", function( assert ) {
  var testsToRun = [{
      name: 'Basic operation 5+3',
      srcCode: `
        5+3
      `,
      answer: 8
    },
    {
      name: 'Basic operation 5*3',
      srcCode: `
        5*3
      `,
      answer: 15
    },
    {
      name: 'Basic operation 5-3',
      srcCode: `
        5-3
      `,
      answer: 2
    },
    {
      name: 'Basic operation 7/5',
      srcCode: `
        7/5
      `,
      answer: 1.4
    },
    {
      name: 'Basic operation 10+3*2',
      srcCode: `
        10+3*2
      `,
      answer: 16
    },
    {
    name: 'A-1 test',
      srcCode: `
        5->A
        A-1
      `,
      answer: 4
    },
    {
      name: '-A test',
      srcCode: `
        5->A
        -A
      `,
      answer: -5
    },
    {
      name: 'Abs VAR',
      srcCode: `
        -5->A
        Abs A
      `,
      answer: 5
    },
    {
      name: 'Abs >0',
      srcCode: `
        Abs 4
      `,
      answer: 4
    },
    {
      name: 'Abs <0',
      srcCode: `
        Abs -3
      `,
      answer: 3
    },
    {
      name: 'Dsz special meaning',
      srcCode: `
        10->A
        Lbl 1
        Ran#
        Dsz A
        Goto 1
        A
      `,
      answer: 0
    },
    {
      name: 'Multiple variable assignment',
      srcCode: `
        Mcl
        3->B~F
        5->C~E
        A+B+C+D+E+F+G
      `,
      answer: 21
    },
    {
      name: 'Int >0 test',
      srcCode: `
        Int 2.4
      `,
      answer: 2
    },
    {
      name: 'Int <0 test',
      srcCode: `
        Int -2.7
      `,
      answer: -2
    },
    {
      name: 'Intg >0 test',
      srcCode: `
        Intg 2.4
      `,
      answer: 2
    },
    {
      name: 'Intg <0 test',
      srcCode: `
        Intg -2.7
      `,
      answer: -3
    },
    {
      name: 'Frac >0 test',
      srcCode: `
        Frac 2.4
      `,
      answer: 0.4
    },
    {
      name: 'Frac <0 test',
      srcCode: `
        Frac -2.7
      `,
      answer: -0.7
    },
    {
      name: 'Cos 0 test',
      srcCode: `
        Deg
        cos 0
      `,
      answer: 1
    },
    {
      name: 'Cos 60 test',
      srcCode: `
        Deg
        cos 60
      `,
      answer: 0.5
    },
    {
      name: 'Cos 45 test',
      srcCode: `
        Deg
        cos 45
      `,
      answer: 0.707106781186548
    },
    {
      name: '2AB test',
      srcCode: `
        2->A
        3->B
        2AB
      `,
      answer: 12
    },
    {
      name: 'A(expr) test',
      srcCode: `
        2->A
        A(5+3)
      `,
      answer: 16
    },
    {
      name: '(expr)(expr) test',
      srcCode: `
        (2*3)(5+3)
      `,
      answer: 48
    },
    {
      name: '5 + 3 = 8 ?',
      srcCode: `
        5+3
      `,
      answer: 8
    },
    {
      name: 'Do / LpWhile test',
      srcCode: `
        1->A
        Do
        A+1->A
        LpWhile A<=5
        A
      `,
      answer: 6
    },
    {
      name: 'While / WhileEnd test',
      srcCode: `
        1->A
        While A<=5
        A+1->A
        WhileEnd
        A
      `,
      answer: 6
    },
    {
      name: 'Simulate Xor',
      srcCode: `
        1->A
        1->B
        (Not A And B) Or (A And Not B)
      `,
      answer: 0
    },
    {
      name: 'Rho Theta',
      srcCode: `
        Mcl
        2->θ
        3->r
        5rθ
      `,
      answer: 30
    },
    {
      name: 'List: test Seq',
      srcCode: `
         Seq(X, X, 0, 5, 1->List 1
         Seq(3*X, X, 0, 5, 1)->List 2
         Seq(X*X, X, 0, 5, 1->List 3
         List 1[6]*List 2[6]*List 3[6]
       `,
      answer: 1875
    },
    {
      name: 'List: init lists',
      srcCode: `
       {1,2,3,4}->List 1
       {1,2,3,5->List 2
       List 2[4]
       `,
      answer: 5
    },
    {
      name: 'List: 5->List 1[1]',
      srcCode: `
       5->List 1[1]
       List 1[1]
       `,
      answer: 5
    },
    {
      name: 'List: 4->List 1[1',
      srcCode: `
       4->List 1[1
       List 1[1]
       `,
      answer: 4
    },
    {
      name: 'List: init lists (1 elem)',
      srcCode: `
       {68}->List 1
       List 1[1]
       `,
      answer: 68
    },
    {
      name: 'List: dim list',
      srcCode: `
        7→Dim List 1
        5->Dim List 2
        3->Dim List 3
        Dim List 1
       `,
      answer: 7
    },
    {
      name: 'List: Dim list Ans',
      srcCode: `
        {1,2,3,4,5,6,7,8,9,10,11,12}
        Dim List Ans
       `,
      answer: 12
    },
    {
      name: 'List: File test',
      srcCode: `
       File1
       {5,6,7,8}->List 1
       File2
       {1,2,3,4}->List 1
       File1
       List 1[3]
       `,
      answer: 7
    },
    {
      name: 'List: Increase by one & Name of list in a var',
      srcCode: `
       5->Z
       ClrList Z
       For 1 -> I To 10
         I﹣Z -> List Z[I]
       Next
       List Z[10]
       `,
       answer: 5
    },
    {
      name: 'List: read List Ans',
      srcCode: `
       {1,2,3,4,5}->List 1
       List 1
       List Ans[3]
       `,
       answer: 3
    },
    {
      name: 'List: evaluate List Ans, copy List Ans',
      srcCode: `
        {1,2,3}
        List Ans
        List Ans->List 1
        List 1[3]
       `,
       answer: 3
    },
    {
      name: 'List: copy list',
      srcCode: `
       {1,2,3,4,5}->List 1
       List 1->List 2
       List 2[4]
       `,
       answer: 4
    },
    {
      name: 'List: Min(list)',
      srcCode: `
       ClrList
       {1,2,3,4,5}->List 1
       Min(List 1)
       `,
       answer: 1
    },
    {
      name: 'List: Max(list)',
      srcCode: `
       ClrList
       {1,2,3,4,5}->List 1
       Max(List 1)
       `,
       answer: 5
    },
    {
      name: 'List: SortA(list) elt 1',
      srcCode: `
       {1,-3,56,4}->List 1
       SortA(List 1)
       List 1[1]
       `,
       answer: -3
    },
    {
      name: 'List: SortA(list) elt 4',
      srcCode: `
       {1,-3,56,4}->List 1
       SortA(List 1)
       List 1[4]
       `,
       answer: 56
    },
    {
      name: 'List: SortD(list) elt 1',
      srcCode: `
       {12,-5,48,4}->List 1
       SortD(List 1)
       List 1[1]
       `,
       answer: 48
    },
    {
      name: 'List: SortD(list) elt 4',
      srcCode: `
       {12,-5,48,4}->List 1
       SortD(List 1)
       List 1[4]
       `,
       answer: -5
    },
    {
      name: 'List: Sum list',
      srcCode: `
       Sum {15,10,8,8,7}
       `,
       answer: 48
    },
    {
      name: 'List: Prod list',
      srcCode: `
       Prod {3,5,7,11,13}
       `,
       answer: 15015
    },
    {
      name: 'List: Mean list',
      srcCode: `
       Mean({15,10,8,8,7})
       `,
       answer: 9.6
    },
    {
      name: 'List: Median odd list',
      srcCode: `
       Median({10,8,7,15,8})
       `,
       answer: 8
    },
    {
      name: 'List: Median even list',
      srcCode: `
       Median({4,2,1,3})
       `,
       answer: 2.5
    },
    {
      name: 'List: Median even list',
      srcCode: `
       Median({4,2,1,3})
       `,
       answer: 2.5
    },
    {
      name: 'List: Fill',
      srcCode: `
       10->Dim List 1
       Fill(1.234, List 1)
       List 1[10]
       `,
       answer: 1.234
    },
    {
      name: 'List: Augment()',
      srcCode: `
       Augment({1,2,3,4},{5,6,7})
       List Ans[7]
       `,
       answer: 7
    },
    {
      name: 'List: Augment(',
      srcCode: `
       Augment({1,2,3,4},{5,6,7}->List 1
       List 1[7]
       `,
       answer: 7
    },
    {
      name: 'List: Cuml',
      srcCode: `
       Cuml {15,10,8,8,7}
       List Ans[5]
       `,
       answer: 48
    },
    {
      name: 'List: Percent',
      srcCode: `
       Percent {5,13,12,2,8}
       List Ans[2]
       `,
       answer: 32.5
    },
    {
      name: 'List: ?List',
      srcCode: `
       ?List {5,13,12,2,8}
       List Ans[3]
       `,
       answer: -10
    },
    {
      name: 'List: RanInt < max',
      srcCode: `
       RanInt#(3,7,5)
       List Ans[5]<=7
       `,
      answer: 1
    },
    {
      name: 'List RanInt > min',
      srcCode: `
       RanInt#(3,7,5)
       List Ans[5]>=3
       `,
      answer: 1
    },
    {
      name: 'List: RanList# < max',
      srcCode: `
       RanList#(5)
       List Ans[5]<1
       `,
      answer: 1
    },
    {
      name: 'List RanList# > min',
      srcCode: `
       RanList#(5)
       List Ans[5]>0
       `,
      answer: 1
    },
    {
      name: 'RanInt: < max',
      srcCode: `
       RanInt#(3,7)<=7
       `,
      answer: 1
    },
    {
      name: 'RanInt: > min',
      srcCode: `
       RanInt#(3,7)>=3
       `,
      answer: 1
    },
    {
      name: 'For/Next',
      srcCode: `
       1->B
       For 1->A To 9 Step 2
         B*A->B
       Next
       B
       `,
      answer: 945
    },
    {
      name: 'For/Next with Break',
      srcCode: `
       1->B
       For 1->A To 9 Step 2
         B*A->B
         A>5=>Break
       Next
       B
       `,
      answer: 105
    },
    {
      name: 'MOD',
      srcCode: `
       MOD(5,3)
       `,
      answer: 2
    },
    {
      name: 'MOD with negative number tst 1',
      srcCode: `
       MOD(-5,3)
       `,
      answer: 1
    },
    {
      name: 'MOD with negative number tst 2',
      srcCode: `
       MOD(-5,-3)
       `,
      answer: 1
    },
    {
      name: 'MOD with negative number tst 3',
      srcCode: `
       MOD(5,-3)
       `,
      answer: 2
    },
    {
      name: 'Init Mat and get nb of columns',
      srcCode: `
       [[1,2,3,4][5,6,7,8]]->Mat A
       Dim Mat A
       List Ans[2]
       `,
      answer: 4
    },
    {
      name: 'Init Mat and get nb of rows',
      srcCode: `
       [[1,2,3,4][5,6,7,8]]->Mat A
       Dim Mat A
       List Ans[1]
       `,
      answer: 2
    },
    {
      name: 'Init Mat and get elem from Mat Ans',
      srcCode: `
       [[1,2,3][4,5,6][7,8,9]]
       Mat Ans[2,3]
       `,
      answer: 6
    },
    {
      name: 'Init Mat by dim',
      srcCode: `
       {3,5}->Dim Mat A
       5->Mat A[2,3]
       Mat A[2,3]
       `,
      answer: 5
    },
    {
      name: 'Init Mat and copy to another Mat',
      srcCode: `
       [[1,2,3][4,5,6][7,8,9]]->Mat A
       Mat A->Mat B
       Mat B[3,1]
       `,
      answer: 7
    },
    {
      name: 'Fill Mat',
      srcCode: `
       {5,4}->Dim Mat C
       Fill(5, Mat C)
       Mat C[3,2]
       `,
      answer: 5
    },
    {
      name: 'Mat->List',
      srcCode: `
       ClrMat
       [[1,2,3][4,5,6][7,8,9]]->Mat A
       Mat->List(A,2)
       List Ans[1]=2 And List Ans[2]=5 And List Ans[3]=8
       `,
      answer: 1
    },
    {
      name: 'Trn Mat',
      srcCode: `
       Trn [[1,2,3][4,5,6]]
       Mat Ans[1,1]=1 And Mat Ans[1,2]=4 And Mat Ans[2,1]=2 And Mat Ans[2,2]=5 And Mat Ans[3,1]=3 And Mat Ans[3,2]=6
       `,
      answer: 1
    },
    {
      name: 'Augment Mat',
      srcCode: `
       Augment([[1,2,3]],[[4,5,6]])
       Mat Ans[1,1]=1 And Mat Ans[1,2]=2 And Mat Ans[1,3]=3 And Mat Ans[1,4]=4 And Mat Ans[1,5]=5
       `,
      answer: 1
    },
    {
      name: 'List->Mat',
      srcCode: `
       {1,2,3->List 1
       {4,5,6->List 3
       {7,8,9->List 7
       List->Mat(1,3,7
       Mat Ans[1,3]=7 And Mat Ans[2,2]=5 And Mat Ans[3,1]=3
       `,
      answer: 1
  }];
  assert.expect(testsToRun.length * 2);
  var done = assert.async(testsToRun.length);

  var runTest = function() {
    if (testsToRun.length > 0) {
      test = testsToRun.shift();
      // jsccRun is asynchronous
      jsccRun(test.srcCode, function(errorCode, msg, programs) {
        assert.equal(errorCode, 0, test.name + ", exit success");
        assert.equal(getLastAnswer(), test.answer, test.name + ", expected value of " + test.answer);
        done();
        runTest(); // run next test
      });
    }
  }
  
  runTest();
});

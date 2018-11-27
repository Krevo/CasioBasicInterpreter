QUnit.config.testTimeout = 5000;

QUnit.test("No syntax errors - test", function( assert ) {
  assert.equal(parse({main: ['1|"    Hello World !"']}, "main").error_cnt, 0, "Hello world");
  assert.equal(parse({main: ['1|5->A:Lbl 1:A:Dsz A:Goto 1:"      Ignition !"']}, "main").error_cnt, 0, "Dsz parse test");
  assert.equal(parse({main: ['1|Goto 1:Lbl 1:"Done."']}, "main").error_cnt, 0, "Label declared after goto using it.");
  assert.equal(parse({main: ['1|Int(Ran#*100+1)->R']}, "main").error_cnt, 0, "Int(Ran#) affected to a var");
  assert.equal(parse({main: ['1|5->A:If A>0:Then "A > 0":IfEnd']}, "main").error_cnt, 0, "If...Then..IfEnd");
  assert.equal(parse({main: ['1|1->A:0->B:A And B:A Or B:A Xor B:Not A']}, "main").error_cnt, 0, "And/Or/Xor/Not");
});

QUnit.test("Syntax errors - test", function( assert ) {
  assert.notEqual(parse({main: ['1|Gato 1:Lbl 1:"Done."']}, "main").error_cnt, 0, "Uncorrectly named 'Goto' instruction");
  assert.notEqual(parse({main: ['1|5->A:If A>0 Then "A > 0" IfEnd']}, "main").error_cnt, 0, "If...Then..IfEnd (mono line)");
});

QUnit.test("jsccRun - test", function( assert ) {
  var testsToRun = [{
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
      name: 'Int() test',
      srcCode: `
        Int(3.14159265359)
      `,
      answer: 3
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

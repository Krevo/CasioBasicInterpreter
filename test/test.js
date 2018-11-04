QUnit.config.testTimeout = 5000;

QUnit.test("No syntax errors - test", function( assert ) {
  assert.equal(parse('"    Hello World !"').error_cnt, 0, "Hello world");
  assert.equal(parse('5->A:Lbl 1:A:Dsz A:Goto 1:"      Ignition !"',"TestProg").error_cnt, 0, "Dsz parse test");
  assert.equal(parse('Goto 1:Lbl 1:"Done."').error_cnt, 0, "Label declared after goto using it.");
  assert.equal(parse('Int(Ran#*100+1)->R').error_cnt, 0, "Int(Ran#) affected to a var");
  assert.equal(parse('5->A:If A>0:Then "A > 0":IfEnd').error_cnt, 0, "If...Then..IfEnd");
});

QUnit.test("Syntax errors - test", function( assert ) {
  assert.notEqual(parse('Gato 1:Lbl 1:"Done."').error_cnt, 0, "Uncorrectly named 'Goto' instruction");
  assert.notEqual(parse('5->A:If A>0 Then "A > 0" IfEnd').error_cnt, 0, "If...Then..IfEnd (mono line)");
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

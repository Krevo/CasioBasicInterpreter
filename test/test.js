QUnit.test("No syntax errors - test", function( assert ) {
  assert.equal(parse('"    Hello World !"').error_cnt, 0, "Hello world");
  assert.equal(parse('5->A:Lbl 1:A:Dsz A:Goto 1:"      Ignition !"',"TestProg").error_cnt, 0, "Dsz special meaning");
  assert.equal(parse('Goto 1:Lbl 1:"Done."').error_cnt, 0, "Label declared after goto using it.");
  assert.equal(parse('Int(Ran#*100+1)->R').error_cnt, 0, "Int(Ran#) affected to a var");
  assert.equal(parse('5->A:If A>0:Then "A > 0":IfEnd').error_cnt, 0, "If...Then..IfEnd");
});

QUnit.test("Syntax errors - test", function( assert ) {
  assert.notEqual(parse('Gato 1:Lbl 1:"Done."').error_cnt, 0, "Uncorrectly named 'Goto' instruction");
  assert.notEqual(parse('5->A:If A>0 Then "A > 0" IfEnd').error_cnt, 0, "If...Then..IfEnd (mono line)");
});

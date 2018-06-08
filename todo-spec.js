describe('report demo tests', function () {
  
  it('My success testcase', function () {
    browser.driver.manage().window().maximize();
    browser.driver.get('https://angularjs.org');
    expect('pass').toEqual('pass');    
    console.log("Test case pass");
  });

  it('My failure testcase', function () {
    expect('failure').toEqual('pass');
    console.log("Test case fail");    
  });
});
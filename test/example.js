contract('TomTest',function(test1) {
    it("x",function(done) {
        var tom=TomTest.at(TomTest.deployed_address);
        console.log("1 tom address: "+tom.address+" (deploy: "+TomTest.deployed_address+")");
        
        return tom.setValue.call(50).then(function(whatev) {
            console.log("2 tom address: "+tom.address+" (deploy: "+TomTest.deployed_address+")");
            return tom.value.call();
        }).then(function(value) {
            console.log("3 tom address: "+tom.address+" (deploy: "+TomTest.deployed_address+")");
            assert.equal(value.toNumber(),50);
        });
    });
});

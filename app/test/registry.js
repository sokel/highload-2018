var Registry = artifacts.require("./Registry.sol");

contract('Registry', async function (accounts) {
    let registry;

    before(async function(){
        registry = await Registry.new();
    })

    it('write', async function () {
        await registry.Write("highload", "2018");
    });

    it('read', async function () {
        let value = await registry.Read("highload"); 
        assert.equal(value.toString(), '2018'); 
    });
})
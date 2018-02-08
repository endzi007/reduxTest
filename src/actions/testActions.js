export let testAction = () => {
    console.log("testAction");
    return {
        type: "TEST_ACTION",
        data: "test data"
    }
}
function useAdd() {
    function add(x, y) {
        return x + y;
    }
    //   //This is the wrong way just you have to return the function
    // //   return add();// youn arre directly calling the functionto aapp undefine ko undefine me nhi likh sakte 

    // //Right way
    // return add;// jab aapke custom hoook ke ander single function hota hai to aap return
    // //  function ka name bina kisi curly braces ke aisa krte hai

    function sub(x, y) {
        return x - y;
    }
    function multiply(x, y) {
        return x * y;
    }
    function division(x, y) {
        return x / y;
    }

  
    return {add,sub,multiply,division}; // jab bhi aapke cutsom hooks ke ander multiple function rehte hai to 
    //return krne ke time me curly braces  ke ander use hote hai

}

export default useAdd;
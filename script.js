   
    // console.log(data);
    // let datas = data.split('');
    // console.log(datas);
    // let dataReverse = datas.reverse();
    // console.log(dataReverse);
    // let joinReverse = dataReverse.join('');
    // console.log(joinReverse);
    // datas.split(' ').reverse().join('');


    // SINGLE STRING REVERSE
    // const data = prompt('Input your desired statement');
    // function reverseString() {
    //     let datas = data.split('').reverse().join('');
    //     alert(datas);
    // }
    // reverseString();

    // REVERSING A STATEMENT
    // const value = prompt('Type in here');
    // let values = value.split(' ');
    // console.log(values);
    // let valReverse = values.reverse();
    // console.log(valReverse);
    // let valJoin = valReverse.join(' ');
    // console.log(valJoin);
     
   
//    console.log(values);
//    const value = prompt('Type here');
//    function reverseState(){
//         let values = value.split(' ').reverse().join(' ');
//         alert(values);
//    }
//    reverseState();


   // COMBINING BOTH TYPES
   const data = prompt('Input your desired statement');

    if (data.value === data.split(' ')){
        function reverseString() {
            let datas = data.split('').reverse().join(' ');
            alert(datas);
        }
        reverseString();
    } else if (data.value !== data.split(' ') ){
        function reverseState(){
            let datas = data.split('').reverse().join('');
            alert(datas);
       }
       reverseState();
    } else {
        alert('Please input a value');
    }

   
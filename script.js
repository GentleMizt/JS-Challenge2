   
    // console.log(data);
    // let datas = data.split('');
    // console.log(datas);
    // let dataReverse = datas.reverse();
    // console.log(dataReverse);
    // let joinReverse = dataReverse.join('');
    // console.log(joinReverse);
    // datas.split(' ').reverse().join('');

    const data = prompt('Input your desired statement');
    function reverseString() {
        let datas = data.split('').reverse().join('');
        alert(datas);
    }
    
    reverseString();

    
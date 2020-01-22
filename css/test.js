function testinc(){

    for(i=0; i<5; ++i){
        console.log('Valor actual i ' + i );
    }
    console.log('Ahora vamos con el another');
    for(j=0; j<5; j++){
        console.log('Valor actual j ' + j );
    }
    console.log('Done!!');
}

window.onload = testinc;
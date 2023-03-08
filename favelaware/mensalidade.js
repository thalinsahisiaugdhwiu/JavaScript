var dia = 0
        if(dia <= 15 && dia > 0){
            console.log('Adiantado')
        }else if(dia < 0 && dia > 15 && dia < 20  ){
            console.log('Em dia')
        }else if( dia > 20){
            console.log('Atrasado')
        }else if(dia == 0){
            console.log('Não é cliente')
        }

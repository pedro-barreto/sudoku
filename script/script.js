var sudokuFinal = [[],[],[],[],[],[],[],[],[]]

function verificarSudoku(){

	let verifica = 0

	for(let i = 0 ; i <= 8 ; i++){
		
		for(let j = 0 ; j <= 8 ; j++){

			document.querySelector('#campo'+i+j).setAttribute('class','')
		
			if(sudokuFinal[i][j] != 0){
				
				let numeroInicial = sudokuFinal[i][j]
				sudokuFinal[i][j] = 0
				
				if(checarTudo(numeroInicial,i,j) == false){
					
					document.querySelector('#campo'+i+j).setAttribute('class','errado')
					verifica++
					
				}
				
				sudokuFinal[i][j] = numeroInicial
				
			}
		
		}
		
	}

	if(verifica > 0){

		return false

	}else{

		return true

	}

}

function checarLinha(numero, linha){
	
	for(let i = 0 ; i <= 8 ; i++){
		
		if(sudokuFinal[linha][i] == numero){
			
			return false
			
		}
		
	}

	return true
		
}

function checarColuna(numero, coluna){

	for(let i = 0 ; i <= 8 ; i++){
		
		if(sudokuFinal[i][coluna] == numero){
			
			return false
			
		}
		
	}

	return true
		
}

function checarQuadrante(numero, linha, coluna){

	if(linha >= 0 && linha <= 2){

		if(coluna >= 0 && coluna <= 2){
			
			//Quadrante 1
			for(let i = 0 ; i <= 2 ; i++){
				
				for(let j = 0 ; j <= 2 ; j++){
					
					if(sudokuFinal[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
		
		}
		
		if(coluna >= 3 && coluna <= 5){
			
			//Quadrante 2
			for(let i = 0 ; i <= 2 ; i++){
				
				for(let j = 3 ; j <= 5 ; j++){
					
					if(sudokuFinal[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}	
			
		}
		
		if(coluna >= 6 && coluna <= 8){
			
			//Quadrante 3
			for(let i = 0 ; i <= 2 ; i++){
				
				for(let j = 6 ; j <= 8 ; j++){

					if(sudokuFinal[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
				
		}
		
	}
	
	if(linha >= 3 && linha <= 5){
		
		if(coluna >= 0 && coluna <= 2){

			//Quadrante 4
			for(let i = 3 ; i <= 5 ; i++){
				
				for(let j = 0 ; j <= 2 ; j++){
					
					if(sudokuFinal[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
		
		}
		
		if(coluna >= 3 && coluna <= 5){
			
			//Quadrante 5
			for(let i = 3 ; i <= 5 ; i++){
				
				for(let j = 3 ; j <= 5 ; j++){
					
					if(sudokuFinal[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
			
		}
		
		if(coluna >= 6 && coluna <= 8){
			
			//Quadrante 6
			for(let i = 3 ; i <= 5 ; i++){
				
				for(let j = 6 ; j <= 8 ; j++){
					
					if(sudokuFinal[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
						
		}	
		
	}
	
	if(linha >= 6 && linha <= 8){
		
		if(coluna >= 0 && coluna <= 2){

			//Quadrante 7
			for(let i = 6 ; i <= 8 ; i++){
				
				for(let j = 0 ; j <= 2 ; j++){
					
					if(sudokuFinal[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
			
		
		}
		
		if(coluna >= 3 && coluna <= 5){
			
			//Quadrante 8
			for(let i = 6 ; i <= 8 ; i++){
				
				for(let j = 3 ; j <= 5 ; j++){
					
					if(sudokuFinal[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
			
		}
		
		if(coluna >= 6 && coluna <= 8){
			
			//Quadrante 9
			for(let i = 6 ; i <= 8 ; i++){
				
				for(let j = 6 ; j <= 8 ; j++){
					
					if(sudokuFinal[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
				
		}
		
	}

	return true
	
}

function checarTudo(numero, linha, coluna){
	
	if(checarLinha(numero,linha) == true && checarColuna(numero,coluna) == true && checarQuadrante(numero,linha,coluna) == true){
		
		return true
		
	}else{
		
		return false
		
	}
	
}

function pegarValores(){
	
	for(let i = 0 ; i <= 8 ; i++){
		
		for(let j = 0 ; j <= 8 ; j++){

			let valorTabela = document.querySelector('#campo'+i+j).value
			
			if(valorTabela == ''){

				sudokuFinal[i][j] = 0

			}else{

				sudokuFinal[i][j] = valorTabela

			}
			
		}
	
	}
	
}

let tent = document.createElement('p')

function preencherTabela(){

	let tentativas = 0, num = [1,2,3,4,5,6,7,8,9]

	pegarValores()

	if(verificarSudoku() == true){
		
		for(let i = 0 ; i <= 8 ; i++){
		
			for(let j = 0 ; j <= 8 ; j++){
				
				if(sudokuFinal[i][j] == 0){

					for (let k = num.length; k;){

						let rand = Math.random() * k-- | 0;
						let tmp = num[rand];

						num[rand] = num[k];
						num[k] = tmp;

					}

					function verifica(){

						for(let k = 0 ; k <= 8 ; k++){

							if(checarTudo(num[k],i,j) == true){
	
								sudokuFinal[i][j] = num[k]
								return true
	
							}
	
						}

						return false

					}
					
					if(verifica() == false){
						
						pegarValores()
						i = 0;
						j = -1;
						tentativas++

					}
					
				}
				
			}
			
		}

		for(let i = 0 ; i <= 8 ; i++){

			for(let j = 0 ; j <= 8 ; j++){
	
				document.querySelector('#resposta'+i+j).value = sudokuFinal[i][j]
				document.querySelector('#resposta'+i+j).setAttribute('class','certo')
	
			}
		
		}
		
		tent.innerHTML = `Tentativas: ${tentativas}`
		document.querySelector('#tentativas').appendChild(tent)
		
		
	}else{
		
        window.alert('Preencha os campos corretamente!')
		
	}

}

function tabelas(){

	for(let i = 0 ; i <= 8 ; i++){

		for(let j = 0 ; j <= 8 ; j++){
	
			let campo = document.createElement('input')
			let resposta = document.createElement('input')
	
			campo.setAttribute('type','text')
			campo.setAttribute('id','campo'+i+j)
			campo.setAttribute('maxlength','1')
			campo.setAttribute('onkeypress','return event.charCode >= 49 && event.charCode <= 57')
			
			resposta.setAttribute('type','text')
			resposta.setAttribute('id','resposta'+i+j)
			resposta.setAttribute('disabled','')
	
			document.querySelector('#tabelaInicial').appendChild(campo)
			document.querySelector('#tabelaFinal').appendChild(resposta)

			if(((j+1)%3)==0){

				campo.style.borderRight = 'solid 2px black'
				resposta.style.borderRight = 'solid 2px black'

			}

			if(((i+1)%3)==0){

				campo.style.borderBottom = 'solid 2px black'
				resposta.style.borderBottom = 'solid 2px black'

			}

			if(((i)%3)==0){

				campo.style.borderTop = 'solid 1px black'
				resposta.style.borderTop = 'solid 1px black'

			}

			if(((j)%3) == 0){

				

				campo.style.borderLeft = 'solid 1px black'
				resposta.style.borderLeft = 'solid 1px black'

			}

			if(i == 0){

				campo.style.borderTop = 'solid 3px black'
				resposta.style.borderTop = 'solid 3px black'

			}

			if(j == 0){

				campo.style.borderLeft = 'solid 3px black'
				resposta.style.borderLeft = 'solid 3px black'

			}

			if(i == 8){

				campo.style.borderBottom = 'solid 3px black'
				resposta.style.borderBottom = 'solid 3px black'

			}

			if(j == 8){

				campo.style.borderRight = 'solid 3px black'
				resposta.style.borderRight = 'solid 3px black'

			}
	
		}
	
		document.querySelector('#tabelaInicial').appendChild(document.createElement('p'))
		document.querySelector('#tabelaFinal').appendChild(document.createElement('p'))
	
	}

}

function limpar(){

	for(let i = 0 ; i <= 8 ; i++){

		for(let j = 0 ; j <= 8 ; j++){

			document.querySelector('#campo'+i+j).value = ''
			document.querySelector('#resposta'+i+j).value = ''
			document.querySelector('#campo'+i+j).setAttribute('class','')
			document.querySelector('#resposta'+i+j).setAttribute('class','')
			document.querySelector('#tentativas').innerHTML = ''

		}

	}

}

function resolver(){

	preencherTabela()

}

function trabalho(){

	let trabalho = [[5, 3, 0, 0, 7, 0, 0, 0, 0],
					[6, 0, 0, 1, 9, 5, 0, 0, 0],
					[0, 9, 8, 0, 0, 0, 0, 6, 0],
					[8, 0, 0, 0, 6, 0, 0, 0, 3],
					[4, 0, 0, 8, 0, 3, 0, 0, 1],
					[7, 0, 0, 0, 2, 0, 0, 0, 6],
					[0, 6, 0, 0, 0, 0, 2, 8, 0],
					[0, 0, 0, 4, 1, 9, 0, 0, 5],
					[0, 0, 0, 0, 8, 0, 0, 7, 9]]

	limpar()

	for (let i = 0 ; i <= 8 ; i++) {
		
		for (let j = 0 ; j <= 8 ; j++) {
			
			if(trabalho[i][j] != 0){

				document.querySelector('#campo'+i+j).value = trabalho[i][j]

			}else{

				document.querySelector('#campo'+i+j).value = ''

			}
		
		}
		
	}

}
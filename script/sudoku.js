let sudoku =   [[5, 3, 0, 0, 7, 0, 0, 0, 0],
				[6, 0, 0, 1, 9, 5, 0, 0, 0],
				[0, 9, 8, 0, 0, 0, 0, 6, 0],
				[8, 0, 0, 0, 6, 0, 0, 0, 3],
				[4, 0, 0, 8, 0, 3, 0, 0, 1],
				[7, 0, 0, 0, 2, 0, 0, 0, 6],
				[0, 6, 0, 0, 0, 0, 2, 8, 0],
				[0, 0, 0, 4, 1, 9, 0, 0, 5],
				[0, 0, 0, 0, 8, 0, 0, 7, 9]]

function tabela(){

	for(i = 0 ; i <= 8 ; i++){

		let tab = ''
		tab += '|'
		
		for(j = 0 ; j <= 8 ; j++){
			
			if(sudoku[i][j] == 0){
				
				tab += `   |`	
				
			}else{
				
				tab += ` ${sudoku[i][j]} |`	
				
			}

		}

		console.log('-------------------------------------')
		console.log(tab)
	
	}

	console.log('-------------------------------------')
	
}

function verificarSudoku(){

	for(let i = 0 ; i <= 8 ; i++){
		
		for(let j = 0 ; j <= 8 ; j++){
		
			if(sudoku[i][j] != 0){
				
				let numeroInicial = sudoku[i][j]
				sudoku[i][j] = 0
				
				if(checarTudo(numeroInicial,i,j) == false){
					
					
					return false
					
				}
				
				sudoku[i][j] = numeroInicial
				
			}
		
		}
		
	}

	return true

}

function checarLinha(numero, linha){
	
	for(let i = 0 ; i <= 8 ; i++){
		
		if(sudoku[linha][i] == numero){
			
			return false
			
		}
		
	}

	return true
		
}

function checarColuna(numero, coluna){

	for(let i = 0 ; i <= 8 ; i++){
		
		if(sudoku[i][coluna] == numero){
			
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
					
					if(sudoku[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
		
		}
		
		if(coluna >= 3 && coluna <= 5){
			
			//Quadrante 2
			for(let i = 0 ; i <= 2 ; i++){
				
				for(let j = 3 ; j <= 5 ; j++){
					
					if(sudoku[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}	
			
		}
		
		if(coluna >= 6 && coluna <= 8){
			
			//Quadrante 3
			for(let i = 0 ; i <= 2 ; i++){
				
				for(let j = 6 ; j <= 8 ; j++){

					if(sudoku[i][j] == numero){
						
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
					
					if(sudoku[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
		
		}
		
		if(coluna >= 3 && coluna <= 5){
			
			//Quadrante 5
			for(let i = 3 ; i <= 5 ; i++){
				
				for(let j = 3 ; j <= 5 ; j++){
					
					if(sudoku[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
			
		}
		
		if(coluna >= 6 && coluna <= 8){
			
			//Quadrante 6
			for(let i = 3 ; i <= 5 ; i++){
				
				for(let j = 6 ; j <= 8 ; j++){
					
					if(sudoku[i][j] == numero){
						
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
					
					if(sudoku[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
			
		
		}
		
		if(coluna >= 3 && coluna <= 5){
			
			//Quadrante 8
			for(let i = 6 ; i <= 8 ; i++){
				
				for(let j = 3 ; j <= 5 ; j++){
					
					if(sudoku[i][j] == numero){
						
						return false
						
					}
					
				}
				
			}
			
		}
		
		if(coluna >= 6 && coluna <= 8){
			
			//Quadrante 9
			for(let i = 6 ; i <= 8 ; i++){
				
				for(let j = 6 ; j <= 8 ; j++){
					
					if(sudoku[i][j] == numero){
						
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

var sudokuInicial = [[],[],[],[],[],[],[],[],[]]

function salvaTabela(){
	
	for(let i = 0 ; i <= 8 ; i++){
		
		for(let j = 0 ; j <= 8 ; j++){
			
			sudokuInicial[i][j] = sudoku[i][j]
			
		}
	
	}
	
}

function resetarTabela(){
	
	for(i = 0 ; i <= 8 ; i++){
		
		for(j = 0 ; j <= 8 ; j++){
			
			sudoku[i][j] = sudokuInicial[i][j]
			
		}
	
	}
	
}

function preencherTabela(){

	let tentativas = 0, num = [1,2,3,4,5,6,7,8,9]

	salvaTabela()

	if(verificarSudoku() == true){
		
		for(let i = 0 ; i <= 8 ; i++){
		
			for(let j = 0 ; j <= 8 ; j++){
				
				if(sudoku[i][j] == 0){

					for (let k = num.length; k;){

						let rand = Math.random() * k-- | 0;
						let tmp = num[rand];

						num[rand] = num[k];
						num[k] = tmp;

					}

					function verifica(){

						for(let k = 0 ; k <= 8 ; k++){

							if(checarTudo(num[k],i,j) == true){
	
								sudoku[i][j] = num[k]
								return true
	
							}
	
						}

						return false

					}
					
					if(verifica() == false){
						
						resetarTabela()
						i = 0;
						j = -1;
						tentativas++

					}
					
				}
				
			}
			
		}

		console.log(`\nTentativas: ${tentativas}\n`)
		
	}else{
		
        console.log('Não é possivel solucionar este sudoku')
		
	}

}

tabela()
preencherTabela()
tabela()
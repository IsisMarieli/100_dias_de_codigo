def gerarTabuada(num):
    print(f'# Tabuada do número {num} #')
    for i in range(1,11):
        result = i * num 
        print(f'{i} x {num} = {result}')
    
num = int(input("Digite um número para gerar a tabuada: "))
        
gerarTabuada(num)


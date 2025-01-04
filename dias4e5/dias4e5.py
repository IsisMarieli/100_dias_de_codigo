def multiplicao(x, y):
    return x * y

def divisao(x, y):
    if y != 0:
        return x / y
    else:
        return "Não é permitida a divisão por 0."

def adicao(x, y):
    return x + y

def subtracao(x, y):
    return x - y

def calculadora():
    print("#########Calculadora#########")
    print("#1 --------Multiplicação----#")
    print("#2 --------Divisão----------#")
    print("#3 --------Adição-----------#")
    print("#4 --------Subtração--------#")
    print("#5 ---------Sair------------#")
    print("#############################")
    
def main():
    while True:
        calculadora()
        opcao = int(input("Selecione a operação (1 a 5):"))
        if opcao == 1:
            x = float(input("Digite o 1° número: "))
            y = float(input("Digite o 2° número: "))
            print(f" {x} x {y} = {multiplicao(x, y):.2f}")  
        elif opcao == 2:
                x = float(input("Digite o 1° número: "))
                y = float(input("Digite o 2° número: "))
                print(f" {x} / {y} = {divisao(x, y):.2f}")
        elif opcao == 3:
            x = float(input("Digite o 1° número: "))
            y = float(input("Digite o 2° número: "))
            print(f" {x} + {y} = {adicao(x, y):.2f}") 
        elif opcao == 4:
            x = float(input("Digite o 1° número: "))
            y = float(input("Digite o 2° número: "))
            print(f" {x} - {y} = {subtracao(x, y):.2f}")
        elif opcao > 5:
            print("Opção Invalida!")
        else:
            print("Calculadora finalizada.") 
            break
main() 
        
        
          
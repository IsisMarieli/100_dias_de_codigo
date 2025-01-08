# °F = (°C x 9/5) + 32

def c_p_f(celcius):
    fahrenheit = (celcius * 9/5) + 32
    return fahrenheit

celc = float(input('Digite a temperatura em Celcius: '))

print(f'A temperatura em Fahrenheit é: {c_p_f(celc):.2f}')

c_p_f(celc)
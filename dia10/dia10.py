import pandas as pd
import numpy as np

data = {
    'nome': ['Ana', 'João', 'Maria', 'Pedro', 'Lucas','Carla'],
    'departamento':['TI', 'RH','TI','Financeiro','TI', 'RH'],
    'salario': [5000, 4500, 5200, 6000, 4800, 4700]
}

df = pd.DataFrame(data)

# Filtragem
funcionarios_ti = df[df['departamento'] == 'TI']
print(funcionarios_ti)

# Média Salarial

media_salarial = funcionarios_ti['salario'].mean()

print(f"Média salarial dos funcionários de TI: {media_salarial}")
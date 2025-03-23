import pandas as pd
import numpy as np

data = {'vendas':[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
df = pd.DataFrame(data)

print(df)

media = df['vendas'].mean()
mediana = df['vendas'].median()
desvio_padrao = df['vendas'].std()
maximo = df['vendas'].max()
minimo = df['vendas'].min()

print(f"Média: {media}")
print(f"Mediana: {mediana}")
print(f"Desvio padrão: {desvio_padrao}")
print(f"Maximo: {maximo}")
print(f"Minimo: {minimo}")
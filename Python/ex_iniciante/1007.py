# Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

# Entrada
# O arquivo de entrada contém 4 valores inteiros.

# Saída
# Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

num1 = int(input())
num2 = int(input())
num3 = int(input())
num4 = int(input())

dif = (num1 * num2 - num3 * num4)

print(f"DIFERENCA = {dif}")
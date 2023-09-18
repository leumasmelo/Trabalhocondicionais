Condicionais e objetos

Exercícios

A. Exercícios de interpretação de código

1. a) O que o código acima faz? Explique em palavras simples.
// Fornece os dados do nome do motorista, no caso a Alice, a idade, que é de 25 anos. Imprime se a pessoa é maior ou igual a 18 anos e tem carteira,pode dirigir
//caso tenha menos de 18 anos, não pode dirigir.
b) Quando a mensagem "Alice pode dirigir"" será impressa no console? E quando a mensagem "Alice não pode dirigir". Será impressa?
//Quando constar que Alice é maior que 18 anos, será impressa no console. Alice não poderá dirigir quando constar que ela tem menos de 18 anos

2. Leia o código a seguir:
a) Fornece dados  de um animal "Leão" com parâmetro True (verdadeiro) para carnívoro ou parâmetro que ele não seja carnívoro.
b) // Quando constar que Leão é um animal carnívoro, será impresso no console log. Caso não conste que o Leão não é carnívoro, mostrará mensagem que não é carnívoro.
Questão 3
Este código JavaScript realiza o seguinte:

a) O código verifica se a variável "número" é maior que 5 e se é par ou ímpar, e então imprime mensagens no console com base nesses critérios.

b) As mensagens impressas no console serão:
   - "O número é maior que 5" (porque 10 é maior que 5).
   - "O número é par" (porque 10 é divisível por 2, portanto é par).

B.1. # Solicita ao usuário sua idade e armazena em uma variável idade idade = int(input("Digite sua idade:"))

#Veridica se o usuário é maior ou igual a 18 anos
If idade >=18:
print("Você é maior de idade.")
else:
print("Você é menor de idade.")

2. #Solicita ao usuário qual turno do dia ele estuda e armazena uma variável turno = input( "Qual turno do dia você estuda? Digite "M" para matutino, "T" para tarde e "N" para noturno.

#Utiliza uma estrutura condicional para imprimir a mensagem apropriada com If turno == "M":
print("Bom dia!")
elif turno == "T":
print("Boa tarde!")
elif turno == "N":
print("Boa noite!")
else:
print("Opção inválida. Por favor, digite 'M', 'T' ou 'N'.")
3. Função para imprimir mensagem de acordo com o turno
def imprimir _mensagem(turno):
switch = {
"M": "Bom dia!",
"T": ""Boa tarde!",
"N": "Boa noite!"
}

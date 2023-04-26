import { validate } from "../src/validator"; 
test.each([
	"407.302.170-27",
	"684.053.160-00",
	"092.277.800-09",
	"888.041.920-03",
	"611.958.800-06",
	"022.812.830-70"
])("Deve testar um cpf válidos", function (cpf) {
	const isValid = validate(cpf);
	expect(isValid).toBeTruthy();
});
test("Deve testar um cpf inválidos", function () {
	const isValid = validate("408.302.170-27");
	expect(isValid).toBeFalsy();
});
test("Deve testar um cpf inválidos com todos os dígitos iguais", function () {
	const isValid = validate("777.777.777-77");
	expect(isValid).toBeFalsy();
});

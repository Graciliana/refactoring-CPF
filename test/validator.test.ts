import { validate } from "../src/validator"; 
test.each([
	"407.302.170-27",
	"684.053.160-00",
	"092.277.800-09",
	"888.041.920-03",
	"611.958.800-06",
	"022.812.830-70",
	"68405316000"
])("Deve testar um cpf válidos", function (cpf) {
	const isValid = validate(cpf);
	expect(isValid).toBeTruthy();
});
test.each([
	"408.302.170-27",
	"041.920-03",
	"611-06",
	null,
	undefined,
	"htg-plo.gra-98"
	
])("Deve testar um cpf inválidos", function (cpf) {
	const isValid = validate(cpf);
	expect(isValid).toBeFalsy();
});
test.each([
  "777.777.777-77",
  "222.222.222-22",
  "44444444444"
])(
	"Deve testar um cpf inválidos com todos os dígitos iguais",
	function (cpf) {
		const isValid = validate("777.777.777-77");
		expect(isValid).toBeFalsy();
	}
);

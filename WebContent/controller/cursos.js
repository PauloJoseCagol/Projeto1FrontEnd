var cursoModulo = angular.module("cursoModulo",[]);

cursoModulo.controller("cursoController", function ($scope) {
	$scope.professores = [
		{codigo: 1,nome: 'Paulo J. Cagol',email: 'cagoljosepaulo@gmail.com',fone: '46 999999999'},
		{codigo: 2,nome: 'Maristela Veigas',email: 'maristela@gmail.com',fone: '46 999999999'},
		{codigo: 3,nome: 'Joao Pedro Lazaro',email: 'joao@gmail.com',fone: '46 999999999'},
		{codigo: 4,nome: 'Vilmar Roberto Brito',email: 'vilmar@gmail.com',fone: '46 999999999'},
		{codigo: 5,nome: 'Sergio Ramos',email: 'sergio@gmail.com',fone: '46 999999999'}
	];
	$scope.cursos = [
		{codigo: 1,nome: 'Java',diashorarios: 'Segundas e quartas, 19h',professor: {codigo: 1,nome: 'Paulo J. Cagol',email: 'cagoljosepaulo@gmail.com',fone: '46 999999999'}},
		{codigo: 2,nome: 'Delphi',diashorarios: 'Terças e quintas, 17h',professor: {codigo: 2,nome: 'Maristela Veigas',email: 'maristela@gmail.com',fone: '46 999999999'}},
		{codigo: 3,nome: 'PHP',diashorarios: 'Segunda e sexta, 22h',professor: {codigo: 3,nome: 'Joao Pedro Lazaro',email: 'joao@gmail.com',fone: '46 999999999'}},
		{codigo: 4,nome: 'Bootstrap',diashorarios: 'Terças e sexta, 13h',professor: {codigo: 4,nome: 'Vilmar Roberto Brito',email: 'vilmar@gmail.com',fone: '46 999999999'}},
		{codigo: 5,nome: 'JavaScript',diashorarios: 'Quartas e quintas, 20h',professor: {codigo: 5,nome: 'Sergio Ramos',email: 'sergio@gmail.com',fone: '46 999999999'}}
	];

	$scope.selecionaCurso = function (cursoSelecionado) {
		$scope.curso = cursoSelecionado;
	}
	$scope.limpar = function () {
		$scope.curso = "";
	}
	$scope.salvar = function (){
		$scope.cursos.push($scope.curso);
		$scope.limpar();
	}

	$scope.excluir = function (){
		$scope.cursos.splice($scope.cursos.indexOf($scope.curso),1);
		$scope.limpar();
	}
});